import {useState} from 'react'


// State 
function List({contacts}) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLowerCase())
    )
  })
// Search 
  console.log(filtered);
  return (
    <div>
<input placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)}>
</input>
      <ul className='list'>
        {
          filtered.map((contacts, i) =>(
            <li key={i}>
              <span>{contacts.fullname}</span>
              <span>{contacts.phone_number}</span>
            </li>
          ))
        }
      </ul>

      <h3>Total contacts({filtered.length})</h3>
    </div>
  )
}
export default List