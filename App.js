import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">

     
      <div className="jumbotron">
        <h1 className="text-center">
          <strong>
            <i className="fa fa-newspaper-o"></i> New York Times Search</strong>
        </h1>
      </div>
  
     
      <div className="row">
        <div className="col-sm-12">
          <br/>
         
          <div className="card">
            <div className="card-header">
              <strong>
                <i className="fa fa-list-alt"></i> Search Parameters</strong>
            </div>
            <div className="card-body">
  
              
              <form role="form">
  
               
                <div className="form-group">
                  <label for="search">Search Term:</label>
                  <input type="text" className="form-control" id="search-term"/>
                </div>
  
               
                <div className="form-group">
                  <label for="pwd">Number of Records to Retrieve:</label>
                  <select id="article-count" className="custom-select" aria-labelledby="dropdownMenuButton">
                    <option selected value="1">1</option>
                    
                    <option value="5" selected>5</option>
                    <option value="10">10</option>
                  </select>
                </div>
  
               
                <div className="form-group">
                  <label for="start-year">Start Year (Optional):</label>
                  <input type="text" className="form-control" id="start-year"/>
                </div>
  
               
                <div className="form-group">
                  <label for="end-year">End Year (Optional):</label>
                  <input type="text" className="form-control" id="end-year"/>
                </div>
  
               
                <button type="submit" className="btn btn-default" id="run-search">
                  <i className="fa fa-search"></i> Search</button>
                <button className="btn btn-default" id="clear-all">
                  <i className="fa fa-trash"></i> Clear Results</button>
  
              </form>
            </div>
          </div>
        </div>
      </div>
  
      
      <div className="row">
        <div className="col-sm-12">
          <br/>
  
          
          <div className="card">
  
            
            <div className="card-header">
              <strong>
                <i className="fa fa-table"></i> Top Articles</strong>
            </div>
  
            
            <div className="card-body" id="article-section">
            </div>
          </div>
        </div>
      </div>
  
      
      <div className="row">
        <div className="col-sm-12">
  
         
          <hr/>
          <h5 className="text-center">
            <small>Made with lots and lots of
              <i className="fa fa-heart"></i>
            </small>
          </h5>
  
        </div>
      </div>
  
    </div>
    );
  }
}

export default App;
