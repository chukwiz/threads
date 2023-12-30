"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface IUser {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: "User" | "Community";
}

const UserCard = ({ id, name, username, imgUrl, personType }: IUser) => {

    const router = useRouter()
  return <article className=" user-card">
    <div className="user-card_avatar">
        <Image src={imgUrl} alt="logo" width={48} height={48} className=" rounded-full" />
        <div className="fex-1 text-ellipsis">
            <h4 className=" text-base-semibold text-light-1">{name}</h4>
            <p className=" text-small-medium text-gray-1"></p>
        </div>
    </div>

    <Button className=" user-card_btn" onClick={() => router.push(`/profile/${id}`)} >
        View
    </Button>
  </article>;
};

export default UserCard;