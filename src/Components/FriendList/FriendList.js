import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <div className={s.container}>
      <ul className={s.friend_list}>
        {friends.map(e => {
          return (
            <FriendListItem
              key={e.id}
              avatar={e.avatar}
              name={e.name}
              isOnline={e.isOnline}
            />
          );
        })}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
