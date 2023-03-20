const arr = [1, 2, 3, 4, 5, 6, 7];

// 전개 연산자
console.log(arr);
console.log(...arr);

const obj = {
  name: '김정혁',
  status: '취함',
};

console.log(obj);
console.log({ ...obj });

const jackData = {
  name: '김정혁',
  age: 26,
};
const jackInfo = {
  nickName: 'chicken head',
  status: '숙취',
};

const jack = {
  ...jackData,
  ...jackInfo,
};

console.log(jack);

const arr1 = [1, 2, 3];
const arr2 = ['4', '5', '6'];

const merge = [...arr1, ...arr2];
console.log(merge);

const str = 'test';
console.log([...str]);

const jack2 = {
  name: '김정혁',
  gender: 'M',
  nickName: 'chicken head',
  email: 'jack1150@naver.com',
};

const { name, ...restInfo } = jack2;
console.log(name, restInfo);

const arr3 = [1, 2, 3, 4, 5, 6, 7];

const [first, ...rest] = arr3;
console.log(first, rest);

function spread(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}
spread(1, 2, 3, 4, 5, 6, 7, 8);
