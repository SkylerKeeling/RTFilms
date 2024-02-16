import json

def flatten_data(file_path='output.json'):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)

        # Check if the data is a list of lists
        if isinstance(data, list) and all(isinstance(entry, list) for entry in data):
            # Flatten each entry and overwrite the file
            flattened_data = [entry[0] for entry in data]
            with open(file_path, 'w') as file:
                json.dump(flattened_data, file, indent=2)
            print(f"Data flattened in {file_path}.")
        else:
            print(f"No action taken. {file_path} does not contain the expected structure.")
    except FileNotFoundError:
        print(f"Error: {file_path} not found.")
    except Exception as e:
        print(f"Error flattening data in {file_path}: {e}")

# Example usage:
flatten_data()