import { IconSearch } from "../../atoms/icons";
import { setSearchDataProp } from "../../templates/Header";
function SearchBox({ setSearchData }: setSearchDataProp) {
  return (
    <div className=" w-[55%]  py-2 px-3 bg-gray-200 rounded-[25px] overflow-hidden flex justify-between items-center gap-3">
      <IconSearch prop={"text-[22px] text-gray-500"} />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search downloads"
        className=" bg-transparent w-full outline-none "
        onChange={(e) => setSearchData(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
