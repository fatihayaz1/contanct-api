import {useState, useEffect} from 'react'
import List from "./List";
import Form from "./Form";
import "./style.css"
// State 
function Contacts() {
    const [contacts, setContacts] = useState([{
      fullname: "Fatih Ayaz",
      phone_number:"56934524"
    },
    {
      fullname: "Irmak Ağdemir",
      phone_number:"54563456"
    },
    {
      fullname: "Hasan Efendioğlu",
      phone_number:"531346345"
    }]);
//List ve Form
useEffect(()=> {
    console.log(contacts);
}, [contacts])
  return (
    <div id='container'>
      <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form contacts={contacts} addContact={setContacts}  /> 
            </div>
  )
}

export default Contacts