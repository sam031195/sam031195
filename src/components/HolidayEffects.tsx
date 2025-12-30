import { useEffect, useState } from 'react';
import { HOLIDAY, ANIMATION } from '../constants';
import './HolidayEffects.css';

type HolidayType = 'snow' | 'diwali' | null;

interface HolidayEffectsProps {
  enabled?: boolean;
}

// Festival configuration
interface FestivalConfig {
  id: HolidayType;
  name: string;
  emoji: string;
  particleCount: number;
  headerParticleCount: number;
  className: string;
  containerClass: string;
  baseOpacity: number;
  opacityRange: number;
  dateCheck: (month: number, date: number) => boolean;
}

const FESTIVALS: FestivalConfig[] = [
  {
    id: 'diwali',
    name: 'Diwali',
    emoji: '✨',
    particleCount: HOLIDAY.PARTICLE_COUNT,
    headerParticleCount: HOLIDAY.HEADER_PARTICLE_COUNT,
    className: 'diwali-sparkle',
    containerClass: 'diwali-container',
    baseOpacity: HOLIDAY.BASE_OPACITY,
    opacityRange: HOLIDAY.OPACITY_RANGE,
    dateCheck: (month, date) => month === 10 || (month === 11 && date <= 15),
  },
  {
    id: 'snow',
    name: 'Snow',
    emoji: '❄',
    particleCount: HOLIDAY.PARTICLE_COUNT,
    headerParticleCount: HOLIDAY.HEADER_PARTICLE_COUNT,
    className: 'snowflake',
    containerClass: 'snow-container',
    baseOpacity: HOLIDAY.BASE_OPACITY,
    opacityRange: HOLIDAY.OPACITY_RANGE,
    dateCheck: (month, date) => 
      (month === 12 && date >= 15) || (month === 1 && date <= 5) ||
      (month === 12 && date >= 28) || (month === 1 && date <= 7),
  },
];

// Global state for dev mode override
let globalDevMode: HolidayType | null = null;
const devModeListeners: Set<(value: HolidayType | null) => void> = new Set();

const setGlobalDevMode = (value: HolidayType | null) => {
  globalDevMode = value;
  devModeListeners.forEach(listener => listener(value));
};

const detectHoliday = (): HolidayType => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const date = now.getDate();

  // Check festivals in order (priority)
  for (const festival of FESTIVALS) {
    if (festival.dateCheck(month, date)) {
      return festival.id;
    }
  }
  
  return null;
};

// Hook to get current holiday (respects dev mode)
const useCurrentHoliday = () => {
  const [devMode, setDevMode] = useState<HolidayType | null>(globalDevMode);
  
  useEffect(() => {
    const listener = (value: HolidayType | null) => setDevMode(value);
    devModeListeners.add(listener);
    return () => {
      devModeListeners.delete(listener);
    };
  }, []);

  return import.meta.env.DEV && devMode !== null ? devMode : detectHoliday();
};

const HolidayEffects = ({ enabled = true }: HolidayEffectsProps) => {
  const [holiday, setHoliday] = useState<HolidayType>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [devMode, setDevMode] = useState<HolidayType | null>(null);

  useEffect(() => {
    if (!enabled) return;
    setHoliday(import.meta.env.DEV && devMode !== null ? devMode : detectHoliday());
  }, [enabled, devMode]);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => setIsAtTop(window.scrollY < ANIMATION.SCROLL_THRESHOLD);
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled]);

  if (!enabled || !holiday) {
    return import.meta.env.DEV ? <DevControlPanel onSelect={setDevMode} selected={devMode} /> : null;
  }

  const festival = FESTIVALS.find(f => f.id === holiday);
  if (!festival) return null;

  return (
    <>
      {import.meta.env.DEV && <DevControlPanel onSelect={setDevMode} selected={devMode} />}
      <div className={`holiday-effects holiday-${holiday} ${!isAtTop ? 'effect-hidden' : ''}`}>
        <FestivalEffect config={festival} />
      </div>
    </>
  );
};

// Dev-only control panel
const DevControlPanel = ({ 
  onSelect, 
  selected 
}: { 
  onSelect: (holiday: HolidayType) => void; 
  selected: HolidayType | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!import.meta.env.DEV) return null;

  const options = [
    { value: null as HolidayType, label: 'None (Auto)' },
    ...FESTIVALS.map(f => ({ value: f.id, label: f.name })),
  ];

  const handleSelect = (value: HolidayType) => {
    onSelect(value);
    setGlobalDevMode(value);
    setIsOpen(false);
  };

  return (
    <div className="dev-control-panel">
      <button 
        className="dev-control-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Test Holiday Effects"
      >
        🎨
      </button>
      {isOpen && (
        <div className="dev-control-menu">
          <div className="dev-control-header">Test Holiday Effects</div>
          {options.map((option) => (
            <button
              key={option.value || 'auto'}
              className={`dev-control-option ${selected === option.value ? 'active' : ''}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Generic festival effect component
const FestivalEffect = ({ config }: { config: FestivalConfig }) => (
  <div className={config.containerClass}>
    {Array.from({ length: config.particleCount }, (_, i) => (
      <div
        key={i}
        className={config.className}
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * ANIMATION.PARTICLE_MAX_DELAY}s`,
          animationDuration: `${ANIMATION.PARTICLE_MIN_DURATION + Math.random() * (ANIMATION.PARTICLE_MAX_DURATION - ANIMATION.PARTICLE_MIN_DURATION)}s`,
          opacity: config.baseOpacity + Math.random() * config.opacityRange,
        }}
      >
        {config.emoji}
      </div>
    ))}
  </div>
);

// Header festival effect
export const HeaderFestival = () => {
  const holiday = useCurrentHoliday();
  
  if (!holiday) return null;

  const festival = FESTIVALS.find(f => f.id === holiday);
  if (!festival) return null;

  const containerClass = `header-${festival.id}-container`;
  const particleClass = `header-${festival.className}`;

  return (
    <div className={containerClass}>
      {Array.from({ length: festival.headerParticleCount }, (_, i) => (
        <div
          key={i}
          className={particleClass}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * ANIMATION.PARTICLE_MAX_DELAY}s`,
            animationDuration: `${ANIMATION.PARTICLE_MIN_DURATION + Math.random() * (ANIMATION.PARTICLE_MAX_DURATION - ANIMATION.PARTICLE_MIN_DURATION)}s`,
            opacity: HOLIDAY.HEADER_OPACITY_BASE + Math.random() * HOLIDAY.HEADER_OPACITY_RANGE,
          }}
        >
          {festival.emoji}
        </div>
      ))}
    </div>
  );
};

export default HolidayEffects;
