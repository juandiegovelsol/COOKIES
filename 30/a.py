from datetime import date, timedelta

WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

def first_weekday_of_month(year, month):
    d = date(year, month, 1)
    return d.weekday()

def days_in_month(year, month):
    if month == 12:
        next_month = date(year + 1, 1, 1)
    else:
        next_month = date(year, month + 1, 1)
    return (next_month - timedelta(days=1)).day

def build_month_calendar(year, month):
    first_wd = first_weekday_of_month(year, month)
    dim = days_in_month(year, month)
    
    lines = [[]]
    
    day = 1
    week = ["  "] * first_wd
    while day <= dim:
        week.append(f"{day:2d}")
        day += 1
        
        if len(week) == 7:
            lines.append(week)
            week = []
    
    if week:
        lines.extend([[" "] * (7 - len(week))] * (7 - len(lines)))
    
    return "\n".join(" ".join(week) for week in lines)

def main():
    name = "calendar"
    year = 2025
    month = 8
    cal = build_month_calendar(year, month)
    print(f"{name} {year} {month:02d}")
    print(cal)

if __name__ == "__main__":
    main()