let person: {
  name: string;
  age: number;
  nickname: 'Domco';
} = {
  name: 'Dominik',
  age: 22,
  nickname: 'Domco'
}

console.log('My name: ', person.name);
console.log('My age: ', person.age);
console.log('My nickname: ', person.nickname);

person = {
  name: 'Jan',
  age: 65,
  nickname: 'Jano55',
  nationality: 'Slovak'
}

console.log('My name: ', person.name);
console.log('My age: ', person.age);
console.log('My nickname: ', person.nickname);
console.log('My nationality: ', person.nationality);
