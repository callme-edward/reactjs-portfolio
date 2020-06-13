import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import Header from './components/Header';
import MusicMaster from './projects/music-master';
import './index.css';


ReactDOM.render(   
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact={true} path='/' render={() => <Header><App /></Header>}/>
            <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
            <Route path='/music-master' render={() => <Header><MusicMaster /></Header>} />
        </Switch>
    </Router>,
    document.getElementById('root')
);




























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


// new Promise((resolve, reject) =>{
//     // return reject(new Error('No Bears'))
//     setTimeout(() =>{
//         // console.log('Bears');
//         resolve(' Bears,, Beats, Battlestar Galacticia');
//     }, 2000);
// })
// .then((quote) =>{
//     console.log(quote);
// })
// .catch(error =>{
//     console.log(error);
// })