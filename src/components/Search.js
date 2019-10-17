import React from "react";
import { connect } from "react-redux";

import PlanetList from "./PlanetList";
import { getPlanet } from "../actions/planetAction";

class Search extends React.Component {
  state = { query: "" };

  handleInputChange = event => {
    this.setState({
      query: event.target.value
    });
    this.props.getPlanet(event.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <div className="search-bar ui segment">
          <form className="ui form">
            <div className="field">
              <label>Planet Search</label>
              <input
                placeholder="Search for..."
                value={this.state.query}
                onChange={this.handleInputChange}
              />
            </div>
          </form>
        </div>

        <PlanetList></PlanetList>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {};
};
export default connect(
  mapStateToProps,
  { getPlanet }
)(Search);
