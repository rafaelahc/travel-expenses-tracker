import React, {useState, useEffect} from "react";


const DynamicInput = ({value, StyledInput}) => {
    const [inputSize, setInputSize] = useState(value.length);

    useEffect(() => {
      setInputSize(value.length);
    })

  
    return (
      <StyledInput
        type="text"
        value={value}
        size={inputSize} // Define o tamanho do input dinamicamente
        readOnly
      />
    );
  };

export default DynamicInput;