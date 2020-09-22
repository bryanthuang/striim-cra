import React from 'react';
import OptionItem from './OptionItem';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: "",
      label: "",
      filteredOptions: props.options
    }
  }
  handleClick = () => {
    const {open} = this.state
    this.setState({
      open: !open
    })
  }
  handleXClick = (e) => {
    const {options} = this.props;
    e.preventDefault();
    this.setState({
      value: "",
      label: "",
      filteredOptions: options,
      open: false
    })
  }

  handleOptionClick = (option) => {
    const {open} = this.state;
    this.setState({
      value: option.value,
      label: option.label,
      open: !open
    })
  }

  handleChange = (e) => {
    const {options} = this.props;
    let list = options.filter(option => option.value.includes(e.target.value.toLowerCase()))
    this.setState({
      open: true,
      value: e.target.value,
      label: e.target.value,
      filteredOptions: list
    })
    
  }
  render() {
    const {open, value, label, filteredOptions} = this.state;
    const {searchable} = this.props;
    return (
      <div className="select-container">
        <div className="select-bar">
          <input className="select-item" placeholder="Select..." value={label} onClick={this.handleClick} onChange={this.handleChange}></input>
          <svg className="x" onClick={this.handleXClick} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
          <img className="chev" onClick={this.handleClick} src={open ? 'https://static.thenounproject.com/png/3513276-200.png': 'https://static.thenounproject.com/png/227299-200.png' } />
        </div>
        {filteredOptions.length > 0 && 
          <div className={`option-items ${open ? '' : 'close'}`}>
            {filteredOptions.map(option => 
              <OptionItem option={option} handleOptionClick={this.handleOptionClick} key={option.value}/>
            )}
          </div>
        }
      </div>
    );
  }
}
