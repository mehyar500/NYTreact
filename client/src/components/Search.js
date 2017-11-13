import React, { Component } from 'react';
import API from './Utils/API';

class Search extends Component {
    state = {
        query: "",
        results: []
    }


    handleInputCahnge = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        return (
          API.get(this.state.query)
             .then(res => {console.log(res); this.setState({results: res})})
             .catch(err => console.log(err))
       );
    }



    listArticles = () => {
      console.log(this.state.results.docs);
      let articles = this.state.results.docs;
      // return (
      //   this.state.results.map (article => (<ul>
      //     <li key={article._id}>{article}</li>
      //   </ul>))
      // );
    }

    render() {
        return <section>
            <div className="row">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h2>Search</h2>
                </div>
                <div className="panel-body">
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
              </div>
            </div>
            <div className="row">
              <div className="panel-primary">
                <div className="panel-heading">
                  <h3 className="text-center">Results</h3>
                </div>
                <div className="panel-body">
                  {this.listArticles()}
                </div>
              </div>
            </div>
          </section>;
    }

}

export default Search;

                  // <ul className="list-group">
                  //   {this.state.results.map(result => {
                  //     return <li className="list-group-item" key={result._id} id={result._id}>
                  //         <a href={result.web_url}>
                  //           {result.headline.main}
                  //         </a>
                  //         <button type="button">Save</button>
                  //       </li>;
                  //   })}
                  // </ul>;