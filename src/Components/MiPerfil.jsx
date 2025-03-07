import { useState } from "react";
import {
    Avatar,
    Button,
    Tooltip,
    useDisclosure,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@heroui/react";
import { UserIcon, PhotoIcon, HeartIcon, PlusIcon } from "@heroicons/react/24/solid";
import MyGallery from "./MyGallery.jsx";
import Gallery from "./Galeria.jsx";
import Followers from "./Folllowers.jsx";
import NewMedia from "./NewMedia.jsx";

export default function App() {
    const [activeComponent, setActiveComponent] = useState("followers");

    const { isOpen: isOpenLogin, onOpen: onOpenLogin, onOpenChange: onOpenChangeLogin } = useDisclosure();
    const [backdrop, setBackdrop] = useState("blur");

    return (
        <div className="min-h-screen w-full items-center" style={{ backgroundColor: "rgba(26, 22, 140, 0.3)" }}>
            <div
                className="flex w-full"
                style={{ background: "linear-gradient(-45deg, black 60%, rgba(179, 12, 126, 0.8) 100%)" }}
            >
                <div className="flex flex-col sm:flex-row mb-20 mt-20 ml-5 items-center justify-between gap-5">
                    <div className="flex items-center gap-3">
                        <Avatar size="lg" src="src/assets/descarga (6).jpeg" />
                        <span className="text-white font-semibold text-2xl">Solecito_1108</span>
                    </div>
                    <div className="flex flex-wrap sm:ml-96 justify-between gap-12 mt-5 sm:mt-0">
                        <Tooltip content="Seguidores" className="text-[#2EF2BB]">
                            <Button
                                onClick={() => setActiveComponent("followers")}
                                className={`bg-transparent text-2xl rounded-full mr-5 
                                ${activeComponent === "followers" ? "text-[#087c5b] border-none" : "text-[#2EF2BB]"}`}
                            >
                                <UserIcon className="w-6 h-6 mr-2" /> 200
                            </Button>
                        </Tooltip>
                        <Tooltip content="Mis publicaciones" className="text-[#2EF2BB]">
                            <Button
                                onClick={() => setActiveComponent("myGallery")}
                                className={`bg-transparent text-2xl rounded-full mr-5 
                                ${activeComponent === "myGallery" ? "text-[#087c5b]" : "text-[#2EF2BB]"}`}
                            >
                                <PhotoIcon className="w-6 h-6 mr-2" /> 200
                            </Button>
                        </Tooltip>
                        <Tooltip content="Favoritos" className="text-[#2EF2BB]">
                            <Button
                                onClick={() => setActiveComponent("gallery")}
                                className={`bg-transparent text-2xl rounded-full 
                                ${activeComponent === "gallery" ? "text-[#087c5b]" : "text-[#2EF2BB]"}`}
                            >
                                <HeartIcon className="w-6 h-6 mr-2" /> 200
                            </Button>
                        </Tooltip>
                        <Tooltip content="Nueva publicacion" className="text-[#2EF2BB]">
                            <Button className="text-[#2EF2BB] rounded-2xl text-2xl" onPress={() => onOpenLogin()}>
                                <PlusIcon className="w-6 h-6 mr-2" />Nuevo
                            </Button>
                        </Tooltip>
                        <Modal
                            isOpen={isOpenLogin}
                            onOpenChange={onOpenChangeLogin}
                            className="bg-black text-white rounded-2xl"
                            overlay
                        >
                            <div className="fixed inset-0 backdrop-blur-xs z-50"></div>
                            <ModalContent className="relative z-60">
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1 bg-[#1A168C] text-2xl text-white">
                                            Nueva publicacion
                                        </ModalHeader>
                                        <ModalBody className="p-7">
                                            <NewMedia />
                                        </ModalBody>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                {activeComponent === "followers" && <Followers />}
                {activeComponent === "myGallery" && <MyGallery />}
                {activeComponent === "gallery" && <Gallery />}
            </div>
        </div>
    );
}
