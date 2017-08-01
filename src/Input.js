import React, { Component } from 'react'


export default class Input extends Component {

	render(){
		return(
			<div style={styles.title}>
				<div>{this.props.name}</div>
				<input style={styles.Input} onChange={this.props.onChange} value={this.props.value} />
			</div>
		);
	}
}

const styles = {

	title: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},


	Input: {
		margin: "1rem",
		fontSize: "1.75rem",
		width: "55%",
		textAlign: "left",

		paddingTop: ".7rem",
		paddingLeft: ".25rem",
		paddingBottom: ".25rem",

		borderRight: "1px solid rgba(0,0,0,0.45)",
		borderBottom: "1px solid rgba(0,0,0,0.45)",
		borderLeft: "none",
		borderRadius: "10px",

		boxShadow: "inset 2px 2px 3px 0px rgba(0,0,0,0.75)",
		outline: "none",
		borderTop: "none",
		backgroundColor: "#ecf0f1",

	}
}