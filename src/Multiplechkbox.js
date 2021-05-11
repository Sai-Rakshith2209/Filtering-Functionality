import React from "react";

class Multiplechkbox extends React.Component {
  state = {
    Collegenames: {
      College_1: false,
      College_2: false,
      College_3: false,
      College_4: false,
      College_5: false,
      College_6: false,
      College_7: false,
    },
  };
  collegecheckboxclick = (e) => {
    var { name, checked } = e.target;
    this.setState((e) => {
      var Selectedcollege = e.Collegenames;
      return (Selectedcollege[name] = checked);
    });
  };

  render() {
    var displaycollege = Object.keys(this.state.Collegenames).filter(
      (x) => this.state.Collegenames[x]
    );
    return (
      <div>
        <center>
          <br />
          <input
            type="checkbox"
            name="College_1"
            onChange={this.collegecheckboxclick}
          />
          College_1&nbsp;&nbsp;
          <input
            type="checkbox"
            name="College_2"
            onChange={this.collegecheckboxclick}
          />
          College_2&nbsp;&nbsp;
          <input
            type="checkbox"
            name="College_3"
            onChange={this.collegecheckboxclick}
          />
          College_3&nbsp;&nbsp;
          <input
            type="checkbox"
            name="College_4"
            onChange={this.collegecheckboxclick}
          />
          College_4&nbsp;&nbsp;
          <input
            type="checkbox"
            name="College_5"
            onChange={this.collegecheckboxclick}
          />
          College_5&nbsp;&nbsp;
          <input
            type="checkbox"
            name="College_6"
            onChange={this.collegecheckboxclick}
          />
          College_6&nbsp;&nbsp;
          <input
            type="checkbox"
            name="College_7"
            onChange={this.collegecheckboxclick}
          />
          College_7&nbsp;&nbsp;
          <br />
          <br />
          {displaycollege}
        </center>
      </div>
    );
  }
}
export default Multiplechkbox;
