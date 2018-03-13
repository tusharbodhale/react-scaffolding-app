import React from 'react'

export default class Item extends React.Component {
	constructor(props) {
        super(props)
        this.btnClick=this.btnClick.bind(this);
    }

    btnClick(){
        this.props.markFavourite(this.props.id);
    }
    
	render() {
		return (
			<section className="item">
                <img src={this.props.imageName} />
                
                {this.props.title}
                {this.props.year}
                <button className="mark-favourite" onClick={this.btnClick}>
                {this.props.disabled?"Not my Favourite":"Mark as Favourite"}
                </button>
			</section>
		)
	}
}
