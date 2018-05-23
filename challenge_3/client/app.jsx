class App extends React.Component {
	constructor(props) {
		super(props);
		// this.state= {

		// }
	}

	//TODO: function for next button
	//TODO: function for purchase button

	render() {

		return (
			<div>
				<p>Please fill out your name, email, and password. Then, hit the <b>Next</b> button</p>
				<F1/>
				<F2 />
				<F3 />
			</div>
		)
	}
}


var F1 = () => (
	<div>
	<h1>hi from F1</h1>
	<button>Next</button>
	</div>
);

var F2 =() => (
	<div>
	<h1> hi from F2</h1>
	<button>Next</button>
	</div>
);

var F3 = () => (
	<div>
	<h1> hi from F3 </h1>
	<button>Purchase</button>
	</div>
);

ReactDOM.render(<App />, document.getElementById('app'))


