import React, { Component } from 'react';

export class ReactDataListSelect extends Component {
  render() {
    return (
      <div className="test">
        <TestMe />
        <div style={{ color: 'red' }}>
          testd sdd
          tesxt
        </div>
      </div>
    );
  }
}

class TestMe extends Component {
  render() {
    return (
      <div style={{ color: 'green' }}>
        This is test
      </div>
    );
  }
}
