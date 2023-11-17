import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import Avatar from "./avatar";
import { useAuth } from "@/app/lib/authProvider";
import { useRouter } from "next/router";

const UserMenu = () => {
  const { userName, logout, pictureUrl } = useAuth(); 
  const router = useRouter();

  const handleOpenProfile = () => {
    router.push("/profile");
  }
  const handleLogout = () => {
    logout();
  }

  return (
    <div className="relative inline-block text-right">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button onClick={() => logout()}>
            <Avatar width={40} height={40} userName={userName} pictureUrl={pictureUrl} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={handleOpenProfile}>
              Profile
            </DropdownMenuItem>            
          </DropdownMenuGroup>
          <DropdownMenuItem onClick={handleLogout}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;