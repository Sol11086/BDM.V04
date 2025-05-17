import React, { useState } from "react";
import TextoBienvenida from "./TextoBienvenida.jsx";
import Chat from "./Chat.jsx";
import { Bars3Icon } from "@heroicons/react/16/solid";
import ContactList from "./ContactList.jsx";
import { UserIcon } from '@heroicons/react/24/solid';
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/16/solid";
import { NoSymbolIcon } from "@heroicons/react/16/solid";
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
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader
} from "@heroui/react"

const UserCard = ({ username, posts, imageUrl, onChatClick }) => {
    const [isBlocked, setIsBlocked] = useState(false);

    return (
        <div className="relative">
            <Card className="py-4 bg-[#0A062B] text-blue-100 rounded-2xl">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">{username}</p>
                    <small className="text-default-500">{posts} Publicaciones</small>
                </CardHeader>
                <CardBody className="overflow-visible items-center">
                    <Image alt="Card background" className="object-cover rounded-xl w-64 h-64" src={imageUrl} />
                </CardBody>
                <div className="flex justify-center items-center gap-10 p-2">
                    <Tooltip content="Abrir chat" className="text-[#2EF2BB] bg-black rounded-2xl">
                        <Link
                            aria-current="page"
                            className="hover:text-[#2EF2BB]"
                            onClick={() => onChatClick({ username, imageUrl })}
                        >
                            <ChatBubbleBottomCenterIcon className="size-6 text-[#2EF2BB]" />
                        </Link>
                    </Tooltip>

                    <Popover placement="right" class="bg-black text-white rounded-3xl">
                        <PopoverTrigger>
                            <Link aria-current="page" className="hover:text-rose-500">
                                <NoSymbolIcon className="size-6 text-rose-500" />
                            </Link>
                        </PopoverTrigger>
                        <PopoverContent>
                            {(titleProps) => (
                                <div className="px-2 py-2 text-white">
                                    <h3 className="text-sm font-bold mb-2" {...titleProps}>
                                        ¿Bloquear contacto?
                                    </h3>
                                    <p className="text-xs mb-2">¿Estás seguro de que deseas bloquear a <span className="font-semibold">{username}</span>?</p>
                                    <div className="flex justify-end gap-2">
                                        <Button size="sm" variant="light" className="text-white bg-gray-700 rounded-full" onClick={() => setIsBlocked(false)}>
                                            Cancelar
                                        </Button>
                                        <Button size="sm" className="bg-rose-500 text-white rounded-full" onClick={() => setIsBlocked(true)}>
                                            Bloquear
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </PopoverContent>
                    </Popover>
                </div>
            </Card>

            {isBlocked && (
                <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-sm rounded-2xl flex flex-col justify-center items-center">
                    <Popover placement="top" class="bg-black text-white rounded-3xl">
                        <PopoverTrigger>
                            <Link>
                                <NoSymbolIcon className="w-14 h-14 text-rose-500 hover:text-rose-400 transition" />
                            </Link>
                        </PopoverTrigger>
                        <PopoverContent>
                            {(titleProps) => (
                                <div className="px-2 py-2 text-white">
                                    <h3 className="text-sm font-bold mb-2" {...titleProps}>
                                        ¿Desbloquear contacto?
                                    </h3>
                                    <p className="text-xs mb-2">¿Deseas desbloquear a <span className="font-semibold">{username}</span>?</p>
                                    <div className="flex justify-center gap-2">
                                        <Button size="sm" className="bg-indigo-500 text-white  rounded-full" onClick={() => setIsBlocked(false)}>
                                            Desbloquear
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </PopoverContent>
                    </Popover>
                    <p className="text-white mt-2 text-sm font-semibold">Usuario bloqueado</p>
                </div>
            )}
        </div>
    );
};




export default function Folllowers() {

    const [isChat, setIsChat] = useState(false);

    const [chatRecipient, setChatRecipient] = React.useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleChatClick = (user) => {
        setSelectedUser(user);
        setIsChat(true);
        setIsDrawerOpen(true);
    };

    const handleClose = () => {
        setIsDrawerOpen(false);
        setSelectedUser(null);
    };


    const handleSelectUser = (user) => {
        setChatRecipient(user);
        setIsChat(true);
    };

    const users = [
        {
            id: 1,
            username: "User_edew_88",
            posts: 12,
            imageUrl: "src/assets/fotoPerfil1.jpeg"
        },
        {
            id: 2,
            username: "User_john_doe",
            posts: 5,
            imageUrl: "src/assets/fotoPerfil2.jpeg"
        },
        {
            id: 3,
            username: "User_jane_smith",
            posts: 56,
            imageUrl: "src/assets/fotoPerfil3.jpeg"
        },
        {
            id: 4,
            username: "User_wefwefe",
            posts: 4,
            imageUrl: "src/assets/fotxd.jpeg"
        },
        {
            id: 5,
            username: "User_rtu",
            posts: 44,
            imageUrl: "src/assets/Instagram.jpeg"
        },
        {
            id: 6,
            username: "User_wefe",
            posts: 8,
            imageUrl: "src/assets/stray kids i_n.jpeg"
        },
        {
            id: 7,
            username: "User_4reg",
            posts: 85,
            imageUrl: "src/assets/@TrashySoda _ Funny profile pictures, Stupid memes, Mood pics.jpeg"
        },
        {
            id: 8,
            username: "User_wefw4",
            posts: 36,
            imageUrl: "src/assets/ceeef.jpeg"
        },
    ];

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-[#04030D] via-[#0A062B] to-[#070540]">
                <div className="p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 justify-center items-start">
                        {users.map((user, index) => (
                            <UserCard
                                key={index}
                                {...user}
                                onChatClick={handleChatClick}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Drawer isOpen={isDrawerOpen} onClose={handleClose} style={{ backgroundColor: "rgba(9, 7, 43)" }}>
                <DrawerContent>
                    <DrawerHeader className="flex flex-col gap-1">
                        <Link className="hover:text-[#2EF2BB]" onClick={() => setIsChat(false)}>
                            <Bars3Icon className="size-6 text-[#2EF2BB]" />
                        </Link>
                    </DrawerHeader>
                    <DrawerBody>
                        {isChat ? (
                            <Chat user={chatRecipient} />
                        ) : (
                            <ContactList onChatRecipient={handleSelectUser} />
                        )}
                    </DrawerBody>
                    <DrawerFooter>
                        <Button color="danger" variant="light" onClick={handleClose} className="bg-rose-500 rounded-full text-blue-50">
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>

    );
}