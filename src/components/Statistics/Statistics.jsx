import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const getRandomCSSColor = () => { 
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
};


export function Statistics({ title, stats }) {
  //console.log('title', title, 'stats', stats);
  return (
      <section className={css.statistics}>
      {title && <h2 class="title">{title}</h2>}

          <ul className={css.statlist}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={css.item} key={id} style={{ backgroundColor: getRandomCSSColor() }}>
              <span class="label">{label}</span>
              <span class="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
