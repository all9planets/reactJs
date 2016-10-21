import React from 'react';
import ContentRow from './ContentRow';
class ContentList extends React.Component{
	constructor(props){
		super(props);
		this.check=this.check.bind(this);
	}
	check(id){
		var length=this.props.arrNotChecked.length;
		while(--length>=0){
			if(this.props.arrNotChecked[length]===id){
				return false
			}

		}
		return true;
	}
	render(){
		var contents = this.props.contentList.sort((a,b)=>b.value-a.value).filter(item=> this.check(item.id))
		var content = contents.map(content=>{
			return(
				<ContentRow
					key={content.id}
					incrementVote={this.props.incrementVote}
					checkIfChecked={this.props.checkIfChecked}
					{...content}
				/>
			)
		})
		return(
				<div className="list-of-contents">
					<ul>
						{content}
					</ul>

				</div>
			);
	}
}
export default ContentList;