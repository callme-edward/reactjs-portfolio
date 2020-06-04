import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfile';
import './index.css';
import profile from './assets/profile.png'

class App extends Component{

    state = {
        displayBio : false
    }

    toggleDisplayBio = () =>{
        this.setState({
            displayBio : !this.state.displayBio
        })
    }

    render() {
        return (
            <div>
                <img src = {profile} alt='profile' className='profile'/>
                <h1>Hello!!</h1>
                <p>My name is Rahul. I'm a software developer</p>
                <p>Always try to have fun by developing new projects</p>
                {this.state.displayBio ? (
                    <div>
                        <p>Currently I am living in Bangalore, and i code everyday</p>
                        <p>Javascript is my favourite language</p>
                        <p>besides coding , I also love music and novels</p>
                        <button onClick ={this.toggleDisplayBio}>Show less</button>
                    </div>
                ) : (
                    <div>
                        <button onClick = {this.toggleDisplayBio}>Read More</button>
                    </div>
                )}
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;















// constructor() {
//     super();
//     this.state = {
//         displayBio : false
//     };
//     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
// }