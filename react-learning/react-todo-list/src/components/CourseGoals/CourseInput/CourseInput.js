import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled from 'styled-components'

const FormInput = styled.div`
  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.invalid ? '#ff3535' : '#000'}
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.invalid ? '#ff3636' : '#ccc'};
  background-color: ${props => props.invalid ? '#ff9898' : 'transparent' };
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}


`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setValid] = useState(true);

  const goalInputChangeHandler = e => {
    if(e.target.value.trim().length > 0) setValid(true);
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    if(enteredValue.trim().length === 0){
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormInput invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormInput>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
