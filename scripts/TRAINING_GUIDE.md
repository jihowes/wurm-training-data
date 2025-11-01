# 🎓 LoRA Training Guide for Wurmonbase

This guide walks you through training a LoRA to convert bird memes into worm memes.

## 📋 What You Need

### Hardware Requirements
- **GPU**: NVIDIA GPU with 8GB+ VRAM (10GB+ recommended)
  - RTX 3060, 3070, 3080, 3090, 4060, 4070, 4080, 4090
  - Or a cloud GPU (RunPod, Vast.ai, etc.)
- **RAM**: 16GB+ recommended
- **Storage**: 50GB+ free space

### Software Requirements
- Python 3.10+ (3.11 recommended)
- Git
- CUDA-compatible drivers (for GPU training)

## 🚀 Quick Start: Choose Your Method

### Method 1: RunPod Cloud GPU (Easiest, No Setup)

**Best for**: Beginners who want to avoid local setup

1. Go to https://runpod.io
2. Deploy a GPU pod (RTX 4090 recommended)
3. Select "Kohya_ss" or "Automatic1111" template
4. Upload your training images
5. Train LoRA in browser interface
6. Download the `.safetensors` file

**Cost**: ~$0.30-0.50/hour

### Method 2: Kohya_ss (Local - Recommended)

**Best for**: Serious users who want full control

### Method 3: Automatic1111 (Alternative Local)

**Best for**: Users already using Stable Diffusion

## 📚 Complete Kohya_ss Setup Guide

### Step 1: Install Kohya_ss

```powershell
# Clone repository
git clone https://github.com/bmaltais/kohya_ss.git
cd kohya_ss

# Create virtual environment
python -m venv venv
.\venv\Scripts\activate

# Install PyTorch with CUDA (adjust URL for your CUDA version)
pip install torch torchvision --index-url https://download.pytorch.org/whl/cu121

# Install dependencies
pip install -r requirements.txt

# For Windows: Install additional dependencies
pip install bitsandbytes

# Launch Kohya_ss
.\setup.bat
```

### Step 2: Prepare Training Data

#### 2.1 Collect Worm Images

You need **20-50 high-quality images** of your worm character:

**Good training data:**
- ✅ Various poses (standing, crawling, dancing, etc.)
- ✅ Different angles (front, side, 3/4 view, etc.)
- ✅ Close-ups and full body shots
- ✅ Consistent style/coloring
- ✅ Good lighting
- ✅ High resolution (512x512 minimum, 768x768+ better)

**Bad training data:**
- ❌ All the same pose/angle
- ❌ Blurry or low-res images
- ❌ Inconsistent style
- ❌ Too few images (<10)

#### 2.2 Organize Images

Create this structure:
```
training_data/
└── wurm/
    └── images/
        ├── wurm_001.png
        ├── wurm_002.png
        ├── wurm_003.png
        └── ...
```

#### 2.3 Create Captions (Optional but Recommended)

For each image, create a `.txt` file with the same name describing it:

```
wurm_001.txt: "a worm with blue eyes crawling"
wurm_002.txt: "a worm standing upright dancing"
wurm_003.txt: "close up of a worm with blue eyes"
```

**Or use automatic captioning:**
```powershell
# In Kohya_ss interface, use BLIP captioning
# This auto-generates captions for all images
```

### Step 3: Configure Training Settings

#### 3.1 Navigate to LoRA Training

1. Open Kohya_ss GUI
2. Go to "LoRA" tab
3. Click "LoRA train"

#### 3.2 Essential Settings

**Dataset:**
- **Train images directory**: Browse to your `training_data/wurm` folder
- **Reg images directory**: (Optional) Regularization images to prevent overfitting
- **Output directory**: Where your trained LoRA will be saved

**Parameters:**
- **LoRA type**: `Standard` (for SD 1.5) or `LyCORIS-LoCon` (more advanced)
- **LoRA network rank**: `8` (good balance, higher = more detail but overfitting risk)
- **LoRA network alpha**: `16` (typically 2x the rank)
- **Train batch size**: `1` or `2` (depends on GPU VRAM)
- **Epoch**: `20-30` (start low, increase if underfit)
- **Save every N epochs**: `5` (so you can stop training if good enough)
- **Learning rate**: `0.0001` or `1e-4`
- **Learning rate scheduler**: `cosine`
- **Network dropout**: `0.05`
- **Gradient checkpointing**: ✅ (saves VRAM)

