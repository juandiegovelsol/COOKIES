def is_valid_json_format(text):
    try:
        # Fix: Use json.loads to validate JSON
        json.loads(text)
        return True
    except json.JSONDecodeError:
        # Fix: Use json.JSONDecodeError, not generic Exception
        return False

# Testing the function
print(is_valid_json_format('{"name": "Jason"}'))  # Should print: True
print(is_valid_json_format('{"name": "Jason"}'))  # Should print: False