import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: 'up' | 'down' | 'stable';
  icon?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning';
}

export const StatsCard = ({ 
  title, 
  value, 
  description, 
  trend, 
  icon, 
  color = 'primary' 
}: StatsCardProps) => {
  const getColorClasses = () => {
    switch (color) {
      case 'primary':
        return 'bg-gradient-primary text-white';
      case 'secondary':
        return 'bg-gradient-accent text-white';
      case 'success':
        return 'bg-success text-success-foreground';
      case 'warning':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-gradient-primary text-white';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '';
    }
  };

  return (
    <Card className="overflow-hidden shadow-senegal-md hover:shadow-senegal-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className={`p-4 ${getColorClasses()}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {icon && <span className="text-2xl">{icon}</span>}
              <h3 className="font-semibold text-sm opacity-90">{title}</h3>
            </div>
            {trend && (
              <span className="text-lg">{getTrendIcon()}</span>
            )}
          </div>
          <div className="mt-2">
            <p className="text-2xl font-bold">{value}</p>
            {description && (
              <p className="text-xs opacity-80 mt-1">{description}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};