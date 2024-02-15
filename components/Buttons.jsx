'use client'
import { Button } from "@nextui-org/react";
import { MdArrowForward } from 'react-icons/md'


const ButtonAnimated = ({children}) => {
    return (
      <div className="flex my-4 px-4 py-2 border rounded-lg">
        <Button className="mx-4" color="success" endContent={<MdArrowForward />}>
          {children}
        </Button>
      </div>
  );
};
  
  export default ButtonAnimated;