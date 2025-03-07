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
        <div className="w-full flex gap-5 mb-5">
            <Button color="default" className="bg-transparent w-full border-3 border-[#b30c7e] text-[#b30c7e] font-bold rounded-2xl">
                Home
            </Button>
            <Button color="default" className="bg-transparent w-full border-3 border-[#b30c7e] text-[#b30c7e] font-bold rounded-2xl">
                Naturaleza
            </Button>
            <Button color="default" className="bg-transparent w-full border-3 border-[#b30c7e] text-[#b30c7e] font-bold rounded-2xl">
                Musica
            </Button>
            <Button color="default" className="bg-transparent w-full border-3 border-[#b30c7e] text-[#b30c7e] font-bold rounded-2xl">
                Punk
            </Button>
            <Button color="default" className="bg-transparent w-full border-3 border-[#b30c7e] text-[#b30c7e] font-bold rounded-2xl">
                Deportes
            </Button>
            <Button color="default" className="bg-transparent w-full border-3 border-[#b30c7e] text-[#b30c7e] font-bold rounded-2xl">
                Tecnologia
            </Button>
            <Button color="default" className="bg-transparent w-full border-3 border-[#b30c7e] text-[#b30c7e] font-bold rounded-2xl">
                Fotografia
            </Button>
            <Button color="default" className="bg-transparent w-full border-3 border-[#b30c7e] text-[#b30c7e] font-bold rounded-2xl">
                Arte
            </Button>
        </div>
    );
}