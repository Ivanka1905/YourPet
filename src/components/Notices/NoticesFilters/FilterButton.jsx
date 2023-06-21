import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleFilter } from './filterActions';

const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsOpen(!isOpen);
    dispatch(toggleFilter());
  };

  return (
    <button onClick={handleClick}>{isOpen ? 'Close Filters' : 'Open Filters'}</button>
  );
};

export default FilterButton;