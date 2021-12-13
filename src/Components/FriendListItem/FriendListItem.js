import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={s.item} key={id}>
      <span className={`${s.status} ${isOnline && s.online}`}></span>
      <img
        className={s.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
