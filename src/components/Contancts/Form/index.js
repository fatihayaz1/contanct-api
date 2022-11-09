import {useState, useEffect} from 'react'
// State
const initialFormValues = {fullname:"", phone_number:""}
function Form({addContact, contacts}) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };
    // preventdefault ve if 
    const onSubmit = (e) => {
        e.preventDefault()
    if ( form.fullname === "" || form.phone_number === "" ){
        return false; 
    }

    addContact([...contacts,form]);
        
      }

      // Inputlar ve buton
  return (
    <form onSubmit={onSubmit} >
        <div>
            <input name="fullname" placeholder='Full Name' onChange={onChangeInput} value={form.fullname}/>
        </div>
        <div>
            <input name="phone_number" placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput} />
        </div>
        <div className='btn' >
            <button >Add</button>
        </div>
    </form>
  )
}

export default Form