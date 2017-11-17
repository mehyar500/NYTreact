import React, { Component } from "react";
import API from "./Utils/API";

class Result extends Component {

  state = {
    articleToSave: []
  }

  handleClick = () => {
    API.postSaveArticle({
      snippet: this.props.snippet,
      headline: this.props.headline,
      pubdate: this.props.pubdate,
      url: this.props.url
    })
    .then(this.setState({articleToSave: {
      snippet: this.props.snippet,
      headline: this.props.headline,
      pubdate: this.props.pubdate,
      url: this.props.url
    }}), console.log(this.state.articleToSave))
    .catch(err => console.log(err));

  };

  render() {
    return <div className="result-div panel panel-default" id={this.props.key}>
        <div className="panel-body">
          <a href={this.props.url} className="black-text">
            <h5>{this.props.headline}</h5>
          </a>
          <p className="black-text">Published {this.props.pubdate}</p>
        </div>
        <div className="panel-footer">
          <button className={this.props.buttontype} buttonname={this.props.buttonname} onClick={this.handleClick}>
            {this.props.buttonname}
          </button>
        </div>
      </div>;
  }
}

export default Result;
