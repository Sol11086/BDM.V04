import React, { useState, useRef, useEffect } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import {CalendarDate} from "@internationalized/date";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/solid";
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
    DateInput,
} from "@heroui/react";


export default function App() {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    
        const [file, setFile] = useState(null);
    
        const handleFileChange = (event) => {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                setFile(selectedFile);
            }
        };
    return (
        <div className="w-full gap-5 py-5">
            <Input
                type="Text"
                placeholder="Nombre de usuario"
                className="w-full px-4 py-2 bg-[#151320] text-white border
                 border-gray-700 rounded-xl focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500 transition mb-5"
            />
            <Input
                type="Text"
                placeholder="Ingresa tu nombre completo"
                className="w-full px-4 py-2 bg-[#151320] text-white border
                 border-gray-700 rounded-xl focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500 transition mb-5"
            />
            <DateInput
                className="w-full px-4 py-2 bg-[#151320] text-white border
                border-gray-700 rounded-xl focus:outline-none focus:ring-2
                 focus:ring-blue-500 focus:border-blue-500 transition mb-5"
                label={"Birth date"}
                placeholderValue={new CalendarDate(1995, 11, 6)}
            />
            <Input
                type="Email"
                placeholder="Ingresa tu correo"
                className="w-full px-4 py-2 bg-[#151320] text-white border
                 border-gray-700 rounded-xl focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500 transition mb-5"
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
            <div className="w-full px-4 py-2 bg-[#151320] text-white border
                 border-gray-700 rounded-xl focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500 transition mt-5 grid items-center justify-center gap-2 p-2">
                <p className="text-gray-300 text-sm mb-2 flex justify-center">Sube tu foto de perfil</p>
                <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileChange}
                />
                <label htmlFor="file-upload">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 py-2">
                        Seleccionar Archivo
                    </Button>
                </label>

                {file && <p className="text-green-400 text-sm">📂 {file.name}</p>}
            </div>
            <Button color="default" className="bg-indigo-500 w-full rounded-2xl mt-10">Registrarse</Button>
        </div>
    );
}