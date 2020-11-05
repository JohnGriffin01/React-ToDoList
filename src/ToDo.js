import React from 'react';
// import './App.css';
// import FavoriteList from './FavoriteList'

class ToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: []
        };
    }

    render() {
        return (
            <div className="ToDo">
            <div className="header">
            <h1>My Todo List</h1>
            </div>
          <form onSubmit={this.handleSubmit}>
            <label>
              To do:
              <input type="text" value={this.state.value} onChange={this.handleChange} placeholder = "enter a task" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          </div>
        );
      }
    }

    export default ToDo;