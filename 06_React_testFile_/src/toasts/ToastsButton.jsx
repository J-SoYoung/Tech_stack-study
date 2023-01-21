import toast, { Toaster } from "react-hot-toast";

const successToast = () => toast.success("This is a success toast.");
const errorToast = () => toast.error("This is a error toast.");
const loadingToast = () => toast.loading("This is a loading toast.");
const promiseToast = () => toast.promise("This is a promise toast.");

export default function ToastsButton() {
  return (
    <div>
      <button onClick={successToast}>Success toast</button>
      <button onClick={errorToast}>errorToast toast</button>
      <button onClick={loadingToast}>loadingToast</button>
      <button onClick={promiseToast}>promiseToast</button>

      
      <Toaster />
    </div>
  );
}
