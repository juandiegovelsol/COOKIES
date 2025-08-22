from datetime import datetime

WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

def first_weekday_of_month(year: int, month: int) -> int:
    d = datetime(year, month, 1)
    return d.weekday()  # Updated line


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
    lines.append(f"{year}-{month:02d}")
    lines.append(" ".join(WEEKDAYS))

    day = 1
    week = ["  "] * first_wd
    while day <= dim:
        week.append(f"{day:2d}")
        if len(week) == 7:
            lines.append(" ".join(week))
            week = []
        day += 1
    if week:
        lines.append(" ".join(week))  # Add this line to ensure the last week is printed
    return "\n".join(lines)

if __name__ == "__main__":
    cal = build_month_calendar(2025, 7)
    print(cal)
