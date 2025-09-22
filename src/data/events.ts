import { Event } from '../types/events';
import wallySeckConcert from '../assets/wally-seck-concert.jpg';
import youssouNdourConcert from '../assets/youssou-ndour-concert.jpg';
import senegalFootballMatch from '../assets/senegal-football-match.jpg';
import lutteWrestling from '../assets/lutte-wrestling.jpg';
import vivianeChididShow from '../assets/viviane-chidid-show.jpg';
import theatreLatDior from '../assets/theatre-lat-dior.jpg';
import festivalArtsRue from '../assets/festival-arts-rue.jpg';
import festivalSalam from '../assets/festival-salam.jpg';

export const senegaleseEvents: Event[] = [
  {
    id: '1',
    title: 'Wally Seck Live Concert',
    artist: 'Wally Seck',
    venue: 'Dakar Arena',
    address: 'Diamniadio, Dakar',
    date: '2024-03-15',
    time: '20:00',
    price: 25000,
    currency: 'FCFA',
    category: 'concert',
    image: wallySeckConcert,
    description: 'Le roi du mbalax Wally Seck revient avec un concert exceptionnel au Dakar Arena. Une soirée inoubliable avec ses plus grands hits et des invités surprises.',
    featured: true,
    seating: {
      vip: { name: 'VIP Lounge', price: 50000, available: 20, color: '#FFD700' },
      standard: { name: 'Tribune Standard', price: 25000, available: 200, color: '#FF6B35' },
      economique: { name: 'Pelouse', price: 15000, available: 500, color: '#00A651' }
    }
  },
  {
    id: '2',
    title: 'Youssou N\'Dour Concert',
    artist: 'Youssou N\'Dour',
    venue: 'Grand Théâtre National',
    address: 'Place Soweto, Dakar',
    date: '2024-03-22',
    time: '19:30',
    price: 35000,
    currency: 'FCFA',
    category: 'concert',
    image: youssouNdourConcert,
    description: 'La légende de la musique sénégalaise et mondiale Youssou N\'Dour dans un concert acoustique intimiste au Grand Théâtre.',
    featured: true,
    seating: {
      vip: { name: 'Orchestre VIP', price: 60000, available: 15, color: '#FFD700' },
      premium: { name: 'Balcon Premium', price: 40000, available: 80, color: '#FF6B35' },
      standard: { name: 'Parterre', price: 35000, available: 150, color: '#F7931E' }
    }
  },
  {
    id: '3',
    title: 'Viviane Chidid Show',
    artist: 'Viviane Chidid',
    venue: 'King Fahd Palace',
    address: 'Avenue Cheikh Anta Diop, Dakar',
    date: '2024-04-08',
    time: '21:00',
    price: 20000,
    currency: 'FCFA',
    category: 'concert',
    image: vivianeChididShow,
    description: 'La reine du mbalax moderne Viviane Chidid présente son nouveau album dans un show spectaculaire au King Fahd Palace.',
    featured: false,
    seating: {
      vip: { name: 'Carré VIP', price: 40000, available: 30, color: '#FFD700' },
      standard: { name: 'Tribune', price: 20000, available: 300, color: '#FF6B35' },
      populaire: { name: 'Debout', price: 12000, available: 400, color: '#00A651' }
    }
  },
  {
    id: '4',
    title: 'Sénégal vs Égypte',
    venue: 'Stade Léopold Sédar Senghor',
    address: 'Avenue Léopold Sédar Senghor, Dakar',
    date: '2024-03-25',
    time: '16:00',
    price: 10000,
    currency: 'FCFA',
    category: 'sport',
    image: senegalFootballMatch,
    description: 'Match amical de préparation entre les Lions du Sénégal et l\'Égypte dans une ambiance de feu au stade LSS.',
    featured: true,
    seating: {
      tribune_officielle: { name: 'Tribune Officielle', price: 25000, available: 50, color: '#FFD700' },
      tribune_honneur: { name: 'Tribune d\'Honneur', price: 15000, available: 200, color: '#FF6B35' },
      populaire: { name: 'Populaire', price: 10000, available: 800, color: '#00A651' },
      pelouse: { name: 'Pelouse', price: 5000, available: 1000, color: '#F7931E' }
    }
  },
  {
    id: '5',
    title: 'Combat: Modou Lo vs Siteu',
    venue: 'Arène Nationale',
    address: 'Pikine, Guédiawaye',
    date: '2024-04-02',
    time: '18:00',
    price: 5000,
    currency: 'FCFA',
    category: 'sport',
    image: lutteWrestling,
    description: 'Le combat de lutte le plus attendu de l\'année entre Modou Lo et Siteu à l\'Arène Nationale.',
    featured: true,
    seating: {
      ring_side: { name: 'Ring Side VIP', price: 50000, available: 20, color: '#FFD700' },
      tribune_couverte: { name: 'Tribune Couverte', price: 15000, available: 100, color: '#FF6B35' },
      populaire: { name: 'Populaire', price: 5000, available: 500, color: '#00A651' }
    }
  },
  {
    id: '6',
    title: 'Théâtre: Lat Dior',
    venue: 'Théâtre Daniel Sorano',
    address: 'Avenue Léopold Sédar Senghor, Dakar',
    date: '2024-03-10',
    time: '19:00',
    price: 8000,
    currency: 'FCFA',
    category: 'theatre',
    image: theatreLatDior,
    description: 'Pièce historique sur la vie du grand résistant Lat Dior Ngoné Latyr Diop, par la troupe nationale.',
    featured: false,
    seating: {
      orchestre: { name: 'Orchestre', price: 12000, available: 40, color: '#FFD700' },
      balcon: { name: 'Balcon', price: 8000, available: 60, color: '#FF6B35' },
      poulailler: { name: 'Poulailler', price: 5000, available: 80, color: '#00A651' }
    }
  },
  {
    id: '7',
    title: 'Festival des Arts de Rue',
    venue: 'Corniche de Dakar',
    address: 'Corniche Ouest, Dakar',
    date: '2024-04-20',
    time: '15:00',
    price: 0,
    currency: 'FCFA',
    category: 'culture',
    image: festivalArtsRue,
    description: 'Festival gratuit célébrant les arts de rue sénégalais : danse, musique, graffiti et performances sur la mythique Corniche.',
    featured: false,
    seating: {
      libre: { name: 'Accès Libre', price: 0, available: 1000, color: '#00A651' }
    }
  },
  {
    id: '8',
    title: 'Festival Salam',
    venue: 'Place de l\'Indépendance',
    address: 'Place de l\'Indépendance, Dakar',
    date: '2024-05-12',
    time: '17:00',
    price: 15000,
    currency: 'FCFA',
    category: 'concert',
    image: festivalSalam,
    description: 'Le plus grand festival de musique du Sénégal réunit les stars locales et internationales sur la Place de l\'Indépendance.',
    featured: true,
    seating: {
      vip: { name: 'Carré VIP', price: 35000, available: 50, color: '#FFD700' },
      premium: { name: 'Zone Premium', price: 25000, available: 150, color: '#FF6B35' },
      standard: { name: 'Accès General', price: 15000, available: 1000, color: '#F7931E' }
    }
  }
];

export const eventCategories = [
  { id: 'all', name: 'Tous Événements', icon: '🎉' },
  { id: 'concert', name: 'Concerts', icon: '🎵' },
  { id: 'sport', name: 'Sports', icon: '⚽' },
  { id: 'culture', name: 'Culture', icon: '🎭' },
  { id: 'theatre', name: 'Théâtre', icon: '🎪' }
];