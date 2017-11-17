import React, { Component } from "react";
import Result from "./Result";
import API from "./Utils/API";


class Search extends Component {
  state = {
    query: "",
    startDate: "",
    endDate: "",
    articles: [],
    saved: []
  };

  componentDidMount() {
    API.getNytArticles("Latest")
       .then(res => {console.log(res); this.setState({ articles: res });})
       .catch(err => console.log(err));

    API.getSavedArticles()
       .then(res => {console.log(res.data); this.setState({saved: res.data});})
       .catch(err => console.log(err));
  }

  handleChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    return API.getNytArticles(
      this.state.query,
      this.state.startDate,
      this.state.endDate
    )
      .then(res => {this.setState({ articles: res }); console.log(this.state.articles);})
      .catch(err => console.log(err));
  };

  render() {
    return <div className="row">
        <div className="row">
          <div style={{ height: 300 }} className="jumbotron">
            <h1>New York Times Articles Search</h1>
          </div>
          <form>
            <div className="form-group">
              <h4>Topic</h4>
              <input type="text" placeholder="Search For Articles." className="form-control" value={this.state.query} name="query" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <h4>Start Year: {this.state.startYear}</h4>
              <input type="date" value={this.state.startYear} className="form-control" id="startYear" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <h4>Start Year: {this.state.startYear}</h4>
              <input type="date" value={this.state.startYear} className="form-control" id="startYear" onChange={this.handleChange} />
            </div>
            <button className="btn btn-block" type="button" onClick={this.handleSubmit}>
              Search
            </button>
          </form>
          <hr />
        </div>
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Articles List</h3>
            </div>
            <div className="panel-body">
              {this.state.articles.length ? <div className="list-overflow-container">
                  <ul className="list-group">
                    {this.state.articles.map((article, index) => {
                      return <li className="list-group-item" key={index} headline={article.headline.main} url={article.web_url} pubdate={article.pub_date} snippet={article.snippet}>
                          <Result buttontype="btn btn-block btn-success" buttonname="Save" url={article.web_url} headline={article.headline.main} snippet={article.snippet} pubdate={article.pub_date} />
                        </li>;
                    })}
                  </ul>
                </div> : <h3>No Results to Display</h3>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Saved Articles List</h3>
            </div>
            <div className="panel-body">
              {this.state.saved.length ? <div className="list-overflow-container">
                  <ul className="list-group">
                    {this.state.saved.map((saved, index) => {
                      return <li className="list-group-item" key={index} headline={saved.headline.main} url={saved.web_url} pubdate={saved.pub_date} snippet={saved.snippet}>
                          <Result buttontype="btn btn-block btn-danger" buttonname="Delete" url={saved.web_url} headline={saved.headline.main} snippet={saved.snippet} pubdate={saved.pub_date} />
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
