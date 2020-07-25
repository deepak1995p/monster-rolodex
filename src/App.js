import React, { Component } from 'react'
import './App.css'
import Cardlist from './components/card-list/Card-list';
import SearchBox from './components/SearchBox/SearchBox'




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monster: [],
            searchField: ''

        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ monster: users }))
    }
     HandleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {monster, searchField} = this.state;
        const filteredMonsters = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <h1 id="header">Monster Rolodex</h1>
                <SearchBox
                   placeHolder='search monsters'
                   handleChange = {this.HandleChange}
               />
                
                <Cardlist monster={filteredMonsters} />

            </div>

        );
    }
}

export default App;