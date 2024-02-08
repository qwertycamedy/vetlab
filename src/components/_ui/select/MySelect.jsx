import React from 'react';

import selectArrow from '@assets/img/select-arrow.svg';

const MySelect = ({
  outerCl,
  labelCl,
  selectCl,
  titleCl,
  title,
  icoCl,
  options,
  optionCl,
  placeholder,
  placeholderCl,
  selected,
  onChange
}) => {

  return (
    <div className={`${outerCl} select-outer`}>
      {title && <span className={`${titleCl} select-title`}>{title}</span>}
      <label className={`${labelCl} select-label`}>
        <select
          className={`${selectCl} select radius-mobile`}
          value={selected ? selected.value : placeholder}
          onChange={onChange}
          required
        >
          <option
            className={`${optionCl} ${placeholderCl} option option-placeholder`}
            value={placeholder}
            disabled
            hidden
          >
            {placeholder}
          </option>
          {options?.map((option, i) => (
            <option
              className={`${optionCl} option`}
              value={option.title ? option.title : option.name ? option.name : option}
              key={i}
            >
              {option.title ? option.title : option.name ? option.name : option}
            </option>
          ))}
        </select>
        <img
          className={`${icoCl} select-ico`}
          loading="lazy"
          src={selectArrow}
          width="20"
          height="15"
          alt="arrow"
        />
      </label>
    </div>
  );
};

export default MySelect;
