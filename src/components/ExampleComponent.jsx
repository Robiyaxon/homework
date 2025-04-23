import React, { useRef } from 'react';

function ExampleComponent() {
    const inputRef = useRef();
    const divRef = useRef();
    const korsat = () => {
      divRef.current.textContent = inputRef.current.value;
    };
  
    return (
      <div>
        <input ref={inputRef} type="text" placeholder="Ismingni yoz" />
        <button onClick={korsat}>Ko‘rsat</button>
        <div ref={divRef} style={{ marginTop: '10px', fontWeight: 'bold' }}></div>
      </div>
    )
}

export default ExampleComponent;
