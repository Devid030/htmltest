import LogoChrome from "../../atoms/header/LogoChrome";

function LogoChromeAndTitle() {
  return (
    <div className="flex gap-3 items-center">
      <LogoChrome />
      <span className="text-[16px] font-[600]">Downloads</span>
    </div>
  );
}

export default LogoChromeAndTitle;
