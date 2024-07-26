/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Input({
  type,
  id,
  name,
  value,
  lableName,
  placeholder,
}) {
  return (
    <>
      <div className="flex flex-col gap-1 my-2 ">
        <label className=" px-[1px] text-[14px] " htmlFor={name}>
          {lableName}
        </label>
        <input
          className="border px-[10px] py-1  outline-none rounded-md"
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </>
  );
}
