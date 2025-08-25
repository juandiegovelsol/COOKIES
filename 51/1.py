def encrypt_word(word: str) -> str:
    replacements = {
        'a': '1',
        'e': '2',
        'i': '3',
        'o': '4',
        'u': '5',
        'A': '1',
        'E': '2',
        'I': '3',
        'O': '4',
        'U': '5'
    }

    encrypted = ''.join(replacements.get(c, c) for c in word)
    return encrypted

print(encrypt_word("sequoia"))
