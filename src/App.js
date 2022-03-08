// src/App.js
import "./App.css";
import allContacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));

  const handleContacts = () => {
    const randomContactPos = Math.floor(Math.random() * allContacts.length )
    const randomContact= allContacts[randomContactPos]
    setContacts( [ randomContact, ...contacts ] )
  }

  const handleSortByName = () => {

    // clonar el array
    const contactsCopy = [...contacts]

    
    contactsCopy.sort((elem1, elem2) => elem1.name.localeCompare(elem2.name))

    // actualizar el estado contacts
    setContacts(contactsCopy)

  }

  const handleSortByPopularity = () => {

    // clonar el array
    const contactsCopy = [...contacts]

    
    contactsCopy.sort((elem1, elem2) => elem1.popularity < elem2.popularity? 1 : -1)

    // actualizar el estado contacts
    setContacts(contactsCopy)

  }

  const handleDeleteContact = (positionContact) => {

    
    const contactsCopy = [...contacts]
    contactsCopy.splice(positionContact, 1)
    setContacts(contactsCopy)

  }

  return (
    
    <div className="App">
    <h1>Iron Contacts</h1>

    <button onClick={handleContacts}>Add Random Contact</button>
    <button onClick={handleSortByPopularity}>Sort by popularity</button>
    <button onClick={handleSortByName}>Sort by name</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((eachContact, index) => {
            return (
              <tr key={eachContact.id}>
                <td>
                  <img
                    src={eachContact.pictureUrl}
                    alt="contact-picture"
                    width={50}
                  />
                </td>
                <td>
                  <h3>{eachContact.name}</h3>
                </td>
                <td>
                  <p>{eachContact.popularity.toFixed(2)}</p>
                  
                </td>
                <td>{eachContact.wonOscar === true ? "🏆": ""}</td>
                <td>{eachContact.wonEmmy === true ? "🌟": ""}</td>
                <td><button onClick={ () => handleDeleteContact(index) }>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
