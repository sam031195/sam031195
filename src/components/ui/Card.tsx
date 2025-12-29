import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  rounded?: boolean;
  padded?: boolean;
  paddedLg?: boolean;
  border?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  rounded = false,
  padded = false,
  paddedLg = false,
  border = false,
}) => {
  const classes = [
    'card',
    rounded && 'card--rounded',
    padded && 'card--padded',
    paddedLg && 'card--padded-lg',
    border && 'card--border',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
};

export default Card;

