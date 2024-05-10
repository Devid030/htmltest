import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { dataType } from "../pages/ChromeDownload";
interface PopupProps {
  props: {
    setIsPopup: (isPopup: boolean) => void;
    addNewItem: (newItem: dataType) => void;
    data: dataType[];
  };
}

export default function Popup({ props }: PopupProps): JSX.Element {
  const [creator, setCreator] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [fileImage, setFileImage] = useState<string>("");
  const addNewItems = props.addNewItem;
  const setIsPopups = props.setIsPopup;

  const getCurrentDate = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check if the file size is greater than or equal to 2MB
      if (file.size >= 2 * 1024 * 1024) {
        // 2MB in bytes
        // Handle the case where the file size exceeds 2MB
        alert("File size exceeds 2MB. Please select a smaller file.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFileImage(reader.result as string); // Set Base64 encoded data (type casting)
        // Extract filename from the fileImage URL and set it as the fileName
      };
      reader.readAsDataURL(file);
    } else {
      setFileImage(""); // Clear fileImage if no file selected
      setFileName("");
    }
  };

  const handleSubmit = () => {
    const data = props.data;
    const id = data.length + 1;
    if (creator === "") {
      alert("please input creator");
      return;
    } else if (fileName === "") {
      alert("please input filename");
      return;
    } else if (fileImage === "" || fileImage === null) {
      alert("please select image ");
      return;
    } else {
      addNewItems({ id, creator, fileName, fileImage, date: getCurrentDate() });
      setIsPopups(false);
      // Reset input values after submission
      setCreator("");
      setFileName("");
      setFileImage("");
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        onClick={() => setIsPopups(false)}
      ></div>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white rounded-lg p-6">
        <div
          onClick={() => {
            setIsPopups(false);
            // alert("hello");
          }}
          className="absolute top-3 right-3 w-6 h-6 cursor-pointer"
        >
          <RxCross2 />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Create</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="creator"
              className="block font-medium text-gray-900"
            >
              Creator Name
            </label>
            <input
              id="creator"
              name="creator"
              type="text"
              autoComplete="off"
              required
              value={creator}
              onChange={(e) => setCreator(e.target.value)}
              className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter file name..."
            />
          </div>
          <div>
            <label
              htmlFor="creator"
              className="block font-medium text-gray-900"
            >
              File Name
            </label>
            <input
              id="fileName"
              name="fileName"
              type="text"
              autoComplete="off"
              required
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter file name..."
            />
          </div>
          <div>
            <label htmlFor="image" className="block font-medium text-gray-900">
              Choose Image
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              autoComplete="off"
              required
              onChange={handleFileChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {fileImage && (
              <img
                src={fileImage}
                alt="Selected"
                className="mt-2 w-32 h-32 object-cover"
              />
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 py-2 px-4 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
