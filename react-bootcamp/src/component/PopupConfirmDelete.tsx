import { RxCross2 } from "react-icons/rx";
import { dataType } from "../pages/ChromeDownload";
import { useState } from "react";
interface PopupProps {
  setIsMatch: (isMatch: boolean) => void;
  deleteItem: (index: number, deleteFilename: string, fileName: string) => void;
  data: dataType[];
  id: number | undefined;
}

export default function PopupConfirmDelete({
  setIsMatch,
  deleteItem,
  data,
  id,
}: PopupProps): JSX.Element {
  const [fileNameDelete, setFileNameDelete] = useState<string>("");
  const filteredFileNames = data.filter(
    (item) => item.fileName === fileNameDelete
  );
  const fileName: string | undefined =
    filteredFileNames.length > 0 ? filteredFileNames[0].fileName : undefined;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        onClick={() => setIsMatch(false)}
      ></div>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white rounded-lg p-6">
        <div
          onClick={() => setIsMatch(false)}
          className="absolute top-3 right-3 w-6 h-6 cursor-pointer"
        >
          <RxCross2 />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Are you sure that you want to delete it?
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="creator"
              className="block font-medium text-gray-900">
            </label>
            <input
              id="creator"
              name="creator"
              type="text"
              autoComplete="off"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setFileNameDelete(e.target.value)}
              placeholder="Confirm with your Filename..."
            />
          </div>
          <div className="flex justify-end gap-5">
            <button
              className="border border-blue-500 text-blue-500 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={() => setIsMatch(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                id !== undefined && deleteItem(id, fileNameDelete, fileName);
                setIsMatch(false);
              }}
              className="border border-blue-500 text-blue-500 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Delete
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
