import React, {Component, Fragment} from 'react';

class Song extends Component {
  render() {
    return(
      <Fragment>
      <p>Title: {this.props.title}</p>
      <p>Position: {this.props.position}</p>
      <p>Artist: {this.props.artist}</p>
      <p>Category: {this.props.category}</p>
      <img className="image-cover" src={this.props.image} /> 
      </Fragment>
    )
  }
}

export default Song;
