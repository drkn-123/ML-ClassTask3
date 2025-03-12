import React, { useState } from 'react';

const InputField = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (inputValue) {
            try {
                const response = await fetch('http://localhost:5000/api/input', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ value: inputValue }),
                });
                if (response.ok) {
                    setInputValue('');
                    // Handle successful submission (e.g., show a message)
                } else {
                    // Handle error response
                }
            } catch (error) {
                // Handle fetch error
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter something..."
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default InputField;