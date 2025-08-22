from datetime import datetime

WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

def first_weekday_of_month(year: int, month: int) -> int:
    d = datetime(year, month, 1)
    return d.weekday()  # Correctly returns 4 for Friday

def days_in_month(year: int, month: int) -> int:
    if month == 12:
        next_month = datetime(year + 1, 1, 1)
    else:
        next_month = datetime(year, month + 1, 1)
    return (next_month - datetime(year, month, 1)).days

def build_month_calendar(year: int, month: int) -> str:
    first_wd = first_weekday_of_month(year, month)
    dim = days_in_month(year, month)
    lines = []
    week = []

    # Append initial empty days
    for _ in range(first_wd):
        week.append(f"{'':>2}")
    lines.append("".join(week))

    for day in range(1, dim + 1):
        week.append(f"{day:>2}")
        if len(week) == 7:
            lines.append("".join(week))
            week = []

    # Ensure the final week is included
    if week:
        for _ in range(7 - len(week)):
            week.append(f"{'':>2}")
        lines.append("".join(week))

    return "\n".join(lines)

if __name__ == "__main__":
    cal = build_month_calendar(2025, 8)
    print(cal)
