import './AddBtn.style.css'
import {FaPlus} from "react-icons/fa";
import React , {useState} from "react";
function AddBtn ({state, setState}){

    const [display , setDiplay] = useState(["false"]);
    const [form , setForm] = useState({fullName:'' , mail:''})

    const manageToggle = ()=>{
        setDiplay(!display);
    };
const manageSubmit = e =>{
    e.preventDefault();
    setState([...state , {id: Math.floor(Math.random()*1000) , fullName : form.fullName , mail:form.mail}])
    setForm({fullName:'' , mail:''});
}

const manageChange = e =>{
    setForm({...form , [e.target.name]: e.target.value})
}
    return(
        <div className={'flex-container'}>
            <div className={'addBox'} onClick={manageToggle}>
                <FaPlus className={'plusIcon'}/>
            </div>
            <div className={display ?'addTitle' : 'd-none'}>Add-Contact</div>


            <form onSubmit={manageSubmit} className={display ? 'd-none' : 'inputRow'}>
                <label htmlFor={'fullName'}>FullName:</label>
                <input type={'text'} onChange={manageChange} name={'fullName'} value={form.fullName}/>
                <label htmlFor={'mail'}>mail:</label>
                <input type={'email'} onChange={manageChange} name={'mail'} value={form.mail}/>
                <button type={'submit'}>Save Contact</button>
            </form>

        </div>

    );
}


export default AddBtn;