import React, { Component } from 'react'
import Input from './Input'
import List from './list'
import Stylesheet from './Stylesheet'
import Bttn from './button.js'
import RangeFinder from './RangeFinder'


export default class DataContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			min: "",
			max: "",
			evens: [],
			maximum: [],
			minimum: [],
			errorMsg: "",
		};
	}

	handleMin(e) {
		e.preventDefault();
		this.setState({
			min: e.target.value,
		});
	}

	handleMax(e) {
		e.preventDefault();
		this.setState({
			max: e.target.value,
		});
	}

	handleClick(e) {
		e.preventDefault();
		RangeFinder.addRange(this.state.min, this.state.max);
		RangeFinder.findEvens(this.state.min, this.state.max);
		this.setState({
			min: "",
			max: "",
			evens: RangeFinder.evens,
			maximum: RangeFinder.max,
			minimum: RangeFinder.min,
		})
	}


	render(){
		return(

			<div style={styles.DataContainer}>

			{/* take MIN and MAX inputs from user*/}
				<div style={Stylesheet.row}>
					<Input name="MIN" onChange={this.handleMin.bind(this)} value={this.state.min}/>
					<Input name="MAX" onChange={this.handleMax.bind(this)} value={this.state.max}/>
				</div>

			{/* Add new data Range */}
				<div style={Stylesheet.row}>
					<Bttn onClick={this.handleClick.bind(this)}/>
				</div>
			
			{/* Range Data */}
				<div style={Stylesheet.row}>
					<List value={this.state.minimum} title="MIN"/>
					<List value={this.state.maximum} title="MAX" />
					<List value={this.state.evens} title="Even Numbers"/>
				</div>

			</div>
		);
	}
}

const styles = {

	DataContainer: {
		maxWidth: "90%",
		backgroundColor: "#ecf0f1",
		boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.75)",
	}
}