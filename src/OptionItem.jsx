import React from 'react';

const OptionItem = (props) => {
  const {option, handleOptionClick} = props;
  return (
    <div className="option-item" onClick={() => handleOptionClick(option)}>{option.label}</div>
  )
}

export default OptionItem;