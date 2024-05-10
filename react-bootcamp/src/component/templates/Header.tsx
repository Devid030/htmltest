
import LogoChromeAndTitle from "../moleules/headers/LogoChromeAndTitle";
import SearchBox from "../moleules/headers/SearchBox";
import { HiMenuAlt3 } from 'react-icons/hi';

export interface setSearchDataProp{
  setSearchData : (search : string) => void;
}

function Header({setSearchData}: setSearchDataProp) {
  return (
    <header className="w-full sticky py-5 bg-slate-500">
      <div className=" w-[1400px] m-auto flex flex-row justify-between items-center">
        <LogoChromeAndTitle/>
        <SearchBox setSearchData = {setSearchData}/>
        <div style={{ width: '10%', marginLeft: '10px', justifyContent: 'flex-end', alignItems: 'center' }}>
        <HiMenuAlt3 size={24} style={{ color: 'white'  }} />
      </div>
      </div>
    </header>
  );
}

export default Header;
