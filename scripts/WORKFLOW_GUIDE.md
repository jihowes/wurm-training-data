# Complete Workflow Guide: Bird → Worm GIF Conversion

## 🎯 Goal
Convert burdonbase GIFs into wurmonbase GIFs by replacing birds with worms while maintaining the same humor and animation quality.

## 📋 Step-by-Step Process

### Phase 1: Setup (One-time)

```bash
# Install Python dependencies
pip install -r scripts/requirements.txt

# Setup folder structure
python scripts/quick_start.py
```

**Output**: Creates folders for source GIFs, frames, output, and training data.

### Phase 2: Prepare Your GIFs

1. Download GIFs from burdonbase that you like
2. Save them to `source_gifs/` folder
3. Name them clearly (e.g., `bird_flying.gif`, `bird_dance.gif`)

### Phase 3: Extract Frames

```bash
python scripts/split_gifs.py
```

**What it does:**
- Reads all GIFs from `source_gifs/`
- Splits each GIF into individual PNG frames
- Saves frames in `frames/<gif_name>/` folders

**Example output:**
```
frames/
  ├── bird_flying/
  │   ├── bird_flying_frame_000.png
  │   ├── bird_flying_frame_001.png
  │   └── ...
  └── bird_dance/
      ├── bird_dance_frame_000.png
      └── ...
```

### Phase 4: Prepare Training Data

1. Collect 20-50 images of your worm character in various poses
2. Save to `training_data/wurm/` folder
3. Ensure:
   - Consistent style
   - Good lighting
   - Different angles and poses
   - High resolution (512x512 or larger)

### Phase 5: Train LoRA

#### Option A: Using Kohya_ss (Recommended)

```bash
# Clone Kohya_ss
git clone https://github.com/bmaltais/kohya_ss
cd kohya_ss

# Follow Kohya_ss setup instructions
# Then train your LoRA
```

**Training Settings:**
- Model: Stable Diffusion 1.5 or SDXL
- Steps: 1000-2000
- Epochs: 20-30
- Learning Rate: 1e-4
- Resolution: 512x512 or 768x768

#### Option B: Using ComfyUI's built-in trainer

1. Install AnimateDiff custom node
2. Use AnimateDiff's training interface
3. Point to your `training_data/wurm/` folder

### Phase 6: Setup ComfyUI

See `COMFYUI_SETUP.md` for detailed instructions.

**Key components:**
1. Install AnimateDiff
2. Install ControlNet
3. Install Video Helper Suite
4. Load your trained LoRA

### Phase 7: Process Frames in ComfyUI

#### Workflow Overview

```
Input Frame → AnimateDiff → ControlNet Inpaint → LoRA (Worm Style) → Output Frame
```

**Steps:**
1. Load your frame sequence using Video Helper Suite
2. Create mask around the bird (you can automate this)
3. Apply AnimateDiff for temporal consistency
4. Use ControlNet Inpainting to maintain structure
5. Apply your worm LoRA
6. Generate output frame

**Tips:**
- Start with 5-10 frames to test
- Use fixed seed for consistency
- Lower denoising strength (0.5-0.7)
- Batch process for efficiency

### Phase 8: Reassemble GIF

```bash
# Using Video Helper Suite in ComfyUI
```

Or use Python PIL:

```python
from PIL import Image
import glob

frames = []
frame_paths = sorted(glob.glob("output_frames/*.png"))

for frame_path in frame_paths:
    frames.append(Image.open(frame_path))

frames[0].save('output_gifs/worm_flying.gif',
               save_all=True, append_images=frames[1:],
               duration=100, loop=0)
```

### Phase 9: Upload to Website

1. Copy final GIFs to `frontend/public/images/gallery/`
2. Update `frontend/components/MemeGallery.tsx` with new meme entries

## 🔧 Tools You'll Need

### Required
- ✅ Python 3.8+ with PIL
- ✅ ComfyUI with custom nodes
- ✅ GPU (NVIDIA recommended, 8GB+ VRAM)

### Recommended
- ✅ Kohya_ss for LoRA training
- ✅ AnimateDiff for temporal consistency
- ✅ ControlNet for better inpainting

### Optional
- RunPod/Automatic1111 for easier LoRA training
- Adobe After Effects for post-processing
- Handbrake for compression optimization

## 📊 Expected Timeline

- **Setup**: 1-2 hours
- **Training LoRA**: 2-4 hours (depends on GPU)
- **Processing per GIF**: 10-30 minutes (depends on length)
- **Manual tweaks**: Variable

## 🎓 Learning Resources

1. **AnimateDiff**: https://github.com/guoyww/AnimateDiff
2. **LoRA Training**: https://github.com/bmaltais/kohya_ss
3. **ComfyUI Tutorials**: https://www.youtube.com/results?search_query=comfyui+tutorial
4. **Stable Diffusion**: https://github.com/Stability-AI/stablediffusion

## 💡 Tips for Success

1. **Start small**: Test with 1-2 GIFs first
2. **Quality matters**: Better source GIFs = better outputs
3. **Masking is key**: Accurate masks prevent artifacts
4. **Iterate**: Adjust settings based on results
5. **Keep originals**: Always backup your source files

## ⚠️ Common Issues

### Issue: Flickering between frames
**Solution**: Lower CFG scale, increase denoising consistency, use AnimateDiff

### Issue: Worm looks wrong
**Solution**: Retrain LoRA with better training data, adjust LoRA strength

### Issue: Background artifacts
**Solution**: Better masking, use ControlNet structure preservation

### Issue: Slow processing
**Solution**: Batch frames, use GPU acceleration, optimize resolution

## 🚀 Quick Command Reference

```bash
# Setup
python scripts/quick_start.py

# Split GIFs
python scripts/split_gifs.py

# Check dependencies
pip install -r scripts/requirements.txt

# Manual frame reassembly
python scripts/reassemble_gif.py frames/bird_flying output_gifs/worm_flying.gif
```

## 📝 Next: Actually Building It

Would you like me to create the actual ComfyUI workflow JSON and more automation scripts?

