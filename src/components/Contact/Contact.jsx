const Contact = ({ id, name, number, onDeleteContact }) => (
  <li>
    <p>{name}: {number}</p>
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);

export default Contact;
