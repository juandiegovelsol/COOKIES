areaColorCatalog = {
    "green": {"min": 0, "max": 10},
    "blue": {"min": 10, "max": 30},
    "red": {"min": 30, "max": None}
}

print("Wall Color Picker")
height = float(input("Please input height of wall (in meters): "))
length = float(input("Please input length of wall (in meters): "))

wallArea = height * length

for color, limits in areaColorCatalog.items():
    if ((limits["min"] <= wallArea) or (limits["max"] is None or wallArea < limits["max"])):
        wallColor = color
        break

print(f"The wall has an area of {wallArea:.2f} m2 and has to be painted with {wallColor} paint.")
