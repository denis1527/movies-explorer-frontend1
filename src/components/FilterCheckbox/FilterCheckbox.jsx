import React, { useState } from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="filter-checkbox search-form__switch">
      <form>
        <label className="switch">
          <input type="checkbox" checked={isOn} onChange={handleToggle} />
          <span className="slider"></span>
        </label>
      </form>
      <p>Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;

