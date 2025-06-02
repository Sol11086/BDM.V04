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
    Alert,
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
    const [fileError, setFileError] = useState(''); // Renombrado para evitar conflicto con 'error' de alerta

    // Estados para los campos del formulario
    const [title, setTitle] = useState('');
    const [selectedTopic, setSelectedTopic] = useState(null); // Almacena el ID o el objeto completo del tema
    const [description, setDescription] = useState('');

    // Estados para la alerta
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertColor, setAlertColor] = useState('red'); // 'red' para error, 'green' para éxito
    const [alertTitle, setAlertTitle] = useState('');

    // Estado de carga para el botón de subir
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFileError(''); // Limpiar errores previos del archivo
        setShowAlert(false); // Ocultar cualquier alerta previa

        if (selectedFile) {
            // Validar tipos de archivo (imágenes o videos)
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/webm', 'video/ogg'];
            if (!allowedTypes.includes(selectedFile.type)) {
                setFileError('Solo se permiten imágenes (JPG, PNG, GIF) o videos (MP4, WebM, Ogg).');
                setFile(null);
                setPreviewUrl(null);
                return;
            }

            if (selectedFile.size > 2000000) { // 2MB
                setFileError('El archivo excede el tamaño máximo permitido (2MB).');
                setFile(null);
                setPreviewUrl(null);
            } else {
                setFileError('');
                setFile(selectedFile);

                const reader = new FileReader();
                reader.onload = () => {
                    setPreviewUrl(reader.result);
                };
                reader.readAsDataURL(selectedFile);
            }
        } else {
            setFile(null);
            setPreviewUrl(null);
        }
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const dataUrl = reader.result;
                const base64 = dataUrl.split(',')[1]; // Solo la parte Base64
                resolve(base64);
            };
            reader.onerror = (error) => reject(error);
        });
    };

    const handleUpload = async () => {
        // Limpiar alertas previas
        setShowAlert(false);

        // Validaciones de campos
        if (!title || !description || !selectedTopic) {
            setAlertTitle('Campos Incompletos');
            setAlertMessage('Por favor, completa el título, la descripción y selecciona un tema.');
            setAlertColor('red');
            setShowAlert(true);
            return;
        }

        if (!file) {
            setAlertTitle('Archivo Faltante');
            setAlertMessage('Por favor, selecciona un archivo multimedia para subir.');
            setAlertColor('red');
            setShowAlert(true);
            return;
        }

        if (fileError) { // Si hay un error con el archivo, no permitir la subida
            setAlertTitle('Error con el Archivo');
            setAlertMessage(fileError); // Muestra el mensaje de error del archivo
            setAlertColor('red');
            setShowAlert(true);
            return;
        }

        setLoading(true); // Activar estado de carga

        try {
            const mediaData = {
                title: title,
                description: description,
                topicId: selectedTopic ? selectedTopic.id : null, // Envía solo el ID del tema
                fileBase64: await convertToBase64(file),
                fileName: file.name,
                fileType: file.type,
            };

            // Aquí integrarías tu lógica para subir la media (por ejemplo, con una API)
            // const response = await uploadMediaApi(mediaData);
            console.log("Datos a subir:", mediaData);

            // Simulación de una llamada a la API
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simula un retraso de red

            // Asumiendo que la subida fue exitosa:
            setAlertTitle('¡Contenido Subido!');
            setAlertMessage('Tu contenido multimedia ha sido subido exitosamente.');
            setAlertColor('green');
            setShowAlert(true);

            // Limpiar el formulario
            setTitle('');
            setDescription('');
            setSelectedTopic(null);
            setFile(null);
            setPreviewUrl(null);

        } catch (error) {
            console.error("Error al subir el contenido:", error);
            setAlertTitle('Error al Subir Contenido');
            setAlertMessage('Hubo un problema al subir tu contenido. Por favor, inténtalo más tarde.');
            setAlertColor('red');
            setShowAlert(true);
        } finally {
            setLoading(false); // Desactivar estado de carga
        }
    };

    return (
        <div className="w-full grid items-center">
            {/* Componente de alerta */}
            {showAlert && (
                <Alert
                    color={alertColor}
                    description={alertMessage}
                    isVisible={showAlert}
                    title={alertTitle}
                    variant="faded"
                    onClose={() => setShowAlert(false)}
                    className="mb-4"
                />
            )}

            <Input
                type="Text"
                placeholder="Titulo"
                className="w-full px-4 py-2 bg-[#151320] text-white border
                            border-gray-700 rounded-xl focus:outline-none focus:ring-2
                            focus:ring-blue-500 focus:border-blue-500 transition mb-5"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Autocomplete
                className="w-full px-4 py-2 bg-[#151320] text-white border border-gray-700
                rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:border-blue-500 transition mb-5"
                defaultItems={topic}
                labelPlacement="inside"
                placeholder="Selecciona un tema"
                variant="bordered"
                onSelectionChange={(key) => {
                    const selected = topic.find(t => t.id === Number(key));
                    setSelectedTopic(selected);
                }}
                selectedKey={selectedTopic ? selectedTopic.id.toString() : null}
            >
                {(item) => (
                    <AutocompleteItem key={item.id} textValue={item.name} className="bg-black text-white rounded-2xl">
                        <div className="flex gap-2 items-center">
                            <div className="flex flex-col">
                                <span className="text-small">{item.name}</span>
                                <span className="text-tiny text-default-400">{item.email}</span>
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <div className="w-full px-4 py-2 bg-[#151320] text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition grid items-center justify-center gap-2 p-2">
                <p className="text-gray-300 text-sm mb-2 flex justify-center">Sube tu contenido multimedia</p>

                <input
                    type="file"
                    id="file-upload"
                    className="absolute opacity-0 cursor-pointer bottom-30 right-10 z-10"
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

                {fileError && <p className="text-red-500 text-sm mt-2">{fileError}</p>}
            </div>

            <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 py-2 relative z-10 mt-8"
                onPress={handleUpload}
                isLoading={loading}
                disabled={loading}
            >
                {loading ? 'Subiendo...' : 'Subir Publicación'}
            </Button>
        </div>
    );
}
