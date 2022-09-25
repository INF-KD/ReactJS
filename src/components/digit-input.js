import { useState } from "react";
import InputBox from "./input-box";

const DigitInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('Digits 0-9');

  const digitHandler = (event) => {
    setInputValue(event.target.value.replace(/[^\d]/g, ''));
  };

  return (
    <div>
        <InputBox handler={digitHandler} value={inputValue} placeholder={placeholder}/>
    </div>
  );
}

export default DigitInput;