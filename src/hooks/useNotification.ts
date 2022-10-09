import { Id, toast, ToastOptions } from "react-toastify";

export default function useNotification() {
  const config: ToastOptions = {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const emitSuccess = (message: string): Id => toast.success(message, config);

  const emitError = (message: string): Id => toast.error(message, config);

  const emitInfo = (message: string): Id => toast.info(message, config);

  const emitWarning = (message: string): Id => toast.warn(message, config);

  return {
    emitSuccess,
    emitError,
    emitInfo,
    emitWarning,
  };
}
