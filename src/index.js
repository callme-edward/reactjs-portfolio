import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));






























// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     speak(){
//         console.log('I am',this.name,' and my age is',this.age);
//     }
// }

// const animal1 = new Animal('simba',8);
// animal1.speak();

// console.log(animal1);

// class Lion extends Animal{
//     constructor(name,age,furColor, speed){
//       super(name,age);
//       this.furColor = furColor;
//       this.speed = speed;
//     }
//     roar(){
//         console.log(
//             'Roar! I have',this.furColor, 'fur, and i can run ',this.speed,'miles per hour'
//         );
//     }
// }

// const lion1 = new Lion('Mufasa',12,'red',80);
// lion1.speak();
// lion1.roar();