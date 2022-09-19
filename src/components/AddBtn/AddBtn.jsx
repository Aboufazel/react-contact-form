import './AddBtn.style.css'
import {FaPlus} from "react-icons/fa";
import React , {useState} from "react";
function AddBtn (){

    const [display , setDiplay] = useState(["false"]);

    const manageToggle = ()=>{
        setDiplay(!display);
    };

    return(
        <div className={'flex-container'}>
            <div className={'addBox'} onClick={manageToggle}>
                <FaPlus className={'plusIcon'}/>
            </div>
            <div className={display ?'addTitle' : 'd-none'}>Add-Contact</div>
            <div className={display ? 'd-none' : 'inputRow'}>
                <label htmlFor={'fullName'}>FullName:</label>
                <input type={'text'} id={'fullName'}/>
                <label htmlFor={'mail'}>mail:</label>
                <input type={'email'} id={'mail'}/>
                <label htmlFor={'phone'}>mail:</label>
                <input type={'tel'} id={'phone'}/>
                <button >Save Contact</button>
            </div>
        </div>

    );
}


export default AddBtn;