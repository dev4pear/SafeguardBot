import ExitIcon from "./ExitIcon";
import IconButton from "./IconButton";

export default function Dialog(props) {
  const { open, onClose } = props;
  if (!open) {
    return <></>;
  }
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white w-full max-w-md m-4 rounded-xl shadow-lg">
        <div className="p-6">{props.children}</div>
        <button
          onClick={() => onClose()}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ExitIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
