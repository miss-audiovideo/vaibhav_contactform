import React, { useState} from "react";
import "../app.css";
import { db } from "../firebase";

const Contact= () => {
  const [email, setEmail] = useState("");
  const [first, setNameFirst] = useState("");
  const [last, setNameLast] = useState("");
  const [interest, setInterest] = useState("");
  const [price, setPrice] = useState("");
  const [number, setNumber] = useState("");
  const [addClass, setState] = useState("") 
   // const [loader, setLoader] = useState(false);

  const toggle = (e) => {
    setState({addClass: !addClass})
  }
  let boxClass = ["js-hiddenform"];
    if(addClass) {
      boxClass.push('js-form');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoader(true);

    db.collection("contacts")
      .add({
        email: email,
        first: first,
        last: last,
        interest: interest,
        price: price,
        number: number,
      })
      .then(() => {
        // setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        // setLoader(false);
      });
      

      setEmail("");
      setNameFirst("");
      setNameLast("");
      setInterest("");
      setPrice("");
      setNumber("");    
  }
  return (
              <div className="email">
                <h2 className="section-title">Contact Us</h2>
                <div className="form-container">
                    <form id="email-form" onSubmit={handleSubmit}>
                        <input type="email" id="email" size="50" value={email} className="form-field js-expand" onChange={(e) => setEmail(e.target.value)} onClick={toggle.bind(this)} placeholder="Enter your email address" />
                        <div className={boxClass.join(' ')}>
                            <div className="half-width">
                                <label className="label" htmlFor="first">First Name</label>
                                <input type="text" id="first" size="30" value={first} onChange={(e) => setNameFirst(e.target.value)} required="" className="form-field" placeholder="First Name" />
                            </div>
                            <div className="half-width">
                                <label className="label" htmlFor="last">Last Name</label>
                                <input type="text" id="last" size="30" value={last} onChange={(e) => setNameLast(e.target.value)} required="" className="form-field" placeholder="Last Name" />
                            </div>
                            <div className="clear"></div>
                            <label className="label" htmlFor="interest">Requirements </label>
                            <select id="interest" value={interest} onChange={(e) => setInterest(e.target.value)} size="1" required="" className="form-field">
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
                                <input type="text" id="price" size="" required="" value={price} onChange={(e) => setPrice(e.target.value)} className=" form-field" placeholder="Price" />
                            </div>
                            <div className="half-width">
                                <label className="label" htmlFor="number">Contact No.</label>
                                <input type="text" id="number" size="" required="" maxLength="13" value={number} onChange={(e) => setNumber(e.target.value)} className=" form-field" placeholder="Contact Number" />
                            </div>
                          <div className="clear"></div>
                      </div>
                        <button id="submit" className="submit js-expand" type="submit" value="Send!">Submit</button>
                    </form>
                </div>
            </div>
  );
};

export default Contact;
