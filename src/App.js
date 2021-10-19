// import $ from 'jquery';
import React, { Component } from 'react';
// window.$ = window.jQuery = require('jquery')

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            first: '',
            last: '',
            interest: '',
            price: '',
            number: '',
            addClass: false
        }
    }
    toggle() {
        this.setState({addClass: !this.state.addClass});
    }
    
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
        // $(".js-expand").on('click',function () {
        //     if ($('#email').val()) {
        //         //validate form
        //     } else {
        //         $(".js-hiddenform").slideDown();
        //     }
        // });
    }
    handleFirstChange = (event) => {
        this.setState({
            first: event.target.value
        })
    }
    handleLastChange = (event) => {
        this.setState({
            last: event.target.value
        })
    }
    handleInterestChange = (event) => {
        this.setState({
            interest: event.target.value
        })
    }
    handlePriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }
    handleNumberChange = (event) => {
        this.setState({
            number: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.email}`)
    }


    render() {
        let boxClass = ["js-hiddenform"];
        if(this.state.addClass) {
            boxClass.push('js-form');
        }
        return (
            <div className="email">
                <h2 className="section-title">Contact Us</h2>
                <div className="form-container">
                    <form id="email-form" onSubmit={this.handleSubmit}>
                        <input type="email" id="email" size="50" value={this.state.email} className="form-field js-expand" onChange={this.handleEmailChange} onClick={this.toggle.bind(this)} placeholder="Enter your email address" />
                        <div className={boxClass.join(' ')}  >
                            <div className="half-width">
                                <label className="label" htmlFor="first">First Name</label>
                                <input type="text" id="first" size="30" value={this.state.first} onChange={this.handleFirstChange} required="" className="form-field" placeholder="First Name" />
                            </div>
                            <div className="half-width">
                                <label className="label" htmlFor="last">Last Name</label>
                                <input type="text" id="last" size="30" value={this.state.last} onChange={this.handleLastChange} required="" className="form-field" placeholder="Last Name" />
                            </div>
                            <div className="clear"></div>
                            <label className="label" htmlFor="interest">Requirements </label>
                            <select id="interest" value={this.state.interest} onChange={this.handleInterestChange} size="1" required="" className="form-field">
                                <option disabled="" value="selected">Select Your Needs</option>
                                <optgroup label="Front End:">
                                    <option value="GMAT">GMAT</option>
                                </optgroup>
                                <optgroup label="Back End:">
                                    <option value="SAT">SAT</option>
                                </optgroup>
                                <optgroup label="Other:">
                                    <option value="UNKNOWN">Don't Know</option>
                                </optgroup>
                            </select>
                            <div className="half-width">
                                <label className="label" htmlFor="price">Price</label>
                                <input type="text" id="price" size="" required="" value={this.state.price} onChange={this.handlePriceChange} className=" form-field" placeholder="Price" />
                            </div>
                            <div className="half-width">
                                <label className="label" htmlFor="number">Contact No.</label>
                                <input type="text" id="number" size="" required="" maxLength="13" value={this.state.number} onChange={this.handleNumberChange} className=" form-field" placeholder="Contact Number" />
                            </div>
                            <div className="clear"></div>
                        </div>
                        <button id="submit" className="submit js-expand" type="submit" value="Send!">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default App