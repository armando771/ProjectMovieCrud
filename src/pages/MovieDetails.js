import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

import '../CssComponents/MovieDetails.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.List = this.List.bind(this);
    this.Delet = this.Delet.bind(this);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.List();
  }

  async List() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const rende = await movieAPI.getMovie(id);
    this.setState({ loading: false, movie: rende });
  }

  async Delet() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { movie, loading, shouldRedirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (shouldRedirect) return <Redirect to="/" />;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details" id="MovieDetailsContainer">
        <img id="MovieDetailsImg" alt="Movie Cover" src={ `../${imagePath}` } />
        <h1 id="MovieDetailsTitle">{ `${title}` }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p id="MovieDetailsStoryline">{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <br />
          <Link to="/">VOLTAR</Link>
        </div>
        <Link to="/" onClick={ this.Delet }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  genre: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
