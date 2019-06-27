import React from 'react';
class HelloEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      content: true
    };
  }

  change(obj) {
    this.setState({
      content: !this.state.content
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.content ? '1' : '2'}</h1>
        <h2>{this.props.name}</h2>
        <button onClick={this.change.bind(this, this.state.content)}>点击</button>
      </div>
    );
  }
}
export default HelloEvent;
