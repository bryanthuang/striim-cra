import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      options : [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ],
    }
  }


  render () {
    const {options} = this.state;
    return (
      <div>
        <Select options={options}/>
      </div>
    )
  }
}

