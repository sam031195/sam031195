interface LinkItem {
  websiteUrl?: string;
  researchPaperUrl?: string;
  liveUrl?: string;
  embedInModal?: boolean;
  title: string;
}

interface HandleLinkClickParams {
  item: LinkItem;
  onOpenModal: (url: string, title: string) => void;
}

/**
 * Generic handler for opening links in modal or new tab
 */
export const handleLinkClick = ({ item, onOpenModal }: HandleLinkClickParams): void => {
  // Priority 1: Website URL with embed flag
  if (item.websiteUrl && item.embedInModal) {
    onOpenModal(item.websiteUrl, item.title);
    return;
  }

  // Priority 2: Research paper URL (for research items)
  if (item.researchPaperUrl) {
    window.open(item.researchPaperUrl, '_blank', 'noopener,noreferrer');
    return;
  }

  // Priority 3: Website URL without embed flag
  if (item.websiteUrl) {
    window.open(item.websiteUrl, '_blank', 'noopener,noreferrer');
    return;
  }

  // Priority 4: Live URL (for project items)
  if (item.liveUrl && item.liveUrl !== '#') {
    window.open(item.liveUrl, '_blank', 'noopener,noreferrer');
  }
};

/**
 * Check if an item has any clickable action
 */
export const hasClickableAction = (item: LinkItem): boolean => {
  return !!(
    (item.websiteUrl && item.embedInModal) ||
    item.researchPaperUrl ||
    item.websiteUrl ||
    (item.liveUrl && item.liveUrl !== '#')
  );
};

