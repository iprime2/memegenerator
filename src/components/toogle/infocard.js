import React from "react"
import user_logo from './user.png'
import Star from './star'

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    
    
    function toggleFavorite() {
        setContact(prevsetContact => ({
                ...prevsetContact,
                isFavorite : !prevsetContact.isFavorite

            }))
    }
    
    return (
        <main>
            <article className="card">
                <img src={user_logo} className="card--image" />
                <div className="card--info">
                    <Star isFilled={contact.isFavorite} onHandle={toggleFavorite} />
                    <h2 className="card--name">
                        {contact.firstName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
