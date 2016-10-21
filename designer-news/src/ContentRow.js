import React from 'react';

class ContentRow extends React.Component{
	constructor(props){
		super(props);
		this.incrementValue = this.incrementValue.bind(this);
		this.checked = this.checked.bind(this);
	}
	incrementValue(){
		this.props.incrementVote(this.props.id)
	}
	checked(){
		this.props.checkIfChecked(this.props.id,this.refs.check)
	}
	render(){
		return(		
			
				<li className="content-list">
					<button className="increment-btn"onClick={this.incrementValue}>^<span>{this.props.value}</span></button>

					<div>{this.props.content}</div>
					<input type="checkbox" ref="check" onChange={this.checked}/>
				</li>			
				
			);
	}
}
export default ContentRow;