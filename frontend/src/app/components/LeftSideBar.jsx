"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  Home,
  LogOut,
  MessageCircle,
  User,
  Users,
  Video,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const router = useRouter();

  return (
    <aside
      // ${
      //     isSidebarOpen
      //       ? "translate-x-0 bg-white dark:bg-[rgb(36,37,38)] shadow-lg "
      //       : " -translate-x-full"
      //   } ${isSidebarOpen ? "md:hidden" : ""}
      className={`fixed top-16 left-0 h-full w-64 p-4 transform transition-transform duration-200 ease-in-out md:translate-x-0 flex flex-col z-50 md:z-0  md:bg-transparent md:shadow-none`}
    >
      <div className="flex flex-col h-full overflow-y-auto">
        <nav className="space-y-4 flex-grow">
          <div
            className="flex items-center space-x-2 cursor-pointer "
            // onClick={() => handleNavigation(`/user-profile/${user?._id}`)}
          >
            <Avatar className="h-10 w-10">
              <AvatarFallback className="dark:bg-gray-400">D</AvatarFallback>
              {/* {user?.profilePicture ? (
                <AvatarImage src={user?.profilePicture} alt={user?.username} />
              ) : (
                <AvatarFallback className="dark:bg-gray-400">
                  {userPlaceholder}
                </AvatarFallback>
              )} */}
            </Avatar>
            <span className="font-semibold">user?.username</span>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <Home className="mr-4" /> Home
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
            // onClick={() => handleNavigation("/friends-list")}
          >
            <Users className="mr-4" /> Friends
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
            // onClick={() => handleNavigation("/video-feed")}
          >
            <Video className="mr-4" /> Video
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
            // onClick={() => handleNavigation(`/user-profile/${user?._id}`)}
          >
            <User className="mr-4" /> Profile
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
          >
            <MessageCircle className="mr-4" /> Messages
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
          >
            <Bell className="mr-4" /> Notification
          </Button>
        </nav>

        <div className="mb-16">
          <Separator className="my-4" />
          <div
            className="flex items-center space-x-2 mb-4 cursor-pointer "
            // onClick={() => handleNavigation(`/user-profile/${user?._id}`)}
          >
            <Avatar className="h-10 w-10">
              {/* {user?.profilePicture ? (
                <AvatarImage src={user?.profilePicture} alt={user?.username} />
              ) : (
                <AvatarFallback className="dark:bg-gray-400">
                  {userPlaceholder}
                </AvatarFallback>
              )} */}
            </Avatar>
            {/* <span className="font-semibold">{user?.username}</span> */}
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <Button
              variant="ghost"
              className="cursor-pointer  "
              //   onClick={handleLogout}
            >
              <LogOut /> <span className=" font-bold text-md">Logout</span>
            </Button>
            <p>Privacy · Terms · Advertising ·</p>
            <p>· Meta © 2024</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSideBar;
