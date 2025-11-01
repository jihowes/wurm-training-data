"""
Quick Start Script
Sets up the GIF processing folder structure and checks dependencies
"""

from pathlib import Path

def setup_folders():
    """Create necessary folder structure"""
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    
    folders = [
        "source_gifs",      # Put your burdonbase GIFs here
        "frames",           # Extracted frames (auto-generated)
        "output_gifs",      # Final wurmonbase GIFs
        "training_data/wurm" # Your worm training images
    ]
    
    print("📁 Setting up folder structure...")
    for folder in folders:
        folder_path = project_root / folder
        folder_path.mkdir(parents=True, exist_ok=True)
        print(f"   ✅ {folder}")
    
    print("\n📋 Folder structure ready!")
    print("\n🎯 Next steps:")
    print("   1. Add your burdonbase GIFs to 'source_gifs/'")
    print("   2. Add worm training images to 'training_data/wurm/'")
    print("   3. Run: python scripts/split_gifs.py")

def check_dependencies():
    """Check if required Python packages are installed"""
    print("\n🔍 Checking dependencies...")
    
    try:
        import PIL
        print(f"   ✅ Pillow (v{PIL.__version__})")
    except ImportError:
        print("   ❌ Pillow not installed")
        print("      Run: pip install pillow")
    
    try:
        import requests
        print(f"   ✅ requests (v{requests.__version__})")
    except ImportError:
        print("   ❌ requests not installed")
        print("      Run: pip install requests")
    
    try:
        import tqdm
        print(f"   ✅ tqdm (v{tqdm.__version__})")
    except ImportError:
        print("   ❌ tqdm not installed")
        print("      Run: pip install tqdm")

if __name__ == "__main__":
    print("🪙 Wurmonbase GIF Processing Setup")
    print("=" * 50)
    
    setup_folders()
    check_dependencies()
    
    print("\n" + "=" * 50)
    print("✅ Setup complete!")
    print("\n💡 Pro tip: Start with 1-2 GIFs to test before processing all")

