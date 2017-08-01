import React, { Component } from 'react'


export default class Bttn extends Component {
	render(){
		return(
			<button onClick={this.props.onClick} style={styles.button}>ADD</button>
		);
	}
}

const styles = {
	button: {
		
		paddingTop: "1em",
		paddingRight: "4em",
		paddingBottom: "1em",
		paddingLeft: "4em",

		borderRadius: "10px",
		border: "0",
		color: "rgba(255,255,255,0.80)",
		backgroundColor: "#27ae60",
		cursor: "pointer",
		boxShadow: "0px 1px 5px 0px #000"

	}

}