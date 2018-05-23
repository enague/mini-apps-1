class App extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			showF1: false,
			showF2: false,
			showF3: false,
			confirmation: false,
			checkout: true,
			name: null,
			email: null,
			password: null,
			line1: null,
			line2: null,
			city: null,
			state: null,
			zip: null,
			phone: null,
			cc: null,
			expiry: null,
			cvv: null,
			billingZip: null
		}
	}
	
		showF1() {
			this.setState({
				showF1: true,
				checkout: false
			})
		}	

		showF2() {
			var name =document.getElementById('name').value
			var email =document.getElementById('email').value
			var password =document.getElementById('password').value
			this.setState({
				showF2: true,
				name: name,
				email: email,
				password: password,
				showF1: false
			})
		}	

		showF3() {
			var line1 =document.getElementById('line1').value
			var line2 =document.getElementById('line2').value
			var city =document.getElementById('city').value
			var state =document.getElementById('state').value
			var zip =document.getElementById('zip').value
			var phone =document.getElementById('phone').value
			this.setState({
				showF3: true,
				line1: line1,
				line2: line2,
				city: city,
				state: state,
				zip: zip,
				phone: phone,
				showF2:false
			})
		}	

		confirmation() {
			var cc =document.getElementById('cc').value
			var expiry =document.getElementById('expiry').value
			var cvv =document.getElementById('cvv').value
			var billingZip =document.getElementById('billingZip').value
			this.setState({
				confirmation: true,
				cc: cc,
				expiry: expiry,
				cvv: cvv,
				billingZip: billingZip,
				showF3: false
			})
		}	



	render() {

		return (
			<div>
				{this.state.showF1 ? <F1 showF2={this.showF2.bind(this)} /> : null}
				{this.state.showF2 ? <F2 showF3={this.showF3.bind(this)} /> : null}
				{this.state.showF3 ? <F3 showConfirmation={this.confirmation.bind(this)}/> : null}
				{this.state.confirmation ? <Confirmation details={this.state}/> : null}
				{this.state.checkout ? <button onClick={() => {this.showF1()}} >Checkout</button> : null} 
			</div>
		)
	}
}


var F1 = (props) => (
	<div>
		<p>Please fill out your name, email, and password. Then, hit the <b>Next</b> button</p>
		<form>
			Name:<br></br>
			<input type="text" id="name"></input><br></br>
			Email:<br></br>
			<input type="text" id="email"></input><br></br>
			Password:<br></br>
			<input type="text" id="password"></input><br></br>
		</form>
		<button onClick={() => {props.showF2()}}>Next</button>
	</div>
);

var F2 =(props) => (
	<div>
		<p>Please fill out your address and phone number. Then, hit the <b>Next</b> button</p>
		<form>
			Line 1:<br></br>
			<input type="text" id="line1"></input><br></br>
			Line 2:<br></br>
			<input type="text" id="line2"></input><br></br>
			City:<br></br>
			<input type="text" id="city"></input><br></br>
			State:<br></br>
			<input type="text" id="state"></input><br></br>
			Zip Code:<br></br>
			<input type="text" id="zip"></input><br></br>
			Phone Number:<br></br>
			<input type="text" id="phone"></input><br></br>
		</form>
		<button onClick={() => {props.showF3()}}>Next</button>
	</div>
);

var F3 = (props) => (
	<div>
	<p>Please fill out your credit card #, expiry date, CVV, and billing zip code. Then, hit the <b>Next</b> button</p>
	<form>
		Credit Card #:<br></br>
		<input type="text" id="cc"></input><br></br>
		Expiry Date:<br></br>
		<input type="text" id="expiry"></input><br></br>
		CVV:<br></br>
		<input type="text" id="cvv"></input><br></br>
		Billing Zip Code:<br></br>
		<input type="text" id="billingZip"></input><br></br>
	</form>
	<button onClick={() => {props.showConfirmation()}}>Next</button>
	</div>
);

var Confirmation =(props) => (
	<div>
	<p> Please review all the data collected! When you are done, click the <b> Purchase </b> button.</p>
		<form>
			Name:<br></br>
			{props.details.name}<br></br>
			Email:<br></br>
			{props.details.email}<br></br>
			Password:<br></br>
			{props.details.password}<br></br>
			Address:<br></br>
			{props.details.line1}<br></br>
			{props.details.line2}<br></br>
			City:<br></br>
			{props.details.city}<br></br>
			State:<br></br>
			{props.details.state}<br></br>
			Zip Code:<br></br>
			{props.details.zip}<br></br>
			Phone:<br></br>
			{props.details.phone}<br></br>
			CC:<br></br>
			{props.details.cc}<br></br>
			Expiry Date:<br></br>
			{props.details.expiry}<br></br>
			CVV:<br></br>
			{props.details.cvv}<br></br>
			Billing Zip Code:<br></br>
			{props.details.billingZip}<br></br>
		</form>
	<button onClick={() => {window.location.reload()}}>Purchase</button>
	</div>
)

ReactDOM.render(<App />, document.getElementById('app'))


