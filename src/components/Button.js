export default function Button(props) {
  const { type = "button", children, onClick, className = "" } = props;
  return (
    <button
      className={`bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
