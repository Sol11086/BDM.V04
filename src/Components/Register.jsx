import React, { useState, useRef, useEffect } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { CalendarDate } from "@internationalized/date";
import { useUsers } from "../hooks/useUsers.jsx";
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
    Alert,
    DateInput,
} from "@heroui/react";


export default function App() {
    const [isVisible, setIsVisible] = React.useState(false); // Para la visibilidad de la contraseña
    const toggleVisibility = () => setIsVisible(!isVisible);

    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [fileError, setFileError] = useState(''); // Renombrado para evitar conflicto con 'error' de alerta

    // Estados para los campos del formulario
    const [correo, setCorreo] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [nombre_usuario, setNombreUsuario] = useState('');
    const [contra, setContra] = useState('');

    // Estados para la alerta
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertColor, setAlertColor] = useState('red'); // 'red' para error, 'green' para éxito
    const [alertTitle, setAlertTitle] = useState('');

    const { addUser, loading } = useUsers();

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFileError(''); // Limpiar errores previos del archivo

        if (selectedFile) {
            const isPNG = selectedFile.type === "image/png";
            if (!isPNG) {
                setFileError("El archivo debe ser un PNG.");
                setFile(null);
                setPreviewUrl(null);
                return;
            }
            if (selectedFile.size > 2000000) {
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

    const handleSubmit = async () => {
        // Limpiar alertas previas
        setShowAlert(false);

        // Validaciones de campos
        if (!correo || !nombre || !apellido || !nombre_usuario || !contra) {
            setAlertTitle('Campos Incompletos');
            setAlertMessage('Por favor, completa todos los campos para registrarte.');
            setAlertColor('red');
            setShowAlert(true);
            return;
        }

        // Validación de formato de correo (básica)
        if (!/\S+@\S+\.\S+/.test(correo)) {
            setAlertTitle('Correo Inválido');
            setAlertMessage('Por favor, ingresa un formato de correo electrónico válido.');
            setAlertColor('red');
            setShowAlert(true);
            return;
        }

        // Validación de la contraseña (ejemplo: mínimo 6 caracteres)
        if (contra.length < 6) {
            setAlertTitle('Contraseña Débil');
            setAlertMessage('La contraseña debe tener al menos 6 caracteres.');
            setAlertColor('red');
            setShowAlert(true);
            return;
        }

        if (fileError) { // Si hay un error con el archivo, no permitir el registro
            setAlertTitle('Error con la Foto de Perfil');
            setAlertMessage(fileError); // Muestra el mensaje de error del archivo
            setAlertColor('red');
            setShowAlert(true);
            return;
        }

        try {
            const userData = {
                correo: correo,
                nombre: nombre,
                apellido: apellido,
                nombre_usuario: nombre_usuario,
                contra,
                foto_perfil: file ? await convertToBase64(file) : null,
            };

            const response = await addUser(userData);

            // Asumiendo que `addUser` puede retornar un indicador de éxito o un error específico
            if (response && response.success) { // Ajusta esto según lo que retorne tu `addUser`
                setAlertTitle('¡Registro Exitoso!');
                setAlertMessage('Tu cuenta ha sido creada exitosamente.');
                setAlertColor('green');
                setShowAlert(true);

                // Limpiar el formulario
                setCorreo('');
                setNombre('');
                setApellido('');
                setNombreUsuario('');
                setContra('');
                setFile(null);
                setPreviewUrl(null);
            } else {
                // Si la API retorna un mensaje de error específico, úsalo
                setAlertTitle('Error en el Registro');
                setAlertMessage(response.message || 'Hubo un problema al intentar registrarte. Por favor, inténtalo de nuevo.');
                setAlertColor('red');
                setShowAlert(true);
            }

        } catch (error) {
            console.error("Error adding user:", error);
            setAlertTitle('Error de Conexión');
            setAlertMessage('Hubo un problema al intentar registrarte. Por favor, inténtalo más tarde.');
            setAlertColor('red');
            setShowAlert(true);
        }
    };

    return (
        <div className="w-full gap-5 py-5">
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
                type="Email"
                placeholder="Ingresa tu correo"
                className="w-full px-4 py-2 bg-[#151320] text-white border
                 border-gray-700 rounded-xl focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500 transition mb-5"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />
            <Input
                type="Text"
                placeholder="Ingresa tu nombre"
                className="w-full px-4 py-2 bg-[#151320] text-white border
                 border-gray-700 rounded-xl focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500 transition mb-5"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <Input
                type="Text"
                placeholder="Ingresa tu primer apellido"
                className="w-full px-4 py-2 bg-[#151320] text-white border
                 border-gray-700 rounded-xl focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500 transition mb-5"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />
            <Input
                type="Text"
                placeholder="Ingresa tu nombre de usuario"
                className="w-full px-4 py-2 bg-[#151320] text-white border
                 border-gray-700 rounded-xl focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500 transition mb-5"
                value={nombre_usuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
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
                placeholder="Ingrese su contraseña"
                type={isVisible ? "text" : "password"}
                value={contra}
                onChange={(e) => setContra(e.target.value)}
                variant="bordered"
            />
            <div className="w-full mt-5 px-4 py-2 bg-[#151320] text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition grid items-center justify-center gap-2 p-2">
                <p className="text-gray-300 text-sm mb-2 flex justify-center">Foto de perfil</p>

                <input
                    type="file"
                    id="file-upload"
                    className="absolute opacity-0 cursor-pointer"
                    accept="image/png"
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
                color="default"
                className="bg-indigo-500 w-full rounded-2xl mt-10"
                onPress={handleSubmit}
                isLoading={loading} // Usa isLoading para el estado de carga
                disabled={loading} // Deshabilita el botón mientras carga
            >
                {loading ? 'Registrando...' : 'Registrarse'}
            </Button>
        </div>
    );
}