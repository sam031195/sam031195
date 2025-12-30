import EmbeddedViewer from './EmbeddedViewer';
import './DesignShowcase.css';

// The URL is stored here - users won't see it in the browser address bar
const SHOWCASE_URL = 'https://final-safe-45824919.figma.site/';

const DesignShowcase = () => {
  return (
    <section id="design-showcase" className="design-showcase">
      <div className="design-showcase-header">
        <h2>Design Showcase</h2>
        <p>Explore my latest design work</p>
      </div>
      <div className="design-showcase-content">
        <EmbeddedViewer url={SHOWCASE_URL} title="Design Portfolio" />
      </div>
    </section>
  );
};

export default DesignShowcase;

