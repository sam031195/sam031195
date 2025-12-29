import React from 'react';
import './ListItem.css';

interface ListItemProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string | string[];
  children?: React.ReactNode;
  alignStart?: boolean;
  className?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  icon,
  title,
  subtitle,
  children,
  alignStart = false,
  className = '',
}) => {
  return (
    <div className={`list-item ${alignStart ? 'list-item--start' : ''} ${className}`}>
      {icon && <div className="list-item__icon">{icon}</div>}
      <div className="list-item__content">
        <h3 className="list-item__title">{title}</h3>
        <h4 className="list-item__subtitle">{subtitle}</h4>
        {children}
      </div>
    </div>
  );
};

export default ListItem;

