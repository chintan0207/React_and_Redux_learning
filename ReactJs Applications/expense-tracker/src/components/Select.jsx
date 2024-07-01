/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export default function Select({
    lable,
    id,
    name,
    value,
    onChange,
    options,
    defaultOption,
    error
}) {
    return (
        <div className='input-container'>
            <label htmlFor={id}>{lable}</label>
            <select id="category" name={name} value={value} onChange={onChange}>
                {defaultOption && (
                    <option value="" hidden>{defaultOption} </option>
                )}
                {options.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                ))}
            </select>
            {error && <span className="error-msg">{error}</span>}
        </div>
    )
}
