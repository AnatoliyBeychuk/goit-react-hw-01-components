import './App.css';
import Profile from './Components/Profile/Profile';
import user from './data/user.json';
import Statistics from './Components/Statistics/Statistics';
import data from './data/data.json';

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
      <h2>Задание 2 - Секция статистики</h2>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
}

export default App;
