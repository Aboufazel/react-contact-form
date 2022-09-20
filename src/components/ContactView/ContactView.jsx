import React from "react";
import './ContactView.style.css'
import RandomAvatar from "../RandomAvatar/RandomAvatar";

function ContactView ({id , fullName , mail}){
    return(
        <div className={'contactsBox'}>
            <div key={id} className={'contactsBox_items'}>
                <div className={'avataar_box'}>
                    <RandomAvatar name={fullName}/>
                </div>
                <div className={'contact_info'}>
                    <div>ContactName: {fullName}</div>
                    <div>ContactMail: {mail}</div>
                </div>
            </div>
        </div>
    );
}


export default ContactView;