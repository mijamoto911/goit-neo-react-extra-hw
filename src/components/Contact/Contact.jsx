import css from './Contact.module.css';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ data }) => {
  const { id, name, number } = data;
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactCard}>
      <div className={css.info}>
        <div className={css.iconContainer}>
          <FaUserAlt className={css.icon} />
          <FaPhoneAlt className={css.icon} />
        </div>
        <div className={css.textContainer}>
          <p className={css.name}>{name}</p>
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
