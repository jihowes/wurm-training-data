# GIF Processing Pipeline

This folder contains scripts for processing GIFs to replace bird content with worm content using AI.

## 📋 Workflow Overview

### Phase 1: Frame Extraction
1. Upload your source GIFs to a `source_gifs/` folder
2. Use our script to automatically split GIFs into frames using ezgif.com
3. Frames will be organized by GIF in `frames/` folder

### Phase 2: Training LoRA
1. Collect training images of your worm character
2. Use these to train a Custom LoRA in ComfyUI/Stable Diffusion
3. The LoRA will learn your worm's style

### Phase 3: Inpainting & Conversion
1. Use AnimateDiff in ComfyUI to inpaint frames
2. Apply your trained LoRA to replace birds with worms
3. Regenerate the animation

### Phase 4: Reassemble
1. Use ComfyUI GIF tools to reassemble frames into animated GIFs
2. Output to `output_gifs/` folder
3. Upload to your website's meme gallery

## 🚀 Quick Start

```bash
cd scripts
python split_gifs.py
```

## 📁 Folder Structure

```
scripts/
├── README.md              # This file
├── split_gifs.py          # Auto-split GIFs using ezgif
├── organize_frames.py     # Organize extracted frames
├── requirements.txt       # Python dependencies
└── comfyui_workflow.json  # ComfyUI workflow for AnimateDiff

source_gifs/               # Put your downloaded burdonbase GIFs here
frames/                    # Extracted frames (auto-generated)
output_gifs/               # Final converted GIFs
training_data/             # Your worm images for LoRA training
```

## 🎯 Next Steps

See detailed instructions in each script file.

