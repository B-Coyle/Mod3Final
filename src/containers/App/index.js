import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchPresidents } from "../../thunks/fetchPresidents";

export class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    const { hasErrored, isLoading, presidents } = this.props;
    return (
      <main>
        <h1>Presidents and Assholes</h1>
        {hasErrored && <h2>Error loading information about presidents</h2>}
      </main>
    );
  }
}

export const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    hasErrored: state.hasErrored,
    presidents: state.presidents
})

export const mapDispatchToProps = (dispatch) => ({
    fetchPresidents: () => dispatch(fetchPresidents()); 
})

export default connect(mapStateToProps,mapDispatchToProps)(App);