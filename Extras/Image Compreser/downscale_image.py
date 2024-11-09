import os
from PIL import Image

def resize_images(input_folder, output_folder, target_width, target_height):
    # Ensure output folder exists
    os.makedirs(output_folder, exist_ok=True)

    # Loop through each file in the input folder
    for filename in os.listdir(input_folder):
        # Check if file is an image
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, filename)

            # Open and resize the image with smooth resizing
            with Image.open(input_path) as img:
                original_width, original_height = img.size

                # Determine if multi-step resizing is needed
                if max(original_width / target_width, original_height / target_height) > 2:
                    # Multi-step resizing for smoother downscaling
                    intermediate_width, intermediate_height = original_width, original_height
                    while intermediate_width > 2 * target_width and intermediate_height > 2 * target_height:
                        intermediate_width //= 2
                        intermediate_height //= 2
                        img = img.resize((intermediate_width, intermediate_height), Image.Resampling.LANCZOS)

                # Final resize to the target size
                resized_img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
                resized_img.save(output_path)
                print(f"Saved resized image: {output_path} with size {target_width}x{target_height}")

if __name__ == "__main__":
    # Define input and output folders relative to this script's location
    script_dir = os.path.dirname(os.path.abspath(__file__))
    input_folder = os.path.join(script_dir, "input_images")
    output_folder = os.path.join(script_dir, "output_images")

    # Prompt user for target resolution
    target_width = int(input("Enter the target width for resizing: "))
    target_height = int(input("Enter the target height for resizing: "))

    # Run the resizing function
    resize_images(input_folder, output_folder, target_width, target_height)