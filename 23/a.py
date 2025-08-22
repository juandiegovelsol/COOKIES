class Student:
    students = []
    
    def __init__(self, name: str, age: int, student_id: int = None):
        self.name = name
        self.age = age
        
        if student_id is None:
            self.student_id = max(s.student_id for s in self.students) + 1 if self.students else 1
        else:
            self.student_id = student_id

        Student.students.append(self)

    def __str__(self):
        return f"Name: {self.name}\nAge: {self.age}\nStudent ID: {self.student_id}"


student1 = Student("John", 22, 1)
student2 = Student("Alex", 18, 2)
student3 = Student("Bob", 23, 1464)
student4 = Student("Michael", 20)

print(student1)
print(student2)
print(student3)
print(student4)
print(Student.students)
