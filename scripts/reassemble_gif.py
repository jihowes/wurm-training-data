"""
GIF Reassembler
Takes a folder of frames and reassembles them into a GIF
"""

from pathlib import Path
from PIL import Image
import sys

def reassemble_gif(frame_dir, output_path, duration=100, loop=0):
    """
    Reassemble frames into a GIF
    
    Args:
        frame_dir: Directory containing frame images
        output_path: Output GIF path
        duration: Frame duration in milliseconds
        loop: Number of loops (0 = infinite)
    """
    frame_dir = Path(frame_dir)
    
    if not frame_dir.exists():
        print(f"❌ Frame directory not found: {frame_dir}")
        return False
    
    # Find all images in directory
    images = []
    for ext in ['*.png', '*.jpg', '*.jpeg']:
        images.extend(sorted(frame_dir.glob(ext)))
        images.extend(sorted(frame_dir.glob(ext.upper())))
    
    if not images:
        print(f"❌ No images found in {frame_dir}")
        return False
    
    print(f"📊 Found {len(images)} frames")
    print(f"🔄 Assembling GIF...")
    
    # Load all frames
    frames = []
    for img_path in images:
        frames.append(Image.open(img_path))
    
    # Save as GIF
    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    frames[0].save(
        output_path,
        save_all=True,
        append_images=frames[1:],
        duration=duration,
        loop=loop,
        optimize=True
    )
    
    print(f"✅ GIF saved to: {output_path}")
    return True

def main():
    if len(sys.argv) < 3:
        print("Usage: python reassemble_gif.py <frames_folder> <output.gif> [duration_ms]")
        print("\nExample:")
        print("  python reassemble_gif.py frames/bird_flying output/worm_flying.gif")
        print("  python reassemble_gif.py frames/bird_flying output/worm_flying.gif 200")
        return
    
    frame_dir = sys.argv[1]
    output_path = sys.argv[2]
    duration = int(sys.argv[3]) if len(sys.argv) > 3 else 100
    
    print("🪙 Wurmonbase GIF Reassembler")
    print("=" * 50)
    reassemble_gif(frame_dir, output_path, duration)

if __name__ == "__main__":
    main()

