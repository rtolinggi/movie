interface Props {
  leftIcon: React.ReactElement;
  type: string;
  id: string;
  placeholder: string;
  onChange: React.ReactEventHandler | undefined;
}

const Input: React.FC<Props> = (props) => {
  return (
    <div className="w-full relative">
      {props.leftIcon}
      <input
        type={props.type}
        name={props.id}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className="w-full pl-8 text-gray-300 outline-none border-b border-b-gray-500 focus:border-b-white bg-transparent"
      />
    </div>
  );
};

export default Input;
