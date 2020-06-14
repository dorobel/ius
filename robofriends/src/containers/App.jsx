import React, { Component } from 'react';
import CardList from '../components/CardList'
// import { robots } from './robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'

class App extends Component {  // containers cant use pure functions (technically they are not pure); App container has childrens 
    constructor() {
        super();
        this.state = {
            robots: [],         // previous robots: robots - componentDidMount
            searchfield: ''
        }
    }

    componentDidMount() {   // life cycle method (hooks)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
            })
            .then(robots => { // userii din json file
                return this.setState({ robots: robots, searchfield: '' }) // searchfield added for  (practic re-setezi state-ul)
            })
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })  /* 2) Sets the state of searchfield */
    }


    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());   /* 3) Checks robots names having characters typed*/
        })

        return (
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />    {/* 1) Check SearchBox.jsx argument. Runs local method for setting the state */}
                <Scroll> {/* Scroll component wraps the ErrorBoundry + CardList component */}
                    <ErrorBoundry> {/* ErrorBoundry component wraps the CardList component */}
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;