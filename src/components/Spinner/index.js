import LoadingIcon from "../../assets/icon/LoadingIcon";

function Spinner() {
  return (
    <div className="flex justify-center">
      <LoadingIcon size="animate-spin h-10 w-10 mt-5" />
    </div>
  );
}

export default Spinner;