**Resolution:**
- **Resolution**: `512` or `768` (must match image size)
- **Bucketing**: ✅ (uses images of different sizes efficiently)

**Optimizer:**
- **Optimizer**: `AdamW8bit` (saves VRAM and works great)
- **Precision**: `bf16` or `fp16`

**Base Model:**
- **SD model**: Download Stable Diffusion 1.5 base model
- Save to: `models/Stable-diffusion/model.safetensors`
- Download from: https://huggingface.co/runwayml/stable-diffusion-v1-5

### Step 4: Start Training

1. Click "Start training"
2. Watch console for progress
3. Training time: 30 minutes - 2 hours (depends on GPU)
4. Your LoRA will be saved in the output directory

**Expected console output:**
```
Epoch 1/30: 100%|████████| 50/50 [15:23<00:00, 18.47s/it, loss=0.45]
Epoch 2/30: 100%|████████| 50/50 [15:20<00:00, 18.40s/it, loss=0.38]
...
```

### Step 5: Test Your LoRA

#### Using ComfyUI (Recommended)

1. Install ComfyUI (see COMFYUI_SETUP.md)
2. Put your `.safetensors` LoRA file in:
   ```
   ComfyUI/models/loras/your_wurm_lora.safetensors
   ```
3. Load ComfyUI workflow
4. Set LoRA strength: Start with `0.7-0.8`
5. Test generation with prompts like:
   ```
   a worm with blue eyes, meme style, cartoon
   ```

#### Using Automatic1111 (Alternative)

1. Put LoRA in `stable-diffusion-webui/models/Lora/`
2. Generate test image
3. Use `<lora:your_wurm_lora:0.8>` in prompt

### Step 6: Troubleshooting

**Overfitting** (LoRA too strong, weird artifacts):
- Reduce rank (from 8 to 4)
- Reduce alpha (from 16 to 8)
- Fewer epochs
- Increase dropout

**Underfitting** (LoRA too weak, doesn't look like your worm):
- Increase rank (from 8 to 16)
- Increase alpha (from 16 to 32)
- More epochs
- Better training data
- Increase learning rate

**Not enough VRAM**:
- Use `gradient_checkpointing=True`
- Reduce `train_batch_size` to 1
- Use `AdamW8bit` optimizer
- Reduce resolution to 512
- Use cloud GPU (RunPod)

## 🎯 Recommended Workflow

1. **Start small**: 20 images, rank 8, 20 epochs
2. **Test**: Generate a few test images
3. **Iterate**: Adjust settings based on results
4. **Scale up**: Add more images, refine parameters

## 🔗 Resources

- **Kohya_ss GitHub**: https://github.com/bmaltais/kohya_ss
- **Stable Diffusion Models**: https://civitai.com
- **LoRA Training Guide**: https://rentry.org/kohya-train-lora
- **Example Training Configs**: https://github.com/bmaltais/kohya_ss/blob/main/configs/dataset_config.toml
- **RunPod Cloud GPUs**: https://runpod.io

## 📝 Quick Reference

| Parameter | Recommended Value | What It Does |
|-----------|-------------------|--------------|
| LoRA Rank | 8 or 16 | How many parameters to train |
| LoRA Alpha | 16 or 32 | Strength multiplier (usually 2x rank) |
| Learning Rate | 0.0001 | How fast AI learns |
| Batch Size | 1-2 | Images processed at once |
| Epochs | 20-30 | Full passes through data |
| Resolution | 512 or 768 | Image dimensions |

## ⚠️ Common Mistakes

1. **Too few training images** → Poor generalization
2. **All images same pose** → Only learns one pose
3. **Rank too high** → Overfitting, artifacts
4. **Learning rate too high** → Training unstable
5. **No regularization** → Overfitting to training data

## 🎓 Next Steps

Once you have a trained LoRA:
1. Move to `scripts/COMFYUI_SETUP.md` for using it
2. Process your burdonbase GIFs
3. Generate wurmonbase memes!

---

**Need help?** Check GitHub issues or Stable Diffusion Discord servers.

