import { useState, useMemo } from "react";
import { toast } from "sonner";
import { Header } from "@/components/Header";
import { CategoryFilter } from "@/components/CategoryFilter";
import { FeaturedEvents } from "@/components/FeaturedEvents";
import { EventCard } from "@/components/EventCard";
import { senegaleseEvents, eventCategories } from "@/data/events";
import { Event, User } from "@/types/events";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock user data
  const currentUser: User = {
    id: '1',
    name: 'Aminata Diallo',
    phone: '+221 77 123 45 67',
    email: 'aminata.diallo@email.com',
    avatar: undefined
  };

  // Filter events based on selected category
  const filteredEvents = useMemo(() => {
    if (selectedCategory === 'all') {
      return senegaleseEvents;
    }
    return senegaleseEvents.filter(event => event.category === selectedCategory);
  }, [selectedCategory]);

  // Calculate event counts for each category
  const eventCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: senegaleseEvents.length
    };
    
    eventCategories.forEach(category => {
      if (category.id !== 'all') {
        counts[category.id] = senegaleseEvents.filter(
          event => event.category === category.id
        ).length;
      }
    });
    
    return counts;
  }, []);

  const handleBookEvent = (event: Event) => {
    toast.success(`Réservation initiée pour "${event.title}"`, {
      description: `${event.venue} • ${new Date(event.date).toLocaleDateString('fr-FR')}`,
      action: {
        label: 'Voir les détails',
        onClick: () => {
          toast.info('Navigation vers les détails de l\'événement');
        }
      }
    });
  };

  const handleMenuClick = () => {
    toast.info('Menu de navigation', {
      description: 'Mes billets, Paramètres, À propos...'
    });
  };

  const handleNotificationClick = () => {
    toast.info('Notifications', {
      description: 'Nouveaux événements et rappels de vos réservations'
    });
  };

  const handleSearchClick = () => {
    toast.info('Recherche d\'événements', {
      description: 'Trouvez vos événements favoris par nom, lieu ou artiste'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with user info and navigation */}
      <Header
        user={currentUser}
        onMenuClick={handleMenuClick}
        onNotificationClick={handleNotificationClick}
        onSearchClick={handleSearchClick}
        notificationCount={3}
      />

      {/* Category Filter */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        eventCounts={eventCounts}
      />

      {/* Featured Events Section */}
      <FeaturedEvents 
        events={senegaleseEvents}
        onBookEvent={handleBookEvent}
      />

      {/* All Events Section */}
      <section className="px-4 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground mb-2">
            {selectedCategory === 'all' 
              ? 'Tous les événements' 
              : `Événements ${eventCategories.find(cat => cat.id === selectedCategory)?.name}`
            }
          </h2>
          <p className="text-sm text-muted-foreground">
            {filteredEvents.length} événement{filteredEvents.length > 1 ? 's' : ''} trouvé{filteredEvents.length > 1 ? 's' : ''}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onBook={handleBookEvent}
            />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎭</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Aucun événement trouvé
            </h3>
            <p className="text-muted-foreground">
              Essayez de changer de catégorie ou revenez plus tard pour découvrir de nouveaux événements.
            </p>
          </div>
        )}
      </section>

      {/* Footer with Senegalese touch */}
      <footer className="bg-gradient-primary text-white mt-12 p-6">
        <div className="text-center space-y-2">
          <div className="flex justify-center items-center gap-2 text-2xl mb-3">
            🇸🇳 🎵 ⚽ 🎭
          </div>
          <h3 className="font-bold text-lg">SenTicket</h3>
          <p className="text-white/90 text-sm">
            Votre passeport pour les meilleurs événements du Sénégal
          </p>
          <div className="flex justify-center gap-4 text-xs text-white/80 mt-4">
            <span>© 2024 SenTicket</span>
            <span>•</span>
            <span>Terrebangane, Sénégal</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;