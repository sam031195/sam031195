import { useState, useEffect } from 'react';
import './EmbeddedViewer.css';

interface EmbeddedViewerProps {
  url: string;
  title?: string;
}

const EmbeddedViewer = ({ url, title = "Content" }: EmbeddedViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [url]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="embedded-viewer">
      {isLoading && (
        <div className="embedded-viewer-loading">
          <div className="spinner"></div>
          <p>Loading content...</p>
        </div>
      )}
      
      {hasError && (
        <div className="embedded-viewer-error">
          <p>Unable to load content. The external site may not allow embedding.</p>
        </div>
      )}

      <iframe
        src={url}
        title={title}
        className="embedded-viewer-iframe"
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default EmbeddedViewer;

