import Dialog from "./Dialog";
import Button from "./Button";

export default function Confirm(props) {
  const { open, onClose, title, children, onConfirm } = props;
  if (!open) {
    return <></>;
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="bg-white rounded-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <div className="py-5 text-gray-600">{children}</div>
        <div className="flex justify-end space-x-3 mt-6">
          <Button
            onClick={() => onClose()}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
          >
            No
          </Button>
          <Button
            onClick={() => {
              onClose();
              onConfirm();
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Yes
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
