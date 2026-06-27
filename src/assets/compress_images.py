import os
from PIL import Image

def compress_images():
    assets_dir = os.path.dirname(os.path.abspath(__file__))
    webp_dir = os.path.join(assets_dir, 'webp')
    
    if not os.path.exists(webp_dir):
        os.makedirs(webp_dir)
        
    print(f"Scanning directory: {assets_dir}")
    total_original = 0
    total_saved = 0
    
    for filename in os.listdir(assets_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')) and not filename.startswith('.'):
            input_path = os.path.join(assets_dir, filename)
            base_name = os.path.splitext(filename)[0]
            output_filename = f"{base_name}.webp"
            output_path = os.path.join(webp_dir, output_filename)
            
            try:
                img = Image.open(input_path)
                orig_size = os.path.getsize(input_path)
                total_original += orig_size
                
                # Resize if extremely large (e.g. max width/height of 1000px)
                max_dimension = 1000
                width, height = img.size
                if width > max_dimension or height > max_dimension:
                    if width > height:
                        new_width = max_dimension
                        new_height = int(height * (max_dimension / width))
                    else:
                        new_height = max_dimension
                        new_width = int(width * (max_dimension / height))
                    img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                
                # Save as WebP
                img.save(output_path, 'WEBP', quality=80)
                
                new_size = os.path.getsize(output_path)
                total_saved += new_size
                savings = (orig_size - new_size) / orig_size * 100
                print(f"Compressed {filename}: {orig_size / (1024*1024):.2f}MB -> {new_size / (1024*1024):.2f}MB ({savings:.1f}% saved)")
                
            except Exception as e:
                print(f"Failed to compress {filename}: {e}")
                
    savings_percentage = (total_original - total_saved) / total_original * 100 if total_original > 0 else 0
    print(f"\nOptimization Finished!")
    print(f"Total Original: {total_original / (1024*1024):.2f}MB")
    print(f"Total Optimized: {total_saved / (1024*1024):.2f}MB")
    print(f"Total Space Saved: {(total_original - total_saved) / (1024*1024):.2f}MB ({savings_percentage:.1f}%)")

if __name__ == "__main__":
    compress_images()
