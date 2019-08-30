import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

var App=(props)=>{
    console.log("APP");
    return (
      <div className="App">
        {props.data ? (
          <div className="data">
            <p className="App-intro">Products</p>
            {props.data.map((x, index) => (
              <div>
              <p>{x.id}</p>
              <img src={x.urls.full}/>
              </div>
            ))}
          </div>
        ) : (
          <p className="App-intro">No Products</p>
        )}

        {props.fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={props.fetchProducts}>Fetch Product</button>
        )}
        {props.error && <p style={{ color: "red" }}>something went wrong!</p>}

      </div>
    );
}

const mapStateToProps = state => {
    console.log(state);
  return {
    fetching: state.fetching,
    data: state.data,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);