// 배열 구조 분해

const arr = [1, 2, 3];
const one = arr[0];
const two = arr[1];
const three = arr[2];

console.log(one, two, three);

// 배열 구조 분해 사용
const [deOne, deTwo, deThree] = arr;

console.log(deOne, deTwo, deThree);

// Date
const today = new Date();

console.log(today);

// formatDate
const formatDay = today.toISOString().substring(0, 10);
console.log(formatDay);

// 구조 분해 할당 사용
const [year, month, day] = formatDay.split('-');

console.log(year, month, day);
// const year = formatDay.split('-')[0];

// 객체 구조 분해 할당 전
const obj = { firstName: '정혁', lastName: '김' };
// const firstName = obj.firstName;
// const lastName = obj.lastName;
// console.log(firstName, lastName);

// 구조 분해 할당 후
const { firstName, lastName } = obj;
console.log(firstName, lastName);

const person = {
  name: 'kim',
  address: {
    zipCode: '77220',
    city: 'Seoul',
  },
};

const {
  address: { zipCode, city },
} = person;
console.log(zipCode, city);
