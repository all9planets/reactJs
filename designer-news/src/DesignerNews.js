import React from 'react';
import ReactDOM from 'react-dom';
import DesignerNewsNav from './DesignerNewsNav';
import ContentList from './ContentList';
import contents from './data/contents.js'
class DesignerNews extends React.Component{
	constructor(props){
		super(props)
		this.incrementVote = this.incrementVote.bind(this);
		this.checkIfChecked = this.checkIfChecked.bind(this);
		this.checkedList = this.checkedList.bind(this);
		this.allItems = this.allItems.bind(this);
			this.state={
				contentList:contents,
				arrNotChecked:[]		
		}
	}
	incrementVote(id){
		var contentList = this.state.contentList.slice(0).map(content=>Object.assign({},content));
		var content = contentList.find(content=>content.id===id); 
		content.value=content.value+1;
		this.setState({
			contentList
		})

	}
	checkIfChecked(id,refId){		
		var contentList = this.state.contentList.slice(0).map(content=>Object.assign({},content));
		
		var content = contentList.find(content=>content.id===id);
		if(content.status===false)
		content.status=true;
		else content.status=false
		this.setState({
			contentList
		})

	}
	checkedList(){
		var contentList = this.state.contentList.slice(0).map(content=>Object.assign({},content));
		var arrNotChecked = this.state.arrNotChecked.slice(0).map(content=>Object.assign({},content));
		contentList.forEach(item=>{
			if(item.status===false)
				arrNotChecked.push(item.id);
			}
			)
		this.setState({
			arrNotChecked
		})
			
	}
	allItems(){
		var contentList = this.state.contentList.slice(0).map(content=>Object.assign({},content));
		this.setState({
			contentList,
			arrNotChecked:[]
		})

	}
	render(){
		return(
			<div className="container">
				<h1>{this.props.headerText}</h1>
				<div className="header">
					<DesignerNewsNav checkedList={this.checkedList} 
					allItems={this.allItems}/>
				</div>
				<div className="content-list">
					<ContentList
						contentList={this.state.contentList}
						incrementVote={this.incrementVote}
						checkIfChecked={this.checkIfChecked}
						arrNotChecked={this.state.arrNotChecked}
					/>
				</div>
			</div>
		)	
	}
}


export default DesignerNews;