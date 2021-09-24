import React from "react";
import PropTypes from "prop-types";

import "../CssComponents/EditMovie.css";

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div id="MovieTitleContainer">
        Title
        <label htmlFor="movie_title">
          <br />
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate"
            value={title}
            onChange={(event) => this.updateMovie("title", event.target.value)}
          />
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div id="MovieSubTitleContainer">
        Subtitle
        <label htmlFor="movie_subtitle">
          <br />
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            value={subtitle}
            onChange={(event) =>
              this.updateMovie("subtitle", event.target.value)
            }
          />
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row" id="MovieImageContainer">
        Image
        <label htmlFor="movie_image">
          <br />
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            value={imagePath}
            onChange={(event) =>
              this.updateMovie("imagePath", event.target.value)
            }
          />
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div id="MovieTextAreaContainer">
        Synopsis
        <label htmlFor="movie_storyline">
          <br />
          <textarea
            id="movie_storyline"
            value={storyline}
            onChange={(event) =>
              this.updateMovie("storyline", event.target.value)
            }
          />
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div id="MovieSelectContainer">
        Gênre
        <label htmlFor="movie_genre">
          <br />
          <select
            id="movie_genre"
            value={genre}
            onChange={(event) => this.updateMovie("genre", event.target.value)}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div id="MovieRatingContainer">
        Rating
        <label htmlFor="movie_rating">
          <br />
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={0.1}
            min={0}
            max={5}
            value={rating}
            onChange={(event) => this.updateMovie("rating", event.target.value)}
          />
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button id="buttonSubmit" type="button" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
