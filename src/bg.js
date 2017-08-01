import React, { Component } from 'react'
import DataContainer from './dataContainer'

export default class Background extends Component {
	render(){
		return(
			<div style={styles.background}>

				<h1 style={styles.h1} >Even-Number Calculator</h1>
				<p style={styles.p} >Insert a range of numbers and the calculator will tell you how many even numbers are in the set.</p>
				<DataContainer />
			</div>
		);
	}
}

const styles = {

	h1: {
		color: "#fff",
	},

	p: {
		color: "#fff",
		maxWidth: "475px",
		width: "80%",
		textAlign: "center",

	},

	background: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		position: "absolute",
		backgroundColor: "#2980b9",
	}
}