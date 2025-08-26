import re

def extract_information_1(text: str):
    """
    Extracts 'X Days' (with 1-2 digits) even if 'Refill' comes before or after.
    Allows some extra words in between, but only returns the 'X Days' part.
    """
    match = re.search(r'(\d{1,2}\s*Days?)', text, re.IGNORECASE)
    if match:
        return match.group(1)
    return None


def extract_information_2(text: str):
    """
    Stricter: expects 'X Days' followed immediately by 'Refill'.
    Returns the integer only.
    """
    match = re.search(r'(\d{1,2})\s*Days?\s*Refill', text, re.IGNORECASE)
    if match:
        return int(match.group(1))
    return None


test_cases = [
    "156 Days Refills",
    "Refill after Zero Days",
    "200 Days 10 Days Refill",
    "50 Refill (12 Days)"
]

for case in test_cases:
    result1 = extract_information_1(case)
    result2 = extract_information_2(case)
    print(f"Texto: {case}")
    print(f"extract_information_1 -> {result1}")
    print(f"extract_information_2 -> {result2}")
    print("-" * 50)