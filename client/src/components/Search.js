import React, { Component } from 'react';
import API from './Utils/API';
import Jumbotron from "./Jumbotron";

class Search extends Component {
  state = {
    query: "",
    articles: [],
    saved: []
  };

  componentDidMount() {
    API.get("Breaking")
      .then(res => {
        console.log(res);
        this.setState({ articles: res });
      })
      .catch(err => console.log(err));
  }

  handleInputCahnge = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    return API.get(this.state.query)
      .then(res => {
        this.setState({ articles: res });
        console.log(this.state.articles);
      })
      .catch(err => console.log(err));
  };

  render() {
    return <div className="container">
        <div className="row">
          <div style={{ height: 300 }} className="jumbotron">
            <h1>New York Times Articles Search</h1>
          </div>
          <form>
            <div className="form-group">
              <h4>Topic</h4>
              <input type="text" placeholder="Search For Articles." className="form-control" value={this.state.query} name="query" onChange={this.handleInputCahnge} />
            </div>
            <div className="form-group">
              <h4>Start Year</h4>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <h4>End Year</h4>
              <input type="text" className="form-control" />
            </div>
            <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>
              Search
            </button>
          </form>
        </div>
        <div className="row">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3>Articles List</h3>
            </div>
            <div className="panel-body">
              {this.state.articles.length ? <div className="list-overflow-container">
                  <ul className="list-group">
                    {this.state.articles.map(article => {
                      return <li className="list-group-item" key={article._id}>
                          <a href={article.web_url}>
                            <h3>{article.headline.main}</h3>
                            <p>{article.snippet}</p>
                          </a>
                          <button className="btn btn-block">Save</button>
                        </li>;
                    })}
                  </ul>
                </div> : <h3>No Results to Display</h3>}
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Search;

