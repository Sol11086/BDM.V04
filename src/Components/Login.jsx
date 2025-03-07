import React, { useState, useRef, useEffect } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import Register from "./Register.jsx"
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
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const [backdrop, setBackdrop] = useState("blur");

    const { isOpen: isOpenLogin, onOpen: onOpenLogin, onOpenChange: onOpenChangeLogin } = useDisclosure();
    return (
        <div className="w-full gap-10 py-6">
            <Input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-[#151320] text-white border
                 border-gray-700 rounded-xl focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500 transition mb-7"
            />
            <Input
                className="w-full px-4 py-2 bg-[#151320] text-white border border-gray-700 
                 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 
                 focus:border-blue-500 transition"
                endContent={
                    <button
                        aria-label="toggle password visibility"
                        className="flex items-center justify-center p-2 bg-transparent"
                        type="button"
                        onClick={toggleVisibility}
                    >
                        {isVisible ? (
                            <EyeSlashIcon className="w-6 h-6 text-gray-400" />
                        ) : (
                            <EyeIcon className="w-6 h-6 text-gray-400" />
                        )}
                    </button>
                }
                placeholder="Enter your password"
                type={isVisible ? "text" : "password"}
                variant="bordered"
            />
            <div className="w-full p-10 flex justify-center ">
                <span>¿No tienes cuenta?</span>
                <Link aria-current="page" className="hover:text-[#f609e2]" onPress={() => onOpenLogin()}>
                    Registrate!
                </Link>
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
                                <ModalHeader
                                    className="flex flex-col gap-1 bg-gradient-to-r 
                                    from-[#1A168C] to-[#f609e2] text-2xl text-white">
                                    Registrarse
                                </ModalHeader>
                                <ModalBody className="p-7">
                                    <Register />
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
            <Button color="default" className="bg-indigo-500 w-full rounded-2xl">LogIn</Button>
        </div>
    );
}