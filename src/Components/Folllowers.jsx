import React from "react";
import TextoBienvenida from "./TextoBienvenida.jsx";
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
} from "@heroui/react"

const UserCard = ({ username, posts, imageUrl }) => {
    return (
        <Card className="py-4 bg-black text-blue-100 rounded-2xl mb-10">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{username}</p>
                <small className="text-default-500">{posts} Publicaciones</small>
            </CardHeader>
            <CardBody className="overflow-visible items-center">
                <Image alt="Card background" className="object-cover rounded-xl w-64 h-64" src={imageUrl} />
            </CardBody>
            <div className="flex justify-center items-center gap-10 p-2">
                <Tooltip content="Abrir chat" className="text-[#2EF2BB] bg-black rounded-2xl">
                    <Link aria-current="page" className="hover:text-[#2EF2BB]">
                        <ChatBubbleBottomCenterIcon className="size-6 text-[#2EF2BB]" />
                    </Link>
                </Tooltip>
                <Tooltip content="Bloquear" className="text-rose-500 bg-black rounded-2xl">
                    <Link aria-current="page" className="hover:text-[#2EF2BB]" >
                        <NoSymbolIcon className="size-6 text-rose-500" />
                    </Link>
                </Tooltip>
            </div>
        </Card>
    );
};

export default function App() {

    const users = [
        {   
            id: 1 ,
            username: "User_edew_88",
            posts: 12,
            imageUrl: "src/assets/fotoPerfil1.jpeg"
        },
        {
            id: 2 ,
            username: "User_john_doe",
            posts: 5,
            imageUrl: "src/assets/fotoPerfil2.jpeg"
        },
        {
            id: 3 ,
            username: "User_jane_smith",
            posts: 56,
            imageUrl: "src/assets/fotoPerfil3.jpeg"
        },
        {
            id: 4 ,
            username: "User_wefwefe",
            posts: 4,
            imageUrl: "src/assets/fotxd.jpeg"
        },
        {
            id: 5 ,
            username: "User_rtu",
            posts: 44,
            imageUrl: "src/assets/Instagram.jpeg"
        },
        {
            id: 6 ,
            username: "User_wefe",
            posts: 8,
            imageUrl: "src/assets/stray kids i_n.jpeg"
        },
        {
            id: 7 ,
            username: "User_4reg",
            posts: 85,
            imageUrl: "src/assets/@TrashySoda _ Funny profile pictures, Stupid memes, Mood pics.jpeg"
        },
        {
            id: 8 ,
            username: "User_wefw4",
            posts: 36,
            imageUrl: "src/assets/ceeef.jpeg"
        },
    ];

    return (
        <>
            <div className="p-5 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 justify-center items-start">
                    {users.map((user, index) => (
                        <UserCard key={index} {...user} />
                    ))}
                </div>
            </div>

        </>

    );
}