import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

// create a component which should produce some html
export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}