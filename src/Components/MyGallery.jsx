import React, { useState, useRef, useEffect } from "react";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { ShareIcon } from "@heroicons/react/16/solid";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import SendComponent from "./SendComponent.jsx";
import {
    Avatar,
    Image,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
    User,
    Link,
    Tooltip,
    useDisclosure,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    AvatarGroup,
    Chip,
    Textarea,
    Input,
    Autocomplete,
    AutocompleteItem,
} from "@heroui/react";
import TextoBienvenida from "./TextoBienvenida.jsx";

export const cardsData = [
    {
        id: 1,
        imageSrc: "src/assets/descarga (1).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        name: "Zoe Lang",
        description: "Product Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Naturaleza",
        title: "NaturalezaHoliday",
        likes: 475,
    },
    {
        id: 2,
        imageSrc: "src/assets/descarga (2).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026703d",
        name: "Tony Reichert",
        description: "Software Engineer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Deporte",
        title: "DeporteHoliday",
        likes: 4565,
    },
    {
        id: 3,
        imageSrc: "src/assets/descarga (3).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Arte",
        title: "ArteHoliday",
        likes: 45,
    },
    {
        id: 4,
        imageSrc: "src/assets/descarga (4).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Musica",
        title: "MusicaHoliday",
        likes: 4564,
    },
    {
        id: 5,
        imageSrc: "src/assets/descarga (5).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Tecnologia",
        title: "TecnologiaHoliday",
        likes: 456,
    },
    {
        id: 6,
        imageSrc: "src/assets/descarga (6).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Punk",
        title: "PunkHoliday",
        likes: 79,
    },
    {
        id: 7,
        imageSrc: "src/assets/descarga.jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Belleza",
        title: "BellezaHoliday",
        likes: 456,
    },
    {
        id: 8,
        imageSrc: "src/assets/Artist ~ Nibera.jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Manualidades",
        title: "ManualidadesHoliday",
        likes: 41,
    },
    {
        id: 9,
        imageSrc: "src/assets/MV4.jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Dark fantasy",
        title: "Dark fantasyHoliday",
        likes: 784,
    },
    {
        id: 10,
        imageSrc: "src/assets/VICTOR MOATTI.jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Aesthethic",
        title: "AesthethicHoliday",
        likes: 745,
    },
    {
        id: 11,
        imageSrc: "src/assets/descarga (7).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Programacion",
        title: "ProgramacionHoliday",
        likes: 745,
    },
    {
        id: 12,
        imageSrc: "src/assets/descarga (8).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Plantas",
        title: "PlantasHoliday",
        likes: 784,
    },
    {
        id: 13,
        imageSrc: "src/assets/descarga (9).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Oufits",
        title: "OufitsHoliday",
        likes: 321,
    },
    {
        id: 14,
        imageSrc: "src/assets/descarga (10).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Fotografia",
        title: "FotografiaHoliday",
        likes: 456,
    },
    {
        id: 15,
        imageSrc: "src/assets/descarga (11).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Naturaleza",
        title: "NaturalezaHoliday",
        likes: 79,
    },
    {
        id: 16,
        imageSrc: "src/assets/descarga24.jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Deporte",
        title: "DeporteHoliday",
        likes: 4565,
    },
    {
        id: 17,
        imageSrc: "src/assets/Instagram.jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Arte",
        title: "ArteHoliday",
        likes: 45,
    },
    {
        id: 18,
        imageSrc: "src/assets/ceeef.jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
        descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        topic: "Musica",
        title: "MusicaHoliday",
        likes: 4564,
    },
];

