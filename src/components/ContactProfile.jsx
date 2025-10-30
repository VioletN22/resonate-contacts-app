import { useParams, Link } from "react-router-dom";
import "./ContactProfile.css";

function ContactProfile({ contacts }) {
  const { id } = useParams();
  const contact = contacts.find((user) => user.id == parseInt(id));

  if (!contact) {
    return (
      <div className="profile-container">
        <h2>Contact not found</h2>
        <Link to="/" className="back-link">Back to contacts</Link>
      </div>
    );
  }


  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>{contact.name}</h1>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Website:</strong> {contact.website}</p>
        <p><strong>Company:</strong> {contact.company.name}</p>
        <p><strong>City:</strong> {contact.address.city}</p>
        <p><strong>Street:</strong> {contact.address.street}</p>
        <Link to="/" className="back-link">Back to contacts</Link>
      </div>
    </div>
  );
}

export default ContactProfile;