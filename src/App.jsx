import React, { useState } from "react";
import { HomeIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/solid';
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Bars3Icon } from "@heroicons/react/16/solid";
import Chat from "./Components/Chat.jsx";
import ContactList from "./Components/ContactList.jsx";
import TextoBienvenida from "./Components/TextoBienvenida.jsx";
import Galeria from "./Components/Galeria.jsx";
import MiPerfil from "./Components/MiPerfil.jsx";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button,
  Avatar,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter
} from "@heroui/react";

function App() {
  
  const [isOpen, setIsOpen] = useState(false);
    const [size, setSize] = useState("md");
  
    const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"];
  
    const handleOpen = (size) => {
      setSize(size);
      setIsOpen(true); 
    };
  
    const handleClose = () => {
      setIsOpen(false); 
    };
  
    const [isChat, setIsChat] = useState(false);
    const [isMyperfil, setIsPerfil] = useState(false);
    const [isHome, setIsHome] = useState(false);
  
    const toggleComponent = () => {
      setIsChat(!isChat);
    };

    const toggleComponentMiPerfil = () => {
      setIsPerfil(!isMyperfil);
    };

    const toggleHome = () => {
      setIsHome(!isHome);
    };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#04030D] from-[80%] via-[#0A062B] via-[90%] to-[#070540]" >
        {/* <div style={{ backgroundImage: "url('src/assets/Random static (1).png')" }}
           class="absolute -bottom-1/2 opacity-25 h-screen w-full"></div> */}
        <Navbar className="top-0 left-0 w-full" style={{ backgroundColor: "rgba(26, 22, 140, 0.3)" }}>
          <NavbarBrand className="grid justify-start">
            <p className="font-bold text-[#D771D9]">EmpresaX</p>
          </NavbarBrand>
          <NavbarContent className="gap-15 justify-between">
            <NavbarItem>
              <Link aria-current="page" href="#" className="hover:text-[#2EF2BB]" onClick={toggleHome}>
                <HomeIcon className="size-6 text-[#2EF2BB]" />
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link aria-current="page" href="#" className="hover:text-[#2EF2BB]" onClick={toggleComponentMiPerfil}>
                <UserIcon className="size-6 text-[#2EF2BB]" />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link aria-current="page" href="#" className="hover:text-[#2EF2BB]" onClick={() => handleOpen(size)}>
                <ChatBubbleBottomCenterIcon className="size-6 text-[#2EF2BB]" />
              </Link>
              <Drawer isOpen={isOpen} size={size} onClose={handleClose} style={{ backgroundColor: "rgba(9, 7, 43)" }} >
                <DrawerContent>
                  <DrawerHeader className="flex flex-col gap-1">
                    <Link aria-current="page" href="#" className="hover:text-[#2EF2BB]" onClick={toggleComponent}>
                      <Bars3Icon className="size-6 text-[#2EF2BB]" />
                    </Link>
                  </DrawerHeader>
                  <DrawerBody>
                    {isChat ? <Chat /> : <ContactList />}
                  </DrawerBody>
                  <DrawerFooter>
                    <Button color="danger" variant="light" onClick={handleClose} className="bg-[#A40C37] rounded-full text-blue-50">
                      Close
                    </Button>
                    <Button color="primary" onClick={handleClose} className="bg-indigo-500 rounded-full text-blue-50">
                      Action
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="items-center" justify="end">
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[20rem] h-10 rounded-full",
                mainWrapper: "h-full  rounded-full",
                input: "text-small  rounded-full",
                inputWrapper:
                  "h-full font-normal text-[#444353] bg-[#151320] dark:bg-default-500/20  rounded-full",
              }}
              placeholder="Type to search..."
              size="sm"
              startContent={<MagnifyingGlassIcon className="size-6 text-[#444353]" />}
              type="search"
            />
            <Dropdown placement="bottom-end" className="bg-black rounded">
              <DropdownTrigger>
                <Avatar
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat" className="block !opacity-100 !visible">
                <DropdownItem key="profile" className="h-14 gap-2" textValue="Profile">
                  <p className="font-semibold text-blue-50">Signed in as</p>
                  <p className="font-semibold  text-blue-50">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings" textValue="Settings" className=" grid bg-gray-800 text-white mb-3 hover:bg-indigo-500 rounded-full justify-center">
                  My Settings
                </DropdownItem>
                <DropdownItem key="settings" textValue="Settings" className="grid justify-center bg-gray-800 text-white hover:bg-[#A40C37] rounded-full">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </Navbar>
        {isMyperfil ? <MiPerfil /> : <Galeria />}
      </div>
    </>
  );
}

export default App;


