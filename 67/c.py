import json

def is_valid_json_format(text):
    try:
        json.loads(text)
        return True
    except:
        return False

print(is_valid_json_format('{ "name": "jason" }'))
