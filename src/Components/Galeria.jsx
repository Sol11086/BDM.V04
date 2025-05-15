import React, { useState } from "react";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { ShareIcon } from "@heroicons/react/16/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import SendComponent from "./SendComponent.jsx";
import Filter from "./Filters.jsx"
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
  Input,
} from "@heroui/react";
import TextoBienvenida from "./TextoBienvenida.jsx";
import { title } from "framer-motion/client";

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
  },
  {
    id: 4,
    imageSrc: "src/assets/descarga (4).jpeg",
    avatarSrc: "src/assets/@TrashySoda _ Funny profile pictures, Stupid memes, Mood pics.jpeg",
    name: "Carlos Chark",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Musica",
    title: "MusicaHoliday",
  },
  {
    id: 5,
    imageSrc: "src/assets/descarga (5).jpeg",
    avatarSrc: "src/assets/fotoPerfil1.jpeg",
    name: "Mariela Roro",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Tecnologia",
    title: "TecnologiaHoliday",
  },
  {
    id: 6,
    imageSrc: "src/assets/descarga (6).jpeg",
    avatarSrc: "src/assets/fotoPerfil2.jpeg",
    name: "Jose Jesus",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Punk",
    title: "PunkHoliday",
  },
  {
    id: 7,
    imageSrc: "src/assets/descarga.jpeg",
    avatarSrc: "src/assets/fotoPerfil3.jpeg",
    name: "Jane Fisher",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Belleza",
    title: "BellezaHoliday",
  },
  {
    id: 8,
    imageSrc: "src/assets/Artist ~ Nibera.jpeg",
    avatarSrc: "src/assets/fotxd.jpeg",
    name: "Jane Fisher",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Manualidades",
    title: "ManualidadesHoliday",
  },
  {
    id: 9,
    imageSrc: "src/assets/MV4.jpeg",
    avatarSrc: "src/assets/stray kids i_n.jpeg",
    name: "Jane Fisher",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Dark fantasy",
    title: "Dark fantasyHoliday",
  },
  {
    id: 10,
    imageSrc: "src/assets/VICTOR MOATTI.jpeg",
    avatarSrc: "src/assets/fotoPerfil2.jpeg",
    name: "Jane Fisher",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Aesthethic",
    title: "AesthethicHoliday",
  },
  {
    id: 11,
    imageSrc: "src/assets/descarga (7).jpeg",
    avatarSrc: "src/assets/stray kids i_n.jpeg",
    name: "Jane Fisher",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Programacion",
    title: "ProgramacionHoliday",
  },
  {
    id: 12,
    imageSrc: "src/assets/descarga (8).jpeg",
    avatarSrc: "src/assets/MV4.jpeg",
    name: "Jane Fisher",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Plantas",
    title: "PlantasHoliday",
  },
  {
    id: 13,
    imageSrc: "src/assets/descarga (9).jpeg",
    avatarSrc: "src/assets/VICTOR MOATTI.jpeg",
    name: "Jane Fisher",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Oufits",
    title: "OufitsHoliday",
  },
  {
    id: 14,
    imageSrc: "src/assets/descarga (10).jpeg",
    avatarSrc: "src/assets/Instagram.jpeg",
    name: "Jane Fisher",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Fotografia",
    title: "FotografiaHoliday",
  },
  {
    id: 15,
    imageSrc: "src/assets/descarga (11).jpeg",
    avatarSrc: "src/assets/descarga (5).jpeg",
    name: "Jane Fisher",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Naturaleza",
    title: "NaturalezaHoliday",
  },
  {
    id: 16,
    imageSrc: "src/assets/descarga24.jpeg",
    avatarSrc: "src/assets/fotoPerfil1.jpeg",
    name: "Jane Fisher",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Deporte",
    title: "DeporteHoliday",
  },
  {
    id: 17,
    imageSrc: "src/assets/Instagram.jpeg",
    avatarSrc: "src/assets/fotxd.jpeg",
    name: "Jane Fisher",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Arte",
    title: "ArteHoliday",
  },
  {
    id: 18,
    imageSrc: "src/assets/ceeef.jpeg",
    avatarSrc: "src/assets/@TrashySoda _ Funny profile pictures, Stupid memes, Mood pics.jpeg",
    name: "Jane Fisher",
    description: "UI/UX Designer",
    descriptionImage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topic: "Musica",
    title: "MusicaHoliday",
  },
];

const CardItem = ({ imageSrc, avatarSrc, name, description, descriptionImage, title, topic }) => {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const { isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onOpenChange: onOpenChangeLogin
  } = useDisclosure();

  const { isOpen: isOpenLogin2,
    onOpen: onOpenLogin2,
    onOpenChange: onOpenChangeLogin2
  } = useDisclosure();

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
        <Popover showArrow placement="bottom">
          <PopoverTrigger>
            <User as="button" avatarProps={{ src: avatarSrc }} className="text-blue-100" description={description} name={name} />
          </PopoverTrigger>
          <PopoverContent className="p-1">
            <UserTwitterCard />
          </PopoverContent>
        </Popover>
        <Link
          aria-current="page"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
          }}
          className="hover:text-[#2EF2BB] ml-auto transition-all duration-300 mr-4"
        >
          {liked ? <HeartSolid className="size-6 text-[#2EF2BB]" /> : <HeartOutline className="size-6 text-[#2EF2BB]" />}
        </Link>
        <Tooltip content="Compartir" className="text-[#2EF2BB] bg-black rounded-2xl">
          <Link aria-current="page" href="#" className="hover:text-[#2EF2BB]" onPress={() => onOpenLogin()}>
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

        <Modal
          isOpen={isOpenLogin2}
          onOpenChange={onOpenChangeLogin2}
          className="bg-black text-white rounded-2xl w-full h-fit"
          overlay
        >
          <div className="fixed inset-0 backdrop-blur-xs z-50"></div>
          <ModalContent className="relative z-60 w-4/6 max-w-[90%]">
            {(onClose) => (
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

      </CardFooter>
    </Card>
  );
};

export const UserTwitterCard = () => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card className="max-w-[300px] border-none bg-black text-white" shadow="none">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-500">@zoeylang</h5>
          </div>
        </div>
        <Button
          className={`${isFollowed
            ? "bg-rose-500 text-white border-rose-600"
            : "bg-indigo-500 text-white border-indigo-600"
            }`}
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onClick={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px text-default-500">
          Full-stack developer, @hero_ui lover she/her
          <span aria-label="confetti" role="img">
            🎉
          </span>
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-600 text-small">4</p>
          <p className=" text-default-500 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-600 text-small">97.1K</p>
          <p className="text-default-500 text-small">Followers</p>
        </div>
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
          <Filter />
          <div className="columns-1 gap-5 lg:gap-8 sm:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
            {cardsData.map((card) => (
              <CardItem key={card.id}
                imageSrc={card.imageSrc}
                avatarSrc={card.avatarSrc}
                name={card.name}
                description={card.description}
                descriptionImage={card.descriptionImage}
                title={card.title}
                topic={card.topic} />
            ))}
          </div>
        </div>
      </div>
        
      </>
    );
  };

  return <LikeButton />;
}