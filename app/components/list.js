import React from 'react'
import Item from './item.js'

export default class List extends React.Component {
	constructor(props) {
        super(props)
        //https://thoughtworksreactreduxmovies.firebaseio.com/movies.json
        //https://thoughtworksreactreduxmovies.firebaseio.com/series.json
        this.state={
            data:[],
            favourite:0,
            favouriteList:[]
        }
        this.markFavourite=this.markFavourite.bind(this);
        this.checkFavourite=this.checkFavourite.bind(this);
        this.removeFavourite=this.removeFavourite.bind(this);
    }
    
    componentWillMount(){
        fetch("https://thoughtworksreactreduxmovies.firebaseio.com/movies.json")
        .then(response => response.json())
        .then(data => this.setState({
            data
        }));
    }

    markFavourite(id){
        if(!this.checkFavourite(id)){
            this.state.favouriteList.push(id);
            console.log("add");
        }else{
            console.log("remove");
            this.removeFavourite(id);
        }
        return this.setState({
            favourite:this.state.favouriteList.length,
            favouriteList:this.state.favouriteList
        })
    }

    removeFavourite(id){
        // Find and remove item from an array
        var i = this.state.favouriteList.indexOf(id);
        if(i != -1) {
            this.state.favouriteList.splice(i, 1);
            this.setState({
                favourite:this.state.favourite-1,
                favouriteList:this.state.favouriteList
            })
        }
    }

    checkFavourite(id){
        return this.state.favouriteList.includes(id);
    }

	render() {
        console.log(this.state.favouriteList)
		return (
            
            <div className="list">
            <h2>Movies</h2>
            <span>Favourites:{this.state.favourite}</span>
            {
                this.state.data.map((item,index) => { return(
                    <Item className=""
                        key={index}
                        id={item.imdbID}
                        disabled={this.checkFavourite(item.imdbID)}
                        imageName={item.Poster}
                        title={item.Title}
                        year={item.Year}
                        type={item.Type}
                        markFavourite={this.markFavourite}/>)
                    }
                )
            }
            </div>
		)
	}
};

List.defaultProps={
    data: [{
        "Title": "X-Men: The Last Stand",
        "Year" : "2006",
        "Type" : "movie"
      }, {
        "Title": "The Last Airbender",
        "Year" : "2010",
        "Type" : "movie"
      }, {
        "Title": "Star Wars: The Last Jedi",
        "Year" : "2017",
        "Type" : "movie"
      }, {
        "Title": "The Last King of Scotland",
        "Year" : "2006",
        "Type" : "movie"
      }, {
        "Title": "The Last Stand",
        "Year" : "2013",
        "Type" : "movie"
      }]
};