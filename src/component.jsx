import React, { Component } from 'react';
import './styles';

export class HotReloadComponent extends Component {
  render() {
    console.error('test');
    return (
      <div className="test">
        <div style={{ color: 'green' }}>
          This is hot reload test
        </div>
      </div>
    );
  }
}
