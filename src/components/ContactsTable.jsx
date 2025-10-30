import { Link } from "react-router-dom";
import "./ContactsTable.css"

function ContactsTable({ contacts }) {
  return (
    <div className="table-container">
      <h1>Contacts</h1>
      <table className="contacts-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/contact/${user.id}`} className="contact-link">
                  {user.name}
                </Link>
              </td>
              <td>{user.address.city}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsTable;