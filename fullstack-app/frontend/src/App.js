import React, { useState } from 'react';
import InputField from './components/InputField';

function App() {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (data) => {
        setInputData(data);
    };

    return (
        <div>
            <h1>Fullstack Application</h1>
            <InputField onInputChange={handleInputChange} />
            <p>Input Data: {inputData}</p>
        </div>
    );
}

export default App;