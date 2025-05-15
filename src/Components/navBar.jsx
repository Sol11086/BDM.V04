import React, { useState } from "react";
import { HomeIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/solid';
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Bars3Icon } from "@heroicons/react/16/solid";
import Chat from "./Chat.jsx";
import ContactList from "./ContactList.jsx";
import TextoBienvenida from "./TextoBienvenida.jsx";
import Galeria from "./Galeria.jsx";
import MiPerfil from "./MiPerfil.jsx";
import Login from "./Login.jsx";
import EditUser from "./EditUser.jsx";
import Filter from "./Filters.jsx"

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
  DrawerFooter,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
} from "@heroui/react";

export default function App() {


  const [isOpen, setIsOpen, isOpenSettings, setOpenSettings] = useState(false);
  const { isOpen: isOpenLogin, onOpen: onOpenLogin, onOpenChange: onOpenChangeLogin } = useDisclosure(); 
  const [isOpen, setIsOpen] = useState(false);

  const [size, setSize] = useState("md");
  const [backdrop, setBackdrop] = useState("blur");

  const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"];

  const handleOpen = (size) => {
    setSize(size);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

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

  const backdrops = ["Cambiar de cuenta",];

  const handleOpenLogin = (backdrop) => {
    setBackdrop(backdrop);
    onOpenLogin();
  };


  const { isOpen: isOpenUser,
    onOpen: onOpenUser,
    onOpenChange: onOpenChangeUser
  } = useDisclosure();

  //Chat logic

  const [isChat, setIsChat] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setIsChat(true);
  };

  return (


    <Navbar className="top-0 left-0 w-full" style={{ backgroundColor: "rgba(26, 22, 140, 0.3)" }}>
      <NavbarBrand className="grid justify-start">
        <p className="font-bold text-[#b30c7e]">EmpresaX</p>
      </NavbarBrand>
      <NavbarContent className="gap-15 justify-between">
        <NavbarItem>
          <Link href="/home" aria-current="page" className="hover:text-[#2EF2BB]">
            <HomeIcon className="size-6 text-[#2EF2BB]" />
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/profile" aria-current="page" className="hover:text-[#2EF2BB]">
            <UserIcon className="size-6 text-[#2EF2BB]" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Badge color="danger" content="5" shape="circle" className="bg-rose-500 border-none">
            <Link aria-current="page" className="hover:text-[#2EF2BB]" onClick={() => handleOpen(size)}>
              <ChatBubbleBottomCenterIcon className="size-6 text-[#2EF2BB]" />
            </Link>
          </Badge>
          <Drawer isOpen={isOpen} size={size} onClose={handleClose} style={{ backgroundColor: "rgba(9, 7, 43)" }}>
            <DrawerContent>
              <DrawerHeader className="flex flex-col gap-1">
                <Link aria-current="page" className="hover:text-[#2EF2BB]" onClick={() => setIsChat(false)}>
                  <Bars3Icon className="size-6 text-[#2EF2BB]" />
                </Link>
              </DrawerHeader>
              <DrawerBody>
                {isChat ? (
                  <Chat user={selectedUser} />
                ) : (
                  <ContactList onSelectUser={handleSelectUser} />
                )}
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onClick={handleClose} className="bg-rose-500 rounded-full text-blue-50">
                  Close
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
            {backdrops.map((b) => (
              <DropdownItem
                key="login"
                textValue="login"
                className="grid bg-gray-800 text-white mb-3 hover:bg-indigo-500 rounded-full justify-center"
                onPress={() => onOpenLogin()}
              >
                {b}
              </DropdownItem>))}
            <DropdownItem key="settings"
              textValue="Settings"
              className="grid bg-gray-800 text-white mb-3 hover:bg-indigo-500 rounded-full justify-center"
              onClick={() => onOpenUser()}>
              Ajustes
            </DropdownItem>
            <DropdownItem key="settings"
              textValue="Settings"
              className="grid justify-center bg-gray-800 text-white hover:bg-rose-500 rounded-full">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Modal
          isOpen={isOpenLogin}
          backdrop={backdrop}
          onOpenChange={onOpenChangeLogin}
          className="bg-black text-white rounded-2xl"
          overlay
        >
          <div className="fixed inset-0 backdrop-blur-xs z-50"></div>
          <ModalContent className="relative z-60">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 bg-gradient-to-r from-[#1A168C] to-[#f609e2] text-2xl text-white">Log in</ModalHeader>
                <ModalBody className="p-7">
                  <Login />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>

        <Modal
          isOpen={isOpenUser}
          backdrop={backdrop}
          onOpenChange={onOpenChangeUser}
          className="bg-black text-white rounded-2xl"
          overlay
        >
          <div className="fixed inset-0 backdrop-blur-xs z-50"></div>
          <ModalContent className="relative z-60 w-4/6 max-w-[90%]">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 bg-gradient-to-r from-[#1A168C] 
                  to-[#f609e2] text-2xl text-white">
                  Informacion de usuario
                </ModalHeader>
                <ModalBody>
                  <EditUser />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </NavbarContent>
    </Navbar>
  );
}