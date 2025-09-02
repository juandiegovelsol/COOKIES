import json

def is_valid_json_format(text):
    if (text.startswith('{') and text.endswith('}')):
        try:
            json.loads(text)
            return True
        except:
            return False
    return False

# Test the function
print(is_valid_json_format('{"name": "jason"}'))