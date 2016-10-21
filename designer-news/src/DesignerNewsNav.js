import React from 'react';

class DesignerNewsNav extends React.Component{
	constructor(props){
		super(props)
		this.checkedItems = this.checkedItems.bind(this);
		this.allItems = this.allItems.bind(this);
	}
	checkedItems(){
		this.props.checkedList();
	}
	allItems(){
		this.props.allItems();
	}
	render(){
		return(
				<div>
					<ul>
						<li className="nav-li"><a onClick={this.allItems}>All</a></li>
						<li className="nav-li"><a  onClick={this.checkedItems}>Checked</a></li>
					</ul>
				</div>
			);
	}
}
export default DesignerNewsNav;