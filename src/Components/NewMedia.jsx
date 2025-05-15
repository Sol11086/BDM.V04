import React, { useState, useRef, useEffect } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/solid";
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
    Autocomplete,
    AutocompleteItem,
} from "@heroui/react";

export const topic = [
    {
        id: 1,
        name: "Naturaleza",
    },
    {
        id: 2,
        name: "Deporte",
    },
    {
        id: 3,
        name: "Arte",
    },
    {
        id: 4,
        name: "Musica",
    },
    {
        id: 5,
        name: "Tecnologia",
    },
    {
        id: 6,
        name: "Punk",
    },
    {
        id: 7,
        name: "Belleza",
    },
    {
        id: 8,
        name: "Manualidades",
    },
    {
        id: 9,
        name: "Dark fantasy",
    },
    {
        id: 10,
        name: "Aesthethic",
    },
    {
        id: 11,
        name: "Programacion",
    },
    {
        id: 12,
        name: "Plantas",
    },
    {
        id: 13,
        name: "Oufits",
    },
    {
        id: 14,
        name: "Fotografia",
    },
];

export default function App() {
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
        <div className="w-full grid items-center">
            <Input
                type="Text"
                placeholder="Titulo"
                className="w-full px-4 py-2 bg-[#151320] text-white border
                               border-gray-700 rounded-xl focus:outline-none focus:ring-2
                                focus:ring-blue-500 focus:border-blue-500 transition mb-5"
            />
            <Autocomplete
                className="w-full px-4 py-2 bg-[#151320] text-white border border-gray-700 
                rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 
                focus:border-blue-500 transition mb-5"
                defaultItems={topic}
                labelPlacement="inside"
                placeholder="Selecciona un tema"
                variant="bordered"
            >
                {(user) => (
                    <AutocompleteItem key={user.id} textValue={user.name} className="bg-black text-white rounded-2xl" >
                        <div className="flex gap-2 items-center">
                            <div className="flex flex-col">
                                <span className="text-small">{user.name}</span>
                                <span className="text-tiny text-default-400">{user.email}</span>
                            </div>
                        </div>
                    </AutocompleteItem>
                )}
            </Autocomplete>
            <Input
                type="Text"
                placeholder="Descripcion"
                className="w-full px-4 py-2 bg-[#151320] text-white border
                                           border-gray-700 rounded-xl focus:outline-none focus:ring-2
                                            focus:ring-blue-500 focus:border-blue-500 transition mb-5"
            />
            <div className="w-full px-4 py-2 bg-[#151320] text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition grid items-center justify-center gap-2 p-2">
                <p className="text-gray-300 text-sm mb-2 flex justify-center">Sube tu contenido multimedia</p>

                <input
                    type="file"
                    id="file-upload"
                    className="absolute opacity-0 cursor-pointer  bottom-30 right-10 z-10"
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

            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 py-2 relative z-10 mt-8">
                Subir publicacion
            </Button>
        </div>
    );
}
