import json

def clear_output_json():
    try:
        with open('output.json', 'w') as file:
            file.write('')
        print("output.json cleared successfully.")
    except Exception as e:
        print(f"Error clearing output.json: {e}")

clear_output_json()