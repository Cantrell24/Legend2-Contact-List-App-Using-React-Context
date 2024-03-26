import React, {useState} from "react";
import { Link } from "react-router-dom";



export const AddContact = () => {
	const [fullName, setfullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const saveContact = async () => {
		try{
			const response = await fetch("https://playground.4geeks.com/apis/fake/contact/",{
				method: "POST",
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


	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
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


