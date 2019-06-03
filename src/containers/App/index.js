import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchPresidents } from "../../thunks/fetchPresidents";
import { CardContainer } from "../../components/CardContainer/index";

export class App extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    this.props.fetchPresidents();
  };

  render() {
    const { hasErrored, isLoading, presidents } = this.props;
    return (
      <main>
        <h1 className="app-title">Presidents</h1>
        {hasErrored && <h2>Error loading information about presidents</h2>}
        {isLoading && <h2>Please wait- information loading ...</h2>}
        <div className="filter">
          <select name="affiliation">
            <option value="Republican">Republican</option>
            <option value="Democrat">Democrat</option>
            <option value="Not Applicable">N/A</option>
            <option value="Federalist">Federalist</option>
            <option value="Whig">Whig</option>
          </select>
        </div>
        <CardContainer presidents={presidents} />
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
  presidents: state.presidents
});

export const mapDispatchToProps = dispatch => ({
  fetchPresidents: () => dispatch(fetchPresidents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
