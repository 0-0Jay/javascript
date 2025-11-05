// Math 객체
let now = new Date(); // 인스턴스
now.getFullYear(); // 인스턴스 메소드
let randomVal = Math.random(); // 정적메소드. static

// 클래스
class Student {
  constructor(sno, sname, score) {
    this.sno = sno;
    this.sname = sname;
    this.score = score;
  }
}

let stu1 = new Student(100, "홍길동", 95);
console.log(stu1.sno, stu1.sname, stu1.score);
