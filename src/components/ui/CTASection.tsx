import React from 'react';
import './CTASection.css';
import Button from './Button';

interface CTASectionProps {
  title: string | string[];
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  buttonText,
  onButtonClick,
  className = '',
}) => {
  const titleArray = Array.isArray(title) ? title : [title];

  return (
    <div className={`cta-section ${className}`}>
      <h2 className="cta-section__title">
        {titleArray.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </h2>
      <Button variant="primary" size="md" onClick={onButtonClick}>
        {buttonText}
      </Button>
    </div>
  );
};

export default CTASection;

