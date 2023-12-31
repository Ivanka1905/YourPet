import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAgeFilter, setGenderFilter } from './filterActions';

const FilterOptions = () => {
  const age = useSelector(state => state.filter.age);
  const gender = useSelector(state => state.filter.gender);
  const dispatch = useDispatch();

  const handleAgeChange = (event) => {
    dispatch(setAgeFilter(event.target.value));
  };

  const handleGenderChange = (event) => {
    dispatch(setGenderFilter(event.target.value));
  };

  return (
    <div>
      <select value={age} onChange={handleAgeChange}>
        <option value="">Select Age</option>
        <option value="1">1 year</option>
        <option value="2">2 years</option>
        <option value="3">3 years</option>
      </select>
      <select value={gender} onChange={handleGenderChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default FilterOptions;