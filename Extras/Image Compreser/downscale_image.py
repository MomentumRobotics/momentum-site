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

            # Open and resize the image
            with Image.open(input_path) as img:
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