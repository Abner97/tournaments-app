import { icons } from 'lucide-react';

export interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, color, size, className }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} className={className} />;
};

export default Icon;
