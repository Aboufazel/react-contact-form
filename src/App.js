import React , {useState}from "react";
import HeaderAndLogo from "./components/HeaderAndLogo/HeaderAndLogo";
import AddBtn from "./components/AddBtn/AddBtn";

import './App.css';
import ContactView from "./components/ContactView/ContactView";

function App() {
    const [state , setState] = useState ([
        {id: Math.floor(Math.random()*1000) , fullName: 'Abbas' , mail: 'a.ab2521@gmail.com'},
        {id: Math.floor(Math.random()*1000) , fullName: 'AliReza' , mail: 't.alireza@gmail.com'},
    ]);


  return (
     <div>
       <HeaderAndLogo/>
       <AddBtn state={state} setState={setState}/>
         {state.map(contacts => <ContactView id={contacts.id} fullName={contacts.fullName} mail={contacts.mail} state={state} setState={setState}/>)}
     </div>
  );
}

export default App;
