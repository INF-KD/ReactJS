import './library/css/style.css'

const InputBox = (props) => {
   const { handler, value, placeholder } = props;
      
   return (
      <div className='centered'>
         <input onChange={handler} value={value} placeholder={placeholder} />
      </div>
   );
};

export default InputBox;
