import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}
function Button({ onClick, title, type }: Props) {
  return (
    <div>
      <button
        className=" bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-12 my-5 w-60 rounded-full"
        onClick={onClick}
        type={type}
      >
        <p className=" text-lg text-black font-bold self-center uppercase">
          {title}
        </p>
      </button>
    </div>
  );
}

export default Button;
