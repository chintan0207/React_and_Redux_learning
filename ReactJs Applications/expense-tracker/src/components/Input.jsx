/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function Input({id,lable,name,value,onChange,error}) {
    
  return (
    <div className='input-container'>
    <label htmlFor={id}>{lable}</label>
    <input  id={id} name={name} value={value} onChange={onChange} />
    {error && <span className="error-msg">{error}</span>}
</div>
  )
}
