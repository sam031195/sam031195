import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  title: string | string[];
  subtitle?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className = '',
}) => {
  const titleArray = Array.isArray(title) ? title : [title];

  return (
    <div className={`section-header ${className}`}>
      <h1 className="section-header__title">
        {titleArray.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </h1>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;

