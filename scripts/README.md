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
├── README.md                # This file (overview)
├── TRAINING_GUIDE.md        # 📚 How to train your LoRA
├── COMFYUI_SETUP.md         # ComfyUI installation guide
├── WORKFLOW_GUIDE.md        # Complete end-to-end workflow
├── split_gifs.py            # Extract frames from GIFs
├── reassemble_gif.py        # Rebuild GIFs from frames
├── quick_start.py           # Setup folder structure
└── requirements.txt         # Python dependencies

source_gifs/                 # Put your downloaded burdonbase GIFs here
frames/                      # Extracted frames (auto-generated)
output_gifs/                 # Final converted wurmonbase GIFs
training_data/wurm/          # Your worm images for LoRA training
```

## 🎯 Quick Start Guide

### 1️⃣ Train Your LoRA (Required First Step)
**See: `TRAINING_GUIDE.md` for detailed instructions**

**TL;DR**: 
- You need an NVIDIA GPU (8GB+ VRAM) OR use cloud GPU (RunPod)
- Collect 20-50 images of your worm character
- Train LoRA using Kohya_ss or RunPod
- Result: A `.safetensors` file that knows your worm

### 2️⃣ Setup ComfyUI
**See: `COMFYUI_SETUP.md`**

Install ComfyUI and custom nodes for AnimateDiff

### 3️⃣ Process GIFs
**See: `WORKFLOW_GUIDE.md`**

Follow the complete workflow to convert burdonbase → wurmonbase GIFs

## 📚 Learning Path

**New to AI? Start here:**
1. Read `TRAINING_GUIDE.md` → Train your LoRA
2. Read `COMFYUI_SETUP.md` → Setup tools
3. Read `WORKFLOW_GUIDE.md` → Convert your first GIF
4. Run `python split_gifs.py` → Extract frames
5. Process in ComfyUI → Replace birds with worms
6. Run `reassemble_gif.py` → Create final GIF

