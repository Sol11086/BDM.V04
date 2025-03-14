import React, { useState } from "react";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { ShareIcon } from "@heroicons/react/16/solid";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
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
} from "@heroui/react";
import TextoBienvenida from "./TextoBienvenida.jsx";

export const cardsData = [
    {
        id: 1,
        imageSrc: "src/assets/descarga (1).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        name: "Zoe Lang",
        description: "Product Designer",
    },
    {
        id: 2,
        imageSrc: "src/assets/descarga (2).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026703d",
        name: "Tony Reichert",
        description: "Software Engineer",
    },
    {
        id: 3,
        imageSrc: "src/assets/descarga (3).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 4,
        imageSrc: "src/assets/descarga (4).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 5,
        imageSrc: "src/assets/descarga (5).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 6,
        imageSrc: "src/assets/descarga (6).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 7,
        imageSrc: "src/assets/descarga.jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 8,
        imageSrc: "src/assets/Artist ~ Nibera.jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 9,
        imageSrc: "src/assets/MV4.jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 10,
        imageSrc: "src/assets/VICTOR MOATTI.jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 11,
        imageSrc: "src/assets/descarga (7).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 12,
        imageSrc: "src/assets/descarga (8).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 13,
        imageSrc: "src/assets/descarga (9).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 14,
        imageSrc: "src/assets/descarga (10).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 15,
        imageSrc: "src/assets/descarga (11).jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 16,
        imageSrc: "src/assets/descarga24.jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 17,
        imageSrc: "src/assets/Instagram.jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
    {
        id: 18,
        imageSrc: "src/assets/ceeef.jpeg",
        avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        name: "Jane Fisher",
        description: "UI/UX Designer",
    },
];

const CardItem = ({ imageSrc, avatarSrc, name, description }) => {
    const [liked, setLiked] = useState(false);

    const { isOpen: isOpenLogin, onOpen: onOpenLogin, onOpenChange: onOpenChangeLogin } = useDisclosure();

    return (
        <Card isFooterBlurred className="w-full h-auto col-span-12 sm:col-span-7 rounded-2xl overflow-hidden">
            <CardHeader className="relative flex-col items-start">
                <Image removeWrapper alt="Background" className="w-full h-auto object-cover rounded-2xl" src={imageSrc} />
            </CardHeader>
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 flex justify-between items-center w-full p-3">
                <AvatarGroup max={3} className="bg-gray-900 rounded-4xl text-white">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d"  className="w-5 h-5" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d"   className="w-5 h-5" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d"  className="w-5 h-5"/>
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d"  className="w-5 h-5"/>
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d"  className="w-5 h-5"/>
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c"  className="w-5 h-5"/>
                </AvatarGroup>
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
                    <Link aria-current="page" className="hover:text-[#2EF2BB]">
                        <PencilSquareIcon className="size-6 text-[#2EF2BB]" />
                    </Link>
                </Tooltip>
            </CardFooter>
        </Card>
    );
};

export default function App() {
    const LikeButton = () => {
        const [liked, setLiked] = useState(false);

        return (
            <>
                <div className="p-5 md:p-10">
                    <div className="columns-1 gap-5 lg:gap-8 sm:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
                        {cardsData.map((card) => (
                            <CardItem key={card.id} imageSrc={card.imageSrc} avatarSrc={card.avatarSrc} name={card.name} description={card.description} />
                        ))}
                    </div>
                </div>
            </>
        );
    };

    return <LikeButton />;
}