import React, { Component } from 'react'


export default class List extends Component {
	render(){

		var title = this.props.title;


		return(
			<ul style={styles.List}>
					
					{this.props.value.map(function(val, i){
					 		return (

					 			<li key={i}>
					 				{title}	: {val}
					 			</li>

					 		);	 
	            	})}

				</ul>
		);
	}
}

const styles = {


	listItem: {
		width: "100%",
		marginTop: "20px",
		display: "flex",
		alignItems: "center",
		alignContent: "center",

	},

	List: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
		padding: "0",
		
		listStyle: "none",
		textDecoration: "none",

	}
}