import { useStateContext } from "../../contexts/ContextProvider";
import CancelIcon from "@mui/icons-material/Cancel";
import billie from "../../public/billie.jpg";
import Image from "next/image";

const NotificationModal = () => {
  const { isClicked, setIsClicked, initialState } = useStateContext();

  return (
    <div className="z-10 nav-item absolute right-5 md:right-56 top-16 swatch_bg-brown p-6 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg text-gray-200">Notifications</p>
        <button
          type="button"
          onClick={() => setIsClicked(initialState)}
          className="text-2xl p-3 text-gray-100 rounded-full hover:drop-shadow-xl"
        >
          <CancelIcon className="text-gray-100" />
        </button>
      </div>
      <div>
        <div className="flex items-center gap-4 border-b-1 border-color py-4">
          <div className="h-10 w-10">
            <Image src={billie} alt="artist" className="w-full rounded-full" />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-gray-200">
              Billie Eilish dropped a new album
            </p>
            <p className="text-gray-500 text-sm dark:text-gray-400">
              17 min ago
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-b-1 border-color py-4">
          <div className="h-10 w-10">
            <Image src={billie} alt="artist" className="w-full rounded-full" />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-gray-200">
              Billie Eilish dropped a new album
            </p>
            <p className="text-gray-500 text-sm dark:text-gray-400">
              17 min ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
