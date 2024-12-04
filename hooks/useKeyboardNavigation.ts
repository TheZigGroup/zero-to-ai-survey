import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  canProgress: boolean;
}

export function useKeyboardNavigation({
  onNext,
  onPrevious,
  canProgress,
}: UseKeyboardNavigationProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case 'Enter':
          if (canProgress) {
            onNext();
          }
          break;
        case 'Backspace':
          onPrevious();
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrevious, canProgress]);
}