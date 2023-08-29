import { InputHTMLAttributes } from "react";

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const { type, placeholder, onChange, onBlur, value, name, id } = props;
  return (
    <div className="mb-4">
      <input
        className="border rounded-full h-12 w-80 p-5 text-white mb-2 "
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        id={id}
      />
    </div>
  );
}

export default Input;
