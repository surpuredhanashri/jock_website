import React, { Component } from "react";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: [],
			jokes: {},
		};
	}

	componentDidMount() {
		fetch(`https://api.chucknorris.io/jokes/categories`)
			.then((Response) => Response.json())
			.then((data) => this.setState({ categories: data }));
	}

	handleChange = (e) => {
		const caty = e.target.value;
		const url = `https://api.chucknorris.io/jokes/random?category=` + caty;
		fetch(url)
			.then((Response) => Response.json())
			.then((data) => this.setState({ jokes: data }));
	};

	render() {
		return (
			<div className="main-container">
				<h1 className="headline">RANDOM JOKES</h1>
				<select onChange={this.handleChange}>
					<option>Select by catagory</option>
					{this.state.categories.map((catagory) => (
						<option key={catagory}>{catagory}</option>
					))}
				</select>
				<div>
					<img src={this.state.jokes.icon_url} alt='randamPics'></img>
					<h1 className='main-content'>{this.state.jokes.value}</h1>
				</div>
			</div>
		);
	}
}
