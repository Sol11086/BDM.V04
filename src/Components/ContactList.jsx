// codigo que fetchea contactos del frontend
import React, { useEffect, useState } from "react";
import { useUsers } from "../hooks/useUsers.jsx";
import { useUserContext } from "../context/UserProvider";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/16/solid";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Link,
  Badge,
} from "@heroui/react";
import { useNavigate } from 'react-router-dom';

export const columns = [
  { name: "My contacts", uid: "name" },
  { name: "", uid: "actions" },
];

export default function ContactList({ onChatRecipient }) {
  const { getContacts } = useUsers();
  const { selectedUser } = useUserContext();
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedUser) {
      //console.log("selectedUser is set:", selectedUser.id_usuarios);
       const fetchContacts = async () => {
        try {
          const res = await getContacts(selectedUser.id_usuarios);
          //console.log("Fetched contacts:", res);
          setContacts(res.contactos);
        } catch (err) {
          console.error("Error fetching contacts:", err);
        }
      };
  
      fetchContacts(); 
    } else {
      console.log("No hay usuario");
    }
  }, [selectedUser]);
 
  const handleClick = (user) => {
    onChatRecipient(user);
    //console.log("Clicked user:", user)

  };

  const renderCell = (user, columnKey) => {
    //console.log("Rendering user:", user);

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{
              radius: "rounded",
              src: `data:image/png;base64,${user.foto_perfil}` || "https://i.pravatar.cc/150",
            }}
            name={user.contacto}
            //description={user.contacto}
            className="rounded mb-6 text-center"
            rounded
          />
        );
      case "actions":
        return (
          <div className="flex justify-center items-center">
            <Badge color="danger" content="5" shape="circle" className="bg-rose-500 border-none text-black">
              <Link onClick={() => handleClick(user)} className="hover:text-[#2EF2BB]">
                <ChatBubbleBottomCenterIcon className="size-6 text-[#2EF2BB]" />
              </Link>
            </Badge>
          </div>
        );
      default:
        return user[columnKey];
    }
  };

  return (
    <Table aria-label="Contacts table" className="h-screen bg-black p-0">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            className="text-blue-50 text-center"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={contacts}>
        {(item) => (
          <TableRow key={item.contacto}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
