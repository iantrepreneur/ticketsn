import { Event } from "@/types/events";
import { EventCard } from "./EventCard";
import { Star } from "lucide-react";

interface FeaturedEventsProps {
  events: Event[];
  onBookEvent: (event: Event) => void;
}

export const FeaturedEvents = ({ events, onBookEvent }: FeaturedEventsProps) => {
  const featuredEvents = events.filter(event => event.featured);

  if (featuredEvents.length === 0) {
    return null;
  }

  return (
    <section className="px-4 py-6 bg-gradient-to-br from-card-soft to-background">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-gradient-primary rounded-lg">
          <Star className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Événements à la une
          </h2>
          <p className="text-sm text-muted-foreground">
            Les incontournables de la saison
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onBook={onBookEvent}
          />
        ))}
      </div>
    </section>
  );
};