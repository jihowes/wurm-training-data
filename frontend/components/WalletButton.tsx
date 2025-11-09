'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const BASE_CHAIN_ID = '0x2105'; // Base mainnet
const BASE_RPC_URL = 'https://mainnet.base.org';
const BASESCAN_URL = 'https://basescan.org/address/';

type EthereumProvider = {
  request: (args: { method: string; params?: any[] | Record<string, unknown> }) => Promise<any>;
  on: (event: string, handler: (...args: any[]) => void) => void;
  removeListener: (event: string, handler: (...args: any[]) => void) => void;
};

const getProvider = (): EthereumProvider | null => {
  if (typeof window === 'undefined') return null;
  return (window as unknown as { ethereum?: EthereumProvider }).ethereum ?? null;
};

export default function WalletButton() {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [provider, setProvider] = useState<EthereumProvider | null>(() => getProvider());
  const [providerDetected, setProviderDetected] = useState(() => Boolean(getProvider()));
  const menuRef = useRef<HTMLDivElement>(null);

  const shortenAddress = useCallback(
    (addr: string) => `${addr.slice(0, 6)}...${addr.slice(-4)}`,
    []
  );

  const ensureBaseNetwork = useCallback(async () => {
    if (!provider) return;
    try {
      const chainId = await provider.request({ method: 'eth_chainId' });
      if (chainId === BASE_CHAIN_ID) return;

      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: BASE_CHAIN_ID }],
        });
      } catch (switchError: any) {
        if (switchError?.code === 4902) {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: BASE_CHAIN_ID,
                chainName: 'Base',
                nativeCurrency: {
                  name: 'Ethereum',
                  symbol: 'ETH',
                  decimals: 18,
                },
                rpcUrls: [BASE_RPC_URL],
                blockExplorerUrls: ['https://basescan.org'],
              },
            ],
          });
        } else {
          throw switchError;
        }
      }
    } catch (error) {
      console.error('Failed to switch to Base network:', error);
      throw error;
    }
  }, [provider]);

  const handleAccountsChanged = useCallback((accounts: string[]) => {
    if (!accounts || accounts.length === 0) {
      setAddress(null);
      setIsMenuOpen(false);
      return;
    }
    setAddress(accounts[0]);
  }, []);

  const handleChainChanged = useCallback(
    async (chainId: string) => {
      if (chainId !== BASE_CHAIN_ID) {
        try {
          await ensureBaseNetwork();
        } catch {
          alert('Switch to Base network to interact with $WURM.');
        }
      }
    },
    [ensureBaseNetwork]
  );

  useEffect(() => {
    if (!provider) return;

    provider
      .request({ method: 'eth_accounts' })
      .then((accounts: string[]) => {
        if (accounts && accounts.length > 0) {
          setAddress(accounts[0]);
        }
      })
      .catch((error) => console.error('Failed to fetch accounts:', error));

    provider.on('accountsChanged', handleAccountsChanged);
    provider.on('chainChanged', handleChainChanged);

    return () => {
      provider.removeListener('accountsChanged', handleAccountsChanged);
      provider.removeListener('chainChanged', handleChainChanged);
    };
  }, [provider, handleAccountsChanged, handleChainChanged]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (!isMenuOpen) return;

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    if (provider) {
      setProviderDetected(true);
      return;
    }

    let attempts = 0;
    const interval = setInterval(() => {
      const detected = getProvider();
      attempts += 1;
      if (detected) {
        setProvider(detected);
        setProviderDetected(true);
        clearInterval(interval);
      } else if (attempts > 40) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [provider]);

  const connectWallet = useCallback(async () => {
    if (!provider) {
      if (typeof window !== 'undefined') {
        const origin = window.location.origin.replace(/^https?:\/\//, '');
        window.open(`https://metamask.app.link/dapp/${origin}`, '_blank');
        alert('No wallet detected. Opening MetaMask deep link.');
      }
      alert('No wallet detected. Please install MetaMask or Coinbase Wallet.');
      return;
    }

    setIsConnecting(true);

    try {
      const accounts = await provider.request({
        method: 'eth_requestAccounts',
      });

      if (!accounts || accounts.length === 0) {
        throw new Error('No accounts returned by wallet.');
      }

      await ensureBaseNetwork();
      setAddress(accounts[0]);
      setIsMenuOpen(false);
    } catch (error: any) {
      console.error('Error connecting wallet:', error);
      if (error?.code === 4001) {
        alert('Connection request rejected. Please approve the request in your wallet.');
      } else {
        alert('Failed to connect wallet. Please try again.');
      }
    } finally {
      setIsConnecting(false);
    }
  }, [provider, ensureBaseNetwork]);

  const disconnectWallet = useCallback(async () => {
    if (!provider) {
      setAddress(null);
      setIsMenuOpen(false);
      return;
    }

    try {
      await provider.request({
        method: 'wallet_revokePermissions',
        params: [{ eth_accounts: {} }],
      });
    } catch (error) {
      // Not all wallets support revoke; fall back to clearing state
      console.warn('wallet_revokePermissions not supported, falling back to local disconnect.');
    } finally {
      setAddress(null);
      setIsMenuOpen(false);
    }
  }, [provider]);

  const copyAddress = useCallback(async () => {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      alert('Address copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy address:', error);
      alert('Could not copy address. Try copying manually.');
    }
  }, [address]);

  return (
    <div className="relative" ref={menuRef}>
      {!address ? (
        <button
          onClick={connectWallet}
          disabled={isConnecting}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-base sm:text-lg transition-transform shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isConnecting ? (
            <>
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/50 border-t-white"></span>
              Connecting...
            </>
          ) : (
            <>
              <span role="img" aria-hidden="true">
                🔗
              </span>
              Connect Wallet
            </>
          )}
        </button>
      ) : (
        <>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-base sm:text-lg transition-transform shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2"
          >
            <span role="img" aria-hidden="true">
              🪙
            </span>
            {shortenAddress(address)}
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isMenuOpen && (
            <div className="absolute top-full right-0 z-20 mt-2 w-64 overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/95 backdrop-blur shadow-xl">
              <div className="border-b border-gray-800 px-4 py-3 text-xs uppercase tracking-wide text-gray-400">
                Connected to Base
              </div>
              <button
                onClick={copyAddress}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-white hover:bg-gray-800 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m2 4h2a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-2" />
                </svg>
                Copy address
              </button>
              <a
                href={`${BASESCAN_URL}${address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-white hover:bg-gray-800 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View on BaseScan
              </a>
              <button
                onClick={disconnectWallet}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-red-400 hover:bg-gray-800 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Disconnect
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

