import css from './Contact.module.css';
import { ImHome, ImMobile } from "react-icons/im";



const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={css.contact}>
    <p> <ImHome /> {name}</p>
    <p> <ImMobile />{number}</p>
    <button className={css.deleteBtn} onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);

export default Contact;

