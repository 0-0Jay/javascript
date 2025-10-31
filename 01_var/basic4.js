let myInfo = {
  name: '홍길동',
  age: 20,
  phone: '010-1111-1234',
  address: '중구',
  height: 180
};

console.log(myInfo);
console.log(myInfo['age']);
console.log(myInfo['address']);
myInfo['age'] = 27;
console.log(myInfo);

let student1 = {
  sno : 100,
  sname : '홍길동',
  score : 85
}

let students = [student1]
students[1] = {
  sno : 200,
  sname : '김민석',
  score : 92
}

let result = students[0]['score'] + students[1]['score']
console.log(result);