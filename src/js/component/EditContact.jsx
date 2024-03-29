import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


export const EditContact = () => {
	const [fullName, setfullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const saveContact = async () => {
		try{
			const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contact_id}`,{
				method: "PUT",
				headers: {
					"content-type":"application/json"
				},
				body: JSON.stringify({
					"full_name":fullName,
					"email":email,
					"phone":phone,
					"address":address,
					"agenda_slug":"Cantrell24"
				})
			})
		} catch(error) {
			console.log(error)
		}
	};

	// steps
	// 1. gather info: make sure we have the data
	// 2. actually do it: display the contact info

	const getContactInfo = async () => {
		// try{
			const response = await fetch (`https://playground.4geeks.com/apis/fake/contact/${contact_id}`,{
				methond: "GET",
				headers: {"content-type": "application/json"},
			})
			.then(response=>{
				const json=response.json()
				console.log(json)
				return json	
			}) 
			.then(data =>{
				console.log(data);
				setfullName(data.fullName)
			})
			//.then(() => refreshContacts()) 
			.catch((error) => console.error('Editing contact failed:', error));
				
		// } catch (error) {
		// 	console.log(error)
		// }
				}

	// Runs once on component load
	useEffect (()=>{
		getContactInfo()
	},[])

	const queryParameters = new URLSearchParams(window.location.search)
	const contact_id=queryParameters.get("id")

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<h3>{contact_id}</h3>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							onChange={(event)=>{setfullName(event.target.value)}}
							value={fullName}
							type="text"
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={(event)=>{setEmail(event.target.value)}}
							value={email}
							type="email"
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
						onChange={(event)=>{setPhone(event.target.value)}}
						value={phone}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							onChange={(event)=>{setAddress(event.target.value)}}
							value={address}
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<Link to ="/">
						<button
						onClick={saveContact}
							type="button"
							className="btn btn-primary form-control">
							save
						</button>
					</Link>
					<div>
						<Link to="/">
							<button type="button" className="btn btn-success">Back</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
