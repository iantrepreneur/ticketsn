import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { eventCategories } from "@/data/events";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  eventCounts: Record<string, number>;
}

export const CategoryFilter = ({ 
  selectedCategory, 
  onCategoryChange, 
  eventCounts 
}: CategoryFilterProps) => {
  const getCategoryStyle = (categoryId: string) => {
    const isSelected = selectedCategory === categoryId;
    
    if (isSelected) {
      switch (categoryId) {
        case 'all':
          return 'bg-gradient-primary text-white shadow-senegal-md';
        case 'concert':
          return 'bg-senegal-orange text-white shadow-senegal-md';
        case 'sport':
          return 'bg-senegal-green text-white shadow-senegal-md';
        case 'culture':
          return 'bg-senegal-yellow text-white shadow-senegal-md';
        case 'theatre':
          return 'bg-primary text-white shadow-senegal-md';
        default:
          return 'bg-primary text-white shadow-senegal-md';
      }
    }
    
    return 'bg-card text-card-foreground border border-border hover:bg-muted hover:shadow-senegal-sm';
  };

  return (
    <div className="px-4 py-6 bg-background">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Catégories d'événements
      </h2>
      
      <div className="flex flex-wrap gap-3">
        {eventCategories.map((category) => {
          const count = eventCounts[category.id] || 0;
          const isSelected = selectedCategory === category.id;
          
          return (
            <Button
              key={category.id}
              variant="ghost"
              onClick={() => onCategoryChange(category.id)}
              className={`relative h-auto p-4 flex-col items-center gap-2 min-w-[100px] transition-all duration-300 hover:scale-105 ${getCategoryStyle(category.id)}`}
            >
              <div className="text-2xl">{category.icon}</div>
              <div className="text-center">
                <div className="font-medium text-sm leading-tight">
                  {category.name}
                </div>
                {count > 0 && (
                  <Badge 
                    variant="secondary" 
                    className={`mt-1 h-5 px-2 text-xs ${
                      isSelected 
                        ? 'bg-white/20 text-white' 
                        : 'bg-senegal-orange text-white'
                    }`}
                  >
                    {count}
                  </Badge>
                )}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};