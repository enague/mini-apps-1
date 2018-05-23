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
				<F1 />
				<F2 />
				<F3 />
			</div>
		)
	}
}


var F1 = () => (
	<div>
		<p>Please fill out your name, email, and password. Then, hit the <b>Next</b> button</p>
		<form>
			Name:<br></br>
			<input type="text" name="name"></input><br></br>
			Email:<br></br>
			<input type="text" name="email"></input><br></br>
			Password:<br></br>
			<input type="text" name="password"></input><br></br>
		</form>
		<button>Next</button>
	</div>
);

var F2 =() => (
	<div>
		<p>Please fill out your address and phone number. Then, hit the <b>Next</b> button</p>
		<form>
			Line 1:<br></br>
			<input type="text" name="line1"></input><br></br>
			Line 2:<br></br>
			<input type="text" name="line2"></input><br></br>
			City:<br></br>
			<input type="text" name="city"></input><br></br>
			State:<br></br>
			<input type="text" name="state"></input><br></br>
			Zip Code:<br></br>
			<input type="text" name="zip"></input><br></br>
			Phone Number:<br></br>
			<input type="text" name="phone"></input><br></br>
		</form>
		<button>Next</button>
	</div>
);

var F3 = () => (
	<div>
	<p>Please fill out your credit card #, expiry date, CVV, and billing zip code. Then, hit the <b>Purchase</b> button</p>
	<form>
		Credit Card #:<br></br>
		<input type="text" name="cc#"></input><br></br>
		Expiry Date:<br></br>
		<input type="text" name="expiry"></input><br></br>
		CVV:<br></br>
		<input type="text" name="cvv"></input><br></br>
		Billing Zip Code:<br></br>
		<input type="text" name="billingZip"></input><br></br>
	</form>
	<button>Purchase</button>
	</div>
);

ReactDOM.render(<App />, document.getElementById('app'))


