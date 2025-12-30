import { useState } from 'react';

interface UseEmbeddedModalReturn {
  embeddedUrl: string | null;
  embeddedTitle: string;
  isOpen: boolean;
  openModal: (url: string, title: string) => void;
  closeModal: () => void;
}

export const useEmbeddedModal = (): UseEmbeddedModalReturn => {
  const [embeddedUrl, setEmbeddedUrl] = useState<string | null>(null);
  const [embeddedTitle, setEmbeddedTitle] = useState<string>('');

  const openModal = (url: string, title: string) => {
    setEmbeddedUrl(url);
    setEmbeddedTitle(title);
  };

  const closeModal = () => {
    setEmbeddedUrl(null);
    setEmbeddedTitle('');
  };

  return {
    embeddedUrl,
    embeddedTitle,
    isOpen: !!embeddedUrl,
    openModal,
    closeModal,
  };
};

