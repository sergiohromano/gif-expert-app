import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategoria = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        if (inputValue.trim().length > 2) {
            e.preventDefault();
            setCategories((cats) => [inputValue, ...cats]);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </form>
    );
}

AddCategoria.propTypes = {
    setCategories: PropTypes.func.isRequired,
}