import json
import uuid

def add_unique_ids(file_path):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
    except FileNotFoundError:
        print(f"Error: File '{file_path}' not found.")
        return

    # Check if data is a list and not empty
    if isinstance(data, list) and data:
        # Add unique ID to each piece of data
        for item in data:
            item['id'] = str(uuid.uuid4())

        # Write the updated data back to the file
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=2)

        print(f"Successfully added unique IDs to '{file_path}'.")
    else:
        print(f"Error: Invalid data format in '{file_path}'.")

# Example usage
add_unique_ids('output.json')