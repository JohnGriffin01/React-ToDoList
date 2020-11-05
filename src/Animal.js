import React from 'react';
import './App.css';
import FavoriteList from './FavoriteList'

function App() {
    var listStyle={
      width: "80%",
      margin: "0",
      paddingLeft: "0",
      listStyle: "none"
    }
      return (
        <div>
          <div className="favoriteListMain">
          <div className="header">
            <h1>Todo list</h1>
          </div>
          <div style={listStyle}>
          <Favorite name='Pizza'/>
          <Favorite name='Tacos'/>
          </div>
          </div>
        </div>
      );