import React from "react";
import './ContactView.style.css'
import RandomAvatar from "../RandomAvatar/RandomAvatar";


import {FaEraser} from "react-icons/fa";
import {FaEdit} from "react-icons/fa";

function ContactView ({id , fullName , mail , state ,setState}){

   const manageDelete = id =>{
       alert('Are you sure to delete the contact?')
       setState(state.filter(item => item.id !== id))
   }
    return(
        <div className={'contactsBox'}>
            <div key={id} className={'contactsBox_items'}>
                <div className={'avataar_box'}>
                    <RandomAvatar name={fullName}/>
                </div>
                <div className={'contact_info'}>
                    <div>ContactName: {fullName}</div>
                    <div>ContactMail: {mail}</div>
                    <div className={'Btn_Box'}>
                        <button onClick={() => manageDelete(id)} className={'DeleteBtn'}>
                            <FaEraser/>Delete
                        </button>
                        <button className={'EditBtn'}>
                            <FaEdit/>Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ContactView;