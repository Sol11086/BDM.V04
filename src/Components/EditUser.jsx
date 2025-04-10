import React, { useState, useRef, useEffect } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { CalendarDate } from "@internationalized/date";
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
    Autocomplete,
} from "@heroui/react";


export const users = [
    {
        id: 1,
        nombre: "Solecito_1108",
        nombreCompleto: "Sofia de la Fuente Alarcon",
        correo: "sofiadlfa@gmail.com",
        imageSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
        id: 2,
        nombre: "Cons_1108",
        nombreCompleto: "Constanza Montilongo",
        correo: "consmtdl@gmail.com",
        imageSrc: "src/assets/descarga (2).jpeg",
    }
];

export default function App() {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const imageSrc = users[0].imageSrc; 
    const nombre = users[0].nombre;
    const nombreCompleto = users[0].nombreCompleto;
    const correo = users[0].correo;

    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            if (selectedFile.size > 2000000) {
                setError('El archivo excede el tamaño máximo permitido (2MB).');
                setFile(null);
                setPreviewUrl(null);
            } else {
                setError('');
                setFile(selectedFile);

                const reader = new FileReader();
                reader.onload = () => {
                    setPreviewUrl(reader.result);
                };
                reader.readAsDataURL(selectedFile);
            }
        }
    };

    return (
        <div className="w-full gap-5 py-5">
            <div className="flex gap-4">
                {/* Utilizamos el componente estándar de imagen de HTML <img /> */}
                <img src={imageSrc} alt="Preview" className="w-full h-auto rounded-2xl" />
                <div className="w-full items-center justify-center gap-2 p-2">
                    <Input
                        className="w-full px-4 py-2 bg-[#151320] text-white border border-gray-700 rounded-xl mb-5"
                        defaultValue={nombre}
                        
                    />
                    <Input
                        className="w-full px-4 py-2 bg-[#151320] text-white border border-gray-700 rounded-xl mb-5"
                        defaultValue={nombreCompleto}
                    />
                    <Input
                        type="email"
                        className="w-full px-4 py-2 bg-[#151320] text-white border border-gray-700 rounded-xl mb-5"
                        defaultValue={correo}
                    />
                </div>
            </div>
            <div className="w-full mt-5 px-4 py-2 bg-[#151320] 
            text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 
            focus:ring-blue-500 focus:border-blue-500 transition grid items-center justify-center gap-2 p-2">
                <p className="text-gray-300 text-sm mb-2 flex justify-center">Cambiar foto de perfil</p>

                <input
                    type="file"
                    id="file-upload"
                    className="absolute opacity-0 cursor-pointer bottom-30 right-120 z-10"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                />

                <label htmlFor="file-upload">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 py-2 relative">
                        Seleccionar Archivo
                    </Button>
                </label>

                {file && (
                    <div className="mt-2">
                        {previewUrl ? (
                            <div className="preview-container">
                                {file.type.startsWith('image') ? (
                                    <img src={previewUrl} alt="Vista previa" className="max-w-full h-auto" />
                                ) : file.type.startsWith('video') ? (
                                    <video controls className="max-w-full h-auto">
                                        <source src={previewUrl} type={file.type} />
                                        Tu navegador no soporta la etiqueta de video.
                                    </video>
                                ) : null}
                            </div>
                        ) : (
                            <p className="text-green-400 text-sm">📂 {file.name}</p>
                        )}
                    </div>
                )}

                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <Button color="default" className="bg-indigo-500 w-full rounded-2xl mt-10">Actualizar usuario </Button>
        </div>
    );
}