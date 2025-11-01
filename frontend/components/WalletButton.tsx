'use client';

import { useState } from 'react';

// Base Chain ID: 8453 (Mainnet) or 84532 (Sepolia Testnet)
const BASE_CHAIN_ID = '0x2105'; // Base Mainnet in hex
const BASE_RPC_URL = 'https://mainnet.base.org';

export default function WalletButton() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress('');
    setShowMenu(false);
    // Remove event listeners
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      (window as any).ethereum.removeAllListeners('accountsChanged');
      (window as any).ethereum.removeAllListeners('chainChanged');
    }
  };

  const switchToBaseNetwork = async () => {
    try {
      await (window as any).ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: BASE_CHAIN_ID }],
      });
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902) {
        try {
          await (window as any).ethereum.request({
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
        } catch (addError) {
          console.error('Error adding Base network:', addError);
          alert('Failed to add Base network. Please add it manually in your wallet.');
        }
      } else {
        console.error('Error switching to Base network:', switchError);
      }
    }
  };

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      try {
        // Request account access
        const accounts = await (window as any).ethereum.request({
          method: 'eth_requestAccounts'
        });
        
        if (accounts && accounts.length > 0) {
          // Check current chain ID
          const chainId = await (window as any).ethereum.request({
            method: 'eth_chainId'
          });
          
          // If not on Base, switch to it
          if (chainId !== BASE_CHAIN_ID) {
            await switchToBaseNetwork();
          }
          
          setAddress(accounts[0]);
          setIsConnected(true);
          
          // Listen for account changes
          (window as any).ethereum.on('accountsChanged', (accounts: string[]) => {
            if (accounts.length > 0) {
              setAddress(accounts[0]);
            } else {
              setIsConnected(false);
              setAddress('');
            }
          });

          // Listen for chain changes
          (window as any).ethereum.on('chainChanged', (chainId: string) => {
            if (chainId !== BASE_CHAIN_ID) {
              alert('Please switch to Base network to use $WURM');
            }
          });
        }
      } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet. Please make sure you have MetaMask or another wallet installed.');
      }
    } else {
      alert('Please install MetaMask or another Web3 wallet to connect.');
      window.open('https://metamask.io/', '_blank');
    }
  };

  const shortenAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className="relative">
      {!isConnected ? (
        <button
          onClick={connectWallet}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-base sm:text-lg hover:scale-110 transition-transform shadow-lg shadow-purple-500/50"
        >
          🔗 CONNECT WALLET
        </button>
      ) : (
        <>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-base sm:text-lg hover:scale-110 transition-transform shadow-lg shadow-purple-500/50 flex items-center gap-2"
          >
            <span>🪙 {shortenAddress(address)}</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {showMenu && (
            <div className="absolute top-full mt-2 right-0 bg-gray-900 rounded-2xl border border-gray-700 shadow-xl py-2 min-w-[200px]">
              <button
                onClick={disconnectWallet}
                className="w-full text-left px-4 py-3 text-red-400 hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
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

