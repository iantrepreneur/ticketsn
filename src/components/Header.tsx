import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, Menu, Search, Ticket } from "lucide-react";
import { User } from "@/types/events";

interface HeaderProps {
  user: User;
  onMenuClick: () => void;
  onNotificationClick: () => void;
  onSearchClick: () => void;
  notificationCount?: number;
}

export const Header = ({ 
  user, 
  onMenuClick, 
  onNotificationClick, 
  onSearchClick,
  notificationCount = 0 
}: HeaderProps) => {
  return (
    <header className="bg-gradient-hero text-white shadow-senegal-lg relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22white%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M20%2020c0%205.5-4.5%2010-10%2010s-10-4.5-10-10%204.5-10%2010-10%2010%204.5%2010%2010zm10%200c0%205.5-4.5%2010-10%2010s-10-4.5-10-10%204.5-10%2010-10%2010%204.5%2010%2010z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative px-4 py-6">
        {/* Top navigation */}
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="text-white hover:bg-white/20"
          >
            <Menu className="w-6 h-6" />
          </Button>
          
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearchClick}
              className="text-white hover:bg-white/20"
            >
              <Search className="w-5 h-5" />
            </Button>
            
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={onNotificationClick}
                className="text-white hover:bg-white/20"
              >
                <Bell className="w-5 h-5" />
              </Button>
              {notificationCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-senegal-red text-white text-xs">
                  {notificationCount}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Welcome section */}
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12 ring-2 ring-white/30">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="bg-white/20 text-white font-semibold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <p className="text-white/80 text-sm">Bienvenue,</p>
            <h1 className="text-xl font-bold text-white">{user.name}</h1>
          </div>
          
          <div className="text-right">
            <div className="flex items-center gap-1 text-white/90">
              <Ticket className="w-4 h-4" />
              <span className="text-sm font-medium">Mes Billets</span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-4 text-center">
          <p className="text-white/90 text-sm italic">
            "Découvrez les meilleurs événements du Sénégal"
          </p>
        </div>
      </div>
    </header>
  );
};