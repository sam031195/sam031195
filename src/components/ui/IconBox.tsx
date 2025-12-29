import React from 'react';
import './IconBox.css';

interface IconBoxProps {
  children: React.ReactNode;
  className?: string;
  rounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const IconBox: React.FC<IconBoxProps> = ({
  children,
  className = '',
  rounded = false,
  size = 'md',
}) => {
  const classes = [
    'icon-box',
    `icon-box--${size}`,
    rounded && 'icon-box--rounded',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
};

export default IconBox;

