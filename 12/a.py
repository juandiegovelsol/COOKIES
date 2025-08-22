def should_dealer_hit(hand, hit_soft_17=False):
    """
    Determines if a dealer should hit in blackjack.

    Args:
        hand (list): The dealer's hand, e.g., ['A', '6'] or ['10', '7'].
        hit_soft_17 (bool): If True, dealer hits on soft 17.

    Returns:
        bool: True if dealer should hit, False if they should stand.
    """
    # Initial card values and Ace counting
    values = []
    aces = 0
    for card in hand:
        if card in ['J', 'Q', 'K']:
            values.append(10)
        elif card == 'A':
            values.append(11)
            aces += 1
        else:
            values.append(int(card))
    
    # Calculate total and adjust for Aces
    total = sum(values)
    while total > 21 and aces:
        total -= 10  # Convert an Ace from 11 to 1
        aces -= 1
    
    # Determine if it's a soft hand (at least one Ace as 11)
    soft = 17 <= total <= 21 and 'A' in values
    
    # Decision logic: dealer hits on 16 or below, soft 17 if hit_soft_17 is True
    if total <= 16 or (soft and hit_soft_17):
        return True
    else:
        return False
    
print(should_dealer_hit(['A','6'], hit_soft_17=True))   # True  (pide)
print(should_dealer_hit(['A','6'], hit_soft_17=False))  # False (se planta)
print(should_dealer_hit([10,6]))                        # True  (16)
print(should_dealer_hit([10,7]))