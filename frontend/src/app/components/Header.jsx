"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Bell,
  Home,
  LogOut,
  Menu,
  MessageCircle,
  Moon,
  Search,
  Sun,
  Users,
  Video,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();
  return (
    <header className="bg-white dark:bg-[rgb(36,37,38)] text-foreground shadow-md h-16 fixed top-0 left-0 right-0 z-50 p-2">
      <div className="mx-auto flex justify-between items-center p-2">
        <div className="flex items-center gap-2 md:gap-4">
          <Image
            src="/images/Facebook_Logo.png"
            width={40}
            height={40}
            alt="facebook_logo"
            // onClick={() => handleNavigation("/")}
            className="cursor-pointer"
          />
          <div className="relative">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 " />
                <Input
                  className="pl-8 w-40 md:w-64 h-10 bg-gray-100 dark:bg-[rgb(58,59,60)] rounded-full"
                  placeholder="search facebook.."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchOpen(true)}
                />
              </div>
              {isSearchOpen && (
                <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg mt-1 z-50 ">
                  <div className="p-2">
                    {/* {filterUsers.length > 0 ? (
                      filterUsers.map((user) => (
                        <div
                          className="flex items-center space-x-8 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer"
                          key={user._id}
                          onClick={() => handleUserClick(user?._id)}
                        >
                          <Search className="absolute text-sm  text-gray-400 " />
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              {user?.profilePicture ? (
                                <AvatarImage
                                  src={user?.profilePicture}
                                  alt={user?.username}
                                />
                              ) : (
                                <AvatarFallback>
                                  {userPlaceholder}
                                </AvatarFallback>
                              )}
                            </Avatar>
                            <span>{user?.username}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="p-2 text-gray-500">No user Found</div>
                      </>
                    )} */}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        <nav className="hidden md:flex justify-around w-[40%] max-w-md">
          {[
            { icon: Home, path: "/", name: "home" },
            { icon: Video, path: "/video-feed", name: "video" },
            { icon: Users, path: "/friends-list", name: "friends" },
          ].map(({ icon: Icon, path, name }) => (
            <Button
              key={name}
              variant="ghost"
              size="icon"
              // ${
              //   activeTab === name ? "text-blue-600" : " "
              // }
              className={`relative cursor-pointer text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-transparent  `}
              onClick={() => handleNavigation(path, name)}
            >
              <Icon />
            </Button>
          ))}
        </nav>
        <div className="flex space-x-2 md:space-x-4 items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-ray-600 cursor-pointer"
          >
            <Menu />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:block text-gray-600 cursor-pointer pl-2.5"
          >
            <Bell />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:block text-gray-600 cursor-pointer pl-2.5"
          >
            <MessageCircle />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full cursor-pointer"
              >
                <Avatar className="h-8 w-8 mr-2">
                  {/* {user?.profilePicture ? (
                    <AvatarImage
                      src={user?.profilePicture}
                      alt={user?.username}
                    />
                  ) : (
                    <AvatarFallback className="dark:bg-gray-400">
                      {userPlaceholder}
                    </AvatarFallback>
                  )} */}
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 z-50" align="end">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center ">
                    <Avatar className="h-8 w-8 mr-2">
                      {/* {user?.profilePicture ? (
                        <AvatarImage
                          src={user?.profilePicture}
                          alt={user?.username}
                        />
                      ) : (
                        <AvatarFallback className="dark:bg-gray-400">
                          {userPlaceholder}
                        </AvatarFallback>
                      )} */}
                    </Avatar>
                    <div className="">
                      <p className="text-sm font-medium leading-none">
                        {/* {user?.username} */}
                      </p>
                      <p className="text-xs mt-2 text-gray-600 leading-none">
                        {/* {user?.email} */}
                      </p>
                    </div>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                // onClick={() => handleNavigation(`/user-profile/${user?._id}`)}
              >
                <Users /> <span className="ml-2">Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <MessageCircle /> <span className="ml-2">Messages</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="cursor-pointer"
              >
                {theme === "light" ? (
                  <>
                    <Moon className="mr-2" />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="mr-2" />
                    <span>Light Mode</span>
                  </>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                // onClick={handleLogout}
              >
                <LogOut /> <span className="ml-2">Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
