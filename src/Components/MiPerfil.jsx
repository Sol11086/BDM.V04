import { div } from "framer-motion/client";
import React from "react";
import {Avatar, Link, Button} from "@heroui/react";
import { UserIcon } from "@heroicons/react/24/solid";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import  Galeria  from "./Galeria.jsx";

export const UserIconSolid = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
        <UserIcon className="size-6 text-[#2EF2BB]" />
    );
  };

export const PhotoIconSolid = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
        <PhotoIcon className="size-6 text-[#2EF2BB]" />
    );
  };

export const HeartSolid = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
        <HeartIcon className="size-6 text-[#2EF2BB]" />
    );
  };

export const BookMarkSolid = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
        <BookmarkIcon className="size-6 text-[#2EF2BB]" />
    );
  };



export default function App() {

    
    return (
      <div className="min-h-screen w-10/12 items-center" style={{ backgroundColor: "rgba(26, 22, 140, 0.3)" }} >
        <div className="flex bg-black w-full">
            <div className="flex mb-20 mt-20 ml-5 items-center justify-between gap-5">
                <Avatar size="lg" src="src/assets/descarga (6).jpeg" />
                <span className="text-blue-50 text-2xl"> Solecito_1108 </span>
                <div className="flex ml-96 justify-end">
                    <Button color="danger" startContent={<UserIconSolid />} variant="bordered" className="bg-transparent text-[#2EF2BB] text-2xl rounded-full mr-20">
                        200
                    </Button>
                    <Button color="danger" startContent={<PhotoIconSolid />} variant="bordered" className="bg-transparent text-[#2EF2BB] text-2xl rounded-full mr-20">
                        200
                    </Button>
                    <Button color="danger" startContent={<HeartSolid />} variant="bordered" className="bg-transparent text-[#2EF2BB] text-2xl rounded-full mr-20">
                        200
                    </Button> 
                    <Button color="danger" startContent={<BookMarkSolid />} variant="bordered" className="bg-transparent text-[#2EF2BB] text-2xl rounded-full mr-20">
                        200
                    </Button> 
                </div>
            </div>
        </div>
            <Galeria />
      </div>
    );
  }