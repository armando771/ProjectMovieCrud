import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../CssComponents/MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id,
      title,
      storyline,
      imagePath,
    } = movie;
    return (
      <div data-testid="movie-card" className="movie-container">
        <img src={ imagePath } alt="foto do filme" />
        <h3 id="movie-card-title"> { title } </h3>
        <p id="movie-card-storyline"> { storyline } </p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
