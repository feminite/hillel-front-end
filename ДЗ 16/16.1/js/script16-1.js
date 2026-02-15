class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(undefined);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  _markAttendance(status) {
    const index = this.attendance.findIndex(item => item === undefined);
    if (index !== -1) {
      this.attendance[index] = status;
    } else {
      console.warn("макс. 25 занять");
    }
  }

  present() {
    this._markAttendance(true);
  }

  absent() {
    this._markAttendance(false);
  }

  summary() {
    const avgGrade = this.getAverageGrade();
    
    const actualLessons = this.attendance.filter(item => item !== undefined).length;
    if (actualLessons === 0) return "Даних про відвідуваність немає";

    const presentCount = this.attendance.filter(item => item === true).length;
    const attendanceRatio = presentCount / actualLessons;

    if (avgGrade > 90 && attendanceRatio > 0.9) {
      return "Молодець!";
    } else if (avgGrade > 90 || attendanceRatio > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}


const bestStudent = new Student("Олексій", "Петренко", 2005);
bestStudent.grades = [95, 100, 92, 98];
for (let i = 0; i < 20; i++) bestStudent.present();

const lazyStudent = new Student("Іван", "Іванов", 2004);
lazyStudent.grades = [70, 85, 60];
for (let i = 0; i < 10; i++) lazyStudent.absent();

const middleStudent = new Student("Марія", "Коваль", 2006);
middleStudent.grades = [95, 98, 92];
middleStudent.present();
middleStudent.absent();


console.log(`${bestStudent.firstName}: Вік ${bestStudent.getAge()}, Сер. бал ${bestStudent.getAverageGrade()}. Результат: ${bestStudent.summary()}`);
console.log(`${lazyStudent.firstName}: Вік ${lazyStudent.getAge()}, Сер. бал ${lazyStudent.getAverageGrade()}. Результат: ${lazyStudent.summary()}`);
console.log(`${middleStudent.firstName}: Вік ${middleStudent.getAge()}, Сер. бал ${middleStudent.getAverageGrade()}. Результат: ${middleStudent.summary()}`);