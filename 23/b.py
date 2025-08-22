class Student:
    students = []
    student_ids = []

    def __init__(self, name: str, age: int, student_id: int = None) -> None:
        self.name = name
        self.age = age
        if student_id is not None:
            self.student_id = student_id
        else:
            for i in range(len(self.students) + 2):
                if i not in self.student_ids:
                    self.student_id = i

        self.students.append(name)
        self.student_ids.append(self.student_id)

    def __str__(self):
        return "Name: " + self.name + "\nAge: " + self.age + "\nStudent ID: " + self.student_id


student1 = Student("John", 22, 1)
student2 = Student("Alex", 18, 2)
student3 = Student("Bob", 23, 1464)
student4 = Student("Michael", 20)

print(student1)
print(student2)
print(student3)
print(student4)
print(Student.students)
