import { RxUpdate } from "react-icons/rx";

interface propsType {
  setIsUpdate: (isUpdate: boolean) => void;
  setCatchId: (isCatchId: number) => void;
  id: number ;
}

function ButtonEdit({ setIsUpdate, setCatchId, id }: propsType) {
  return (
    <>
   
   <RxUpdate 
         className="absolute right-10 top-1 hover:text-green-500"
         onClick={() => {
          setIsUpdate(true);
          setCatchId(id);
         }}
          />
    </>
  );
}

export default ButtonEdit;
