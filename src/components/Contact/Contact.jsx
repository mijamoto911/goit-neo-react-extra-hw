import css from './Contact.module.css';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ contact, onDelete }) => {
  const { name, number } = contact;

  return (
    <div className={css.contactCard}>
      <div className={css.info}>
        <FaUserAlt className={css.icon} />
        <FaPhoneAlt className={css.icon} />
        <div className={css.textContainer}>
          <p className={css.name}>{name}</p>
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
