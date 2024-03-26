import React, {useContext} from "react";
import "../../styles/ContactCard.css"
import { Context } from "../store/appContext";


const ContactCard = ({contact}) => {
    const {store,actions} = useContext(Context)
    return (
        <div className="contact-card"> {/* Add a class for styling */}
            <div className="container d-flex">
                <div className="w-25">
                    <img className="w-100 rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzJjPa-3jdL6XAI0yqXBY8VzK_p5h0yQIkQ&usqp=CAU" alt="Profile"/>
                </div>
                <div className="w-50 ps-5 pt-5">
                    <h6>{contact.full_name}</h6>
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>{contact.address}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-phone-flip"></i>
                        <p>{contact.phone}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-envelope"></i>
                        <p>{contact.email}</p>
                    </div>
                </div>
                <div className="d-flex w-25 pt-5">
                    <link to={`/edit-contact/${contact.id}`}>
                    <button className="btn btn-warning"
                    ><i className="fa-solid fa-pencil me-5"></i></button>
                    </link>
                   <button 
                   className="btn btn-danger"
                   style={{"height":"50px"}}
                   onClick={()=>actions.deleteContact(contact.id)}><i className="fa-solid fa-trash-can"></i></button> 
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
