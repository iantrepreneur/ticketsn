import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Event } from "@/types/events";
import { Calendar, MapPin, Users } from "lucide-react";

interface EventCardProps {
  event: Event;
  onBook: (event: Event) => void;
}

export const EventCard = ({ event, onBook }: EventCardProps) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short'
    });
  };

  const formatPrice = (price: number) => {
    if (price === 0) return 'Gratuit';
    return `${price.toLocaleString()} ${event.currency}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'concert': return '🎵';
      case 'sport': return '⚽';
      case 'culture': return '🎭';
      case 'theatre': return '🎪';
      default: return '🎉';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'concert': return 'bg-senegal-orange text-white';
      case 'sport': return 'bg-senegal-green text-white';
      case 'culture': return 'bg-senegal-yellow text-white';
      case 'theatre': return 'bg-primary text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="group overflow-hidden hover:shadow-senegal-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden bg-gradient-primary">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {event.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-senegal-yellow text-black font-semibold">
                ⭐ À la une
              </Badge>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <Badge className={getCategoryColor(event.category)}>
              {getCategoryIcon(event.category)} {event.category}
            </Badge>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="font-bold text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          {event.artist && (
            <p className="text-sm text-muted-foreground font-medium">
              par {event.artist}
            </p>
          )}
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4 text-senegal-orange" />
            <span>{formatDate(event.date)} • {event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-senegal-green" />
            <span className="truncate">{event.venue}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4 text-senegal-yellow" />
            <span>
              {Object.values(event.seating).reduce((total, seat) => total + seat.available, 0)} places disponibles
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">À partir de</p>
            <p className="text-xl font-bold text-senegal-orange">
              {formatPrice(event.price)}
            </p>
          </div>
          <Button 
            variant="event" 
            size="sm"
            onClick={() => onBook(event)}
            className="shadow-senegal-sm hover:shadow-senegal-md"
          >
            Réserver
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};