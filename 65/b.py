def get_approved_students(students):
    approved = []
    for student in students:
        total = sum(student["grades"])
        average = total / len(student["grades"])
        if average >= 60:
            approved.append(student["name"])
    return approved

data = [
    {"name": "Lucas", "grades": [70, 80, 90]},
    {"name": "María", "grades": [50, 60, 70]},
    {"name": "Juan", "grades": [100, 40]},
    {"name": "Elena", "grades": [60, 60, 60, 60]},
    {"name": "Ana", "grades": [50, 100]},
    {"name": "Pedro", "grades": [80]}
]

result = get_approved_students(data)
print(result)