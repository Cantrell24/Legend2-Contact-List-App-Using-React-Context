import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import ContactCard from "../component/ContactCard.jsx";
import { Link } from "react-router-dom";
import { EditContact } from "../component/EditContact.jsx";


const Home = () => {
	const {store,actions} =useContext(Context)
	const [data, setData] = useState(null);

	const isButtonActive = false;

	useEffect(() => {
		actions.getContacts()
	}, [store.contacts]);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link to="/add-contact"><button type="button" className="btn btn-success" to="/add">
						Add new contact
					</button>
					</Link>
				</p>
				<div
					id="contacts"
					className="panel-collapse collapse show"
					aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{RenderContacts()}

					</ul>
				</div>

				{/* Conditional Rendering Example */}
				<div>
					{RenderButton()}
				</div>

			</div>
		</div>
	);
	
	function RenderContacts() {
			if(store.contacts==undefined){
				return(
					<h1>API is down!</h1>
				)
			}
			else
			{
				return(
					store.contacts.map((contact,index)=>{
						return (
							<ContactCard key={index} contact={contact}/>
						)
					})
				)
			}
	}

	function RenderButton() {
		if (2+2 == 5 ) {
			return (
				<Button></Button>
			)
		}
		else
		{
			return (
				<div>Button not active</div>
			)
		}
	}
};

export default Home;
// Get Cantrell's agenda:
// https://playground.4geeks.com/apis/fake/contact/agenda/Cantrell24

// Get "my super agenda" from the demo
// https://playground.4geeks.com/apis/fake/contact/agenda/my_super_agenda

// Get all available agenda names
// https://playground.4geeks.com/apis/fake/contact/agenda