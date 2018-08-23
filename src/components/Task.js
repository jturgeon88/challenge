import React, { Component } from 'react';

export default class Task extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.props.setDescription(e.currentTarget.value);
  }

  render() {
    return (
      <input
        className="input-reset ba b--black-20 pa2 mh3 db w-80"
        placeholder="Description"
        type="text"
        onChange={this.update}
      />
    );
  }
}
