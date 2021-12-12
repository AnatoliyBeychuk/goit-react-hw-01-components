import './App.css';
import Profile from './Profile/Profile';
import user from './data/user.json';

function App() {
  return (
    <div className="App">
      <h2>Задание 1 - Профиль социальной сети</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
