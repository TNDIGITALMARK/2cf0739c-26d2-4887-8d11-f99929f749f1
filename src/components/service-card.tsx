import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="service-card group cursor-pointer">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="icon-wrapper">
          <Icon className="w-12 h-12 text-[#0080FF]" strokeWidth={2} />
        </div>
        <h3 className="text-sm font-medium text-black">{title}</h3>
        {description && (
          <p className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
