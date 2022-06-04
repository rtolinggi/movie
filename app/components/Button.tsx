import { ReactNode } from "react";

const Button: React.FC<{
  leftIcon: ReactNode;
  className: string;
}> = (props) => {
  const { leftIcon, className, children } = props;
  return (
    <div>
      <button
        className={`flex items-center justify-center gap-x-2 text-sm font-semibold px-6 py-1.5 bg-red-700/90 rounded shadow-lg  transition hover:bg-red-600/80 opacity-80 md:py-2 md:px-6 md:text-lg ${className}`}
      >
        {leftIcon}
        {children}
      </button>
    </div>
  );
};

export default Button;
