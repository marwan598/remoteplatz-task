import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isNavBar?: boolean;
}

function Input(props: Props) {
  const { type, placeholder, onChange, onBlur, value, name, id, isNavBar } =
    props;
  return (
    <div className={!isNavBar ? "mb-4" : ""}>
      <input
        className="border rounded-full h-12 w-80 p-5 text-white"
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
