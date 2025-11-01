"""
GIF Frame Extractor
Automatically splits GIFs into individual frames using ezgif.com API
"""

import os
import requests
from pathlib import Path
from tqdm import tqdm
import time

def split_gif_ezgif(gif_path, output_dir):
    """
    Split a GIF into frames using ezgif.com
    
    Args:
        gif_path: Path to the GIF file
        output_dir: Directory to save frames
    
    Returns:
        List of frame file paths
    """
    print(f"\n📂 Processing: {gif_path.name}")
    
    # Upload GIF to ezgif
    upload_url = "https://ezgif.com/split"
    
    try:
        with open(gif_path, 'rb') as f:
            files = {'image': f}
            response = requests.post(upload_url, files=files)
        
        if response.status_code == 200:
            print("✅ Upload successful")
            print("\n⚠️  Manual step required:")
            print(f"   1. Go to: https://ezgif.com/split")
            print(f"   2. Upload: {gif_path.name}")
            print(f"   3. Click 'Split it!'")
            print(f"   4. Download frames as ZIP")
            print(f"   5. Extract to: {output_dir}/")
            print("\n💡 For automated processing, consider using PIL directly (see instructions)")
        else:
            print(f"❌ Upload failed: {response.status_code}")
            
    except Exception as e:
        print(f"❌ Error: {e}")

def split_gif_local(gif_path, output_dir):
    """
    Split a GIF using Python PIL (no API needed)
    
    Args:
        gif_path: Path to the GIF file
        output_dir: Directory to save frames
    """
    from PIL import Image
    
    output_dir.mkdir(parents=True, exist_ok=True)
    
    try:
        gif_name = gif_path.stem
        with Image.open(gif_path) as gif:
            frame_num = 0
            try:
                while True:
                    # Save each frame
                    frame_path = output_dir / f"{gif_name}_frame_{frame_num:03d}.png"
                    gif.save(frame_path, 'PNG')
                    frame_num += 1
                    gif.seek(gif.tell() + 1)  # Move to next frame
            except EOFError:
                pass  # End of frames
        
        print(f"✅ Extracted {frame_num} frames to {output_dir}/")
        return frame_num
        
    except Exception as e:
        print(f"❌ Error processing {gif_path.name}: {e}")
        return 0

def main():
    """Main processing function"""
    
    # Setup directories
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    
    source_dir = project_root / "source_gifs"
    frames_dir = project_root / "frames"
    
    print("🪙 Wurmonbase GIF Frame Extractor")
    print("=" * 50)
    
    # Check if source directory exists
    if not source_dir.exists():
        source_dir.mkdir(parents=True)
        print(f"📁 Created {source_dir}/")
        print("\n⚠️  Please add your GIFs to the 'source_gifs' folder first!")
        return
    
    # Find all GIF files
    gifs = list(source_dir.glob("*.gif")) + list(source_dir.glob("*.GIF"))
    
    if not gifs:
        print(f"❌ No GIF files found in {source_dir}/")
        print("   Please add GIF files to the source_gifs folder")
        return
    
    print(f"📊 Found {len(gifs)} GIF file(s)\n")
    
    # Process each GIF
    for gif_path in tqdm(gifs, desc="Processing GIFs"):
        # Create output directory for this GIF's frames
        gif_output_dir = frames_dir / gif_path.stem
        gif_output_dir.mkdir(parents=True, exist_ok=True)
        
        # Split using PIL (local method)
        frame_count = split_gif_local(gif_path, gif_output_dir)
        
        if frame_count == 0:
            print(f"   ⚠️  Failed to split {gif_path.name}")
    
    print("\n" + "=" * 50)
    print("✅ Frame extraction complete!")
    print(f"📁 Frames saved to: {frames_dir}/")
    print("\n🎯 Next step: Train your LoRA in ComfyUI")

if __name__ == "__main__":
    main()

