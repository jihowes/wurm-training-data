# ComfyUI Setup for AnimateDiff

This guide will help you set up ComfyUI to replace birds with worms in your GIFs.

## 📥 Installing ComfyUI

### Option 1: Portable (Recommended for Windows)

```powershell
# Download ComfyUI
git clone https://github.com/comfyanonymous/ComfyUI
cd ComfyUI
python -m venv venv
.\venv\Scripts\activate
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
pip install -r requirements.txt
```

### Option 2: Using Python directly

```powershell
cd ComfyUI
pip install -r requirements.txt
```

## 🔌 Required Custom Nodes

Install these custom nodes for AnimateDiff support:

1. **AnimateDiff** (required)
   ```
   https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved
   ```
   
2. **ControlNet** (for better consistency)
   ```
   https://github.com/Fannovel16/comfyui_controlnet_aux
   ```

3. **WAS Node Suite** (utilities)
   ```
   https://github.com/WASasquatch/was-node-suite-comfyui
   ```

4. **Video Helper Suite** (for GIF handling)
   ```
   https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite
   ```

### Installation Steps:

1. Open ComfyUI folder
2. Go to `custom_nodes/` directory
3. Clone each repo:
   ```bash
   git clone https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved
   git clone https://github.com/Fannovel16/comfyui_controlnet_aux
   git clone https://github.com/WASasquatch/was-node-suite-comfyui
   git clone https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite
   ```

4. Restart ComfyUI

## 🎨 Workflow Overview

### Step 1: Prepare Training Data

1. Collect 20-50 high-quality images of your worm character
2. Save them to `training_data/wurm/` folder
3. Keep consistent style and lighting

### Step 2: Train LoRA

#### Using Automatic1111 or Kohya_ss:

1. Install Kohya_ss:
   ```bash
   git clone https://github.com/bmaltais/kohya_ss
   cd kohya_ss
   ```
   
2. Prepare your images:
   - Ensure all images have consistent aspect ratio
   - Consider adding captions describing your worm
   
3. Train LoRA:
   - Use SD 1.5 or SDXL base model
   - Recommend 20-30 epochs
   - Output LoRA should be `.safetensors` file

4. Save LoRA to ComfyUI models folder:
   ```
   ComfyUI/models/loras/your_wurm_lora.safetensors
   ```

### Step 3: Load Frames in ComfyUI

1. Use VideoHelperSuite nodes to load your frame sequence
2. Or load PNG sequence from `frames/` folder

### Step 4: Inpaint Frames

1. **AnimateDiff** node for temporal consistency
2. **ControlNet Inpainting** to maintain structure
3. **Your LoRA** to replace bird with worm
4. **IPAdapter** (optional) for style consistency

### Step 5: Export GIF

Use VideoHelperSuite's GIF export node to reassemble frames.

## 🔗 Recommended Resources

- [ComfyUI Documentation](https://github.com/comfyanonymous/ComfyUI)
- [AnimateDiff Official Repo](https://github.com/guoyww/AnimateDiff)
- [Stable Diffusion LoRA Training Guide](https://github.com/bmaltais/kohya_ss/blob/main/train_network_README.md)
- [ComfyUI Workflows Collection](https://openart.ai/workflows)

## 💡 Tips

1. **Start Simple**: Test with a few frames first before processing full GIFs
2. **Seed Control**: Use fixed seeds for consistency across frames
3. **Batch Processing**: Use ComfyUI's batch processing for efficiency
4. **Denoising**: Lower denoising (0.5-0.6) keeps more original detail
5. **Masking**: Good masks are critical - use ControlNet for edge detection

## ⚠️ Note

For beginners, consider starting with manual frame editing in image editors first,
then move to AI automation once comfortable with the workflow.