export const topicObject = [
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

const CardItem = ({ imageSrc, avatarSrc, name, description, descriptionImage, title, topic, likes }) => {
    const [liked, setLiked] = useState(false);

    const { isOpen: isOpenLogin, onOpen: onOpenLogin, onOpenChange: onOpenChangeLogin } = useDisclosure();

    const { isOpen: isOpenLogin2,
        onOpen: onOpenLogin2,
        onOpenChange: onOpenChangeLogin2
    } = useDisclosure();

    const { isOpen: isOpenLogin3,
        onOpen: onOpenLogin3,
        onOpenChange: onOpenChangeLogin3
    } = useDisclosure();

    const textareaRef = useRef(null);

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${Math.max(textarea.scrollHeight, 500)}px`;
        }
    };

    useEffect(() => {
        adjustHeight();
    }, [descriptionImage]);


    return (
        <Card isFooterBlurred className="w-full h-auto col-span-12 sm:col-span-7 rounded-2xl overflow-hidden">
            <CardHeader className="relative flex-col items-start">
                <div
                    className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                >
                    <img
                        src={imageSrc}
                        alt="Imagen"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" onClick={() => onOpenLogin2()}>
                        <EyeIcon className="w-10 h-10 text-white/80" />
                    </div>
                </div>
            </CardHeader>
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 flex justify-between items-center w-full p-3">
                <Chip className="bg-[#2EF2BB]" variant="faded">
                    <div className="flex items-center gap-2">
                        <HeartSolid className="size-6 text- black" />
                        {likes}
                    </div>
                </Chip>
                <Link
                    aria-current="page"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setLiked(!liked);
                    }}
                    className="hover:text-[#2EF2BB] ml-auto transition-all duration-300 mr-2"
                >
                    {liked ? <HeartSolid className="size-6 text-[#2EF2BB]" /> : <HeartOutline className="size-6 text-[#2EF2BB]" />}
                </Link>
                <Tooltip content="Compartir" className="text-[#2EF2BB] bg-black rounded-2xl ">
                    <Link aria-current="page" href="#" className="hover:text-[#2EF2BB] mr-2" onPress={() => onOpenLogin()}>
                        <ShareIcon className="size-6 text-[#2EF2BB]" />
                    </Link>
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
                                    Enviar imagen
                                </ModalHeader>
                                <ModalBody className="p-7">
                                    <SendComponent />
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>

                <Tooltip content="Modificar" className="text-[#2EF2BB] bg-black rounded-2xl">
                    <Link aria-current="page" className="hover:text-[#2EF2BB]" onPress={() => onOpenLogin3()}>
                        <PencilSquareIcon className="size-6 text-[#2EF2BB]" />
                    </Link>
                </Tooltip>

                <Modal
                    isOpen={isOpenLogin2}
                    onOpenChange={onOpenChangeLogin2}
                    className="bg-black text-white rounded-2xl w-full h-fit"
                    overlay
                >
                    <div className="fixed inset-0 backdrop-blur-xs z-50"></div>
                    <ModalContent className="relative z-60 w-4/6 max-w-[90%]">
                        {(onClose2) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1 bg-[#1A168C] text-2xl text-white">
                                    Detalles
                                </ModalHeader>
                                <ModalBody className="p-7">
                                    <div className="flex gap-4">
                                        <Image src={imageSrc} alt="Preview" className="w-full h-auto rounded-2xl" />
                                        <div>
                                            <p className="text-2xl font-medium">{title}</p>
                                            <p className="mb-10">{topic}</p>
                                            <User as="button" avatarProps={{ src: avatarSrc }} className="text-blue-100" description={description} name={name} />
                                            <Card>
                                                <CardBody>
                                                    <p>{descriptionImage}</p>
                                                </CardBody>
                                            </Card>
                                            <div className="absolute bottom-4 right-4 flex gap-4">
                                                <Chip className="bg-[#2EF2BB]" variant="faded">
                                                    <div className="flex items-center gap-2">
                                                        <HeartSolid className="size-6 text-black" />
                                                        <span className="text-black"> {likes} </span>
                                                    </div>
                                                </Chip>
                                                <Link
                                                    aria-current="page"
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setLiked(!liked);
                                                    }}
                                                    className="hover:text-[#2EF2BB] transition-all duration-300"
                                                >
                                                    {liked ? <HeartSolid className="size-6 text-[#2EF2BB]" /> : <HeartOutline className="size-6 text-[#2EF2BB]" />}
                                                </Link>
                                                <Tooltip content="Compartir" className="text-[#2EF2BB] bg-black rounded-2xl">
                                                    <Link aria-current="page" href="#" className="hover:text-[#2EF2BB]" onPress={() => onOpenLogin()}>
                                                        <ShareIcon className="size-6 text-[#2EF2BB]" />
                                                    </Link>
                                                </Tooltip>
                                            </div>

                                        </div>
                                    </div>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>

                <Modal
                    isOpen={isOpenLogin3}
                    onOpenChange={onOpenChangeLogin3}
                    className="bg-black text-white rounded-2xl w-full h-fit"
                    overlay
                >
                    <div className="fixed inset-0 backdrop-blur-xs z-50"></div>
                    <ModalContent className="relative z-60 w-4/6 max-w-[90%]">
                        {(onClose3) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1 bg-[#1A168C] text-2xl text-white">
                                    Modificar publicación
                                </ModalHeader>
                                <ModalBody className="p-7">
                                    <div className="flex gap-4">
                                        <Image src={imageSrc} alt="Preview" className="w-full h-auto rounded-2xl" />
                                        <div className="w-full">
                                            <Input
                                                type="Email"
                                                defaultValue={title}
                                                className="w-full px-4 py-2 bg-[#151320] text-white border
                                                border-gray-700 rounded-xl mb-5"
                                            />
                                            <Autocomplete className="w-full bg-[#151320] text-white border border-gray-700 
                                                rounded-xl mb-2" label="Selecciona un tema" defaultItems={topic} >
                                                {topicObject.map((topicObject) => (
                                                    <AutocompleteItem key={topicObject.id} className="bg-black text-white rounded-2xl" >{topicObject.name}</AutocompleteItem>
                                                ))}
                                            </Autocomplete>
                                            <User as="button" avatarProps={{ src: avatarSrc }} className="text-blue-100 mb-5" description={description} name={name} />
                                            <Textarea
                                                isClearable
                                                className="w- px-4 py-2 bg-[#151320] text-white border border-gray-700 
                                                rounded-xl"
                                                defaultValue={descriptionImage}
                                                label="Description"
                                                placeholder="Description"
                                                variant="bordered"
                                                onClear={() => console.log("textarea cleared")}
                                            />
                                            <div className="absolute bottom-4 right-4 flex gap-4">
                                                <Button color="primary" className="rounded-full bg-[#2EF2BB] text-black">Actualizar publicación</Button>
                                            </div>

                                        </div>
                                    </div>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>

            </CardFooter>
        </Card>
    );
};

export default function App() {
    const LikeButton = () => {
        const [liked, setLiked] = useState(false);

        return (
            <>
                <div className="min-h-screen bg-gradient-to-br from-[#04030D] from-[80%] via-[#0A062B] via-[90%] to-[#070540]">
                    <div className="p-5 md:p-10">
                        <div className="columns-1 gap-5 lg:gap-8 sm:columns-3 xl:columns-4 
                        [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
                            {cardsData.map((card) => (
                                <CardItem
                                    key={card.id}
                                    imageSrc={card.imageSrc}
                                    avatarSrc={card.avatarSrc}
                                    name={card.name}
                                    description={card.description}
                                    descriptionImage={card.descriptionImage}
                                    topic={card.topic}
                                    title={card.title}
                                    likes={card.likes} />
                            ))}
                        </div>
                    </div>
                </div>
                
            </>
        );
    };

    return <LikeButton />;
}