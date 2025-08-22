def should_dealer_hit(hand, hit_soft_17=False):
    """
    Determines if a dealer should hit in blackjack.

    Args:
        hand (list): The dealer's hand, e.g. ['A', 6] or [10, 7].
        hit_soft_17 (bool): If True, dealer hits on soft 17.

    Returns:
        bool: True if dealer should hit, False if they should stand.
    """
    values = []
    for card in hand:
        if card in ['J', 'Q', 'K']:
            values.append(10)
        elif card == 'A':
            values.append(11)  # Treat ace as 11 initially
        else:
            values.append(int(card))

    total = sum(values)
    aces = values.count(11)

    while total > 21 and aces:
        total -= 10
        aces -= 1

    if total <= 16:
        return True
    
    if total == 17 and aces > 0 and hit_soft_17:
        return True
    
    return False


print(should_dealer_hit(['A','6'], hit_soft_17=True))   # True  (pide)
print(should_dealer_hit(['A','6'], hit_soft_17=False))  # False (se planta)
print(should_dealer_hit([10,6]))                        # True  (16)
print(should_dealer_hit([10,7]))