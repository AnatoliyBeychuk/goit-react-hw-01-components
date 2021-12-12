import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <div className={s.container}>
        {title && <h2 className={s.title}>Upload stats</h2>}
        <ul className={s.stat_list}>
          {stats.map(e => {
            return (
              <li
                className={`${s.item} ${s[e.label.slice(1, s.label.length)]}`}
                key={e.id}
              >
                <span className={s.label}>{e.label}</span>
                <span className={s.percentage}>{e.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
