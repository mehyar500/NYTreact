import React, { Component } from "react";
import * as bootstrap from "react-bootstrap";
import * as moment from "moment";
import DateRangePicker from "react-bootstrap-daterangepicker";
import API from "./Utils/API";


class Search extends Component {
  state = {
    query: "",
    startDate: moment().subtract(29, 'days'),
    endDate: moment(),
    articles: [],
    saved: []
  };

  componentDidMount() {
    API.get("Latest", this.state.startDate, this.state.endDate)
      .then(res => {
        console.log(res);
        this.setState({ articles: res });
      })
      .catch(err => console.log(err));
  }

  handleInputCahnge = event => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };    

  handleDateChange = (startDate, endDate) => {
    const { startDate, endDate } = this.state;
      console.log("startDate: ", startDate, ", endDate: ", endDate);
      return this.setState({ startDate: startDate, endDate: endDate });
  };

  handleSubmit = event => {
    event.preventDefault();
    return API.get(this.state.query, this.state.startDate, this.state.endDate)
        .then(res => {
          this.setState({ articles: res });
          console.log(this.state.articles);
        })
        .catch(err => console.log(err))
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
              <DateRangePicker startDate={moment("6/10/1986")} endDate={moment("3/1/2014")}>
                <div>Pick Date Range!</div>
              </DateRangePicker>
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
                      return <li className="list-group-item" key={article._id} date={article.pub_date}>
                          <a href={article.web_url}>
                            <h3>Headline: {article.headline.main}</h3>
                            <h4>Published: {article.pub_date}</h4>
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
