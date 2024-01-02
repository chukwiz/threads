import { formatDateString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ITCard {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    id: string;
    name: string;
    image: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}

const ThreadCard = ({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
  isComment,
}: ITCard) => {
  return (
    <article className={`flex w-full flex-col rounded-xl ${isComment ? " px-0 xs:px-7" : "bg-dark-2 p-7"}`}>
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link
              href={`/profile/${author.id}`}
              className=" relative h-11 w-11"
            >
              <Image
                src={author.image}
                alt="profile_image"
                fill
                className=" cursor-pointer rounded-full"
              />
            </Link>

            <div className=" thread-card_bar" />
          </div>

          <div className=" flex flex-col w-full">
            <Link href={`/profile/${author.id}`} className=" w-fit">
              <h4 className=" cursor-pointer text-base-semibold text-light-1">
                {" "}
                {author.name}{" "}
              </h4>
            </Link>

            <p className=" mt-2 text-small-regular text-light-2"> {content} </p>
            <div className={`flex flex-col gap-3 mt-5 ${isComment && " mb-10"}`}>
              <div className=" flex gap-3.5">
                <Image
                  alt="heart"
                  width={24}
                  height={24}
                  className=" cursor-pointer object-contain"
                  src="/assets/heart-gray.svg"
                />

                <Link href={`/thread/${id}`}>
                  <Image
                    alt="reply"
                    width={24}
                    height={24}
                    className=" cursor-pointer object-contain"
                    src="/assets/reply.svg"
                  />
                </Link>

                <Image
                  alt="repost"
                  width={24}
                  height={24}
                  className=" cursor-pointer object-contain"
                  src="/assets/repost.svg"
                />

                <Image
                  alt="share"
                  width={24}
                  height={24}
                  className=" cursor-pointer object-contain"
                  src="/assets/share.svg"
                />
              </div>

              {isComment && comments.length > 0 && (
                <Link href={`/thread/${id}`}>
                  <p className="mt-1 text-subtle-medium text-gray-1">
                    {comments.length} replies
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* TODO: Delete thread */}
        {/* TODO: Show comment logos */}
      </div>
      {!isComment && community && (
        <Link href={`/communities/${community.id}`} className=" mt-5 flex items-center">
          <p className=" text-subtle-medium text-gray-1">
            {formatDateString(createdAt)} {" "} - {community.name} Community
          </p>
          <Image src={community.image} alt={community.name} width={14} height={14} className=" ml-1 rounded-full object-cover" />
        </Link>
      )}
    </article>
  );
};

export default ThreadCard;
