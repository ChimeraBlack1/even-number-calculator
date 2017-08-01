import React, { Component } from 'react'


export default class ListItems extends Component {
  render(){

    return(
        <ul>
            {this.props.evens.map(function(even, i){
              return <li key={i}>{even}</li>;
            })}
        </ul>
    );
  }
}

const styles = {
  listItem: {
    marginTop: "20px",
  },

  List: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "space-around",
    
    listStyle: "none",
    textDecoration: "none",

  }
}