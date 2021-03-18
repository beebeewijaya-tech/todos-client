import { CloseIcon, CheckIcon } from "../../assets/icon";

function Notify(props) {
  const { type, title, body } = props;
  return (
    <div className="flex absolute top-5 right-5">
      <div className="m-auto">
        <div className="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
          <div className="flex flex-row">
            <div className="px-2">
              {type === "success" ? <CheckIcon /> : <CloseIcon />}
            </div>
            <div className="ml-2 mr-6">
              <span className="font-semibold">{title}</span>
              <span className="block text-gray-500">{body}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notify;
