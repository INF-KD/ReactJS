import { useState } from "react";
import InputBox from "./input-box";

const AlphabetInput = () => {

  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('Alphabet A-Z,a-z');

  const alphabetHandler = (event) => {
    const value = event.target.value;
    setInputValue(value.replace(/[^A-Za-z]/g, ''));
  };

  return (
    <div>
        <InputBox handler={alphabetHandler} value={inputValue} placeholder={placeholder}/>
    </div>
  );
}

export default AlphabetInput;