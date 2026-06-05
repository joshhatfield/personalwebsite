import { useState, useEffect } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const BlogImage: React.FC<BlogImageProps> = ({ src, alt, caption }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <figure className="my-8">
        <img
          src={src}
          alt={alt}
          className="w-full rounded-lg cursor-pointer hover:scale-[1.02] transition-transform duration-200"
          loading="lazy"
          onClick={() => setIsOpen(true)}
        />
        {caption && (
          <figcaption className="mt-3 text-center text-sm text-base-content/60 italic">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 btn btn-circle btn-ghost text-white"
            onClick={() => setIsOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Caption */}
          {caption && (
            <figcaption className="absolute bottom-4 text-center text-sm text-white/70 italic">
              {caption}
            </figcaption>
          )}
        </div>
      )}
    </>
  );
};

export default BlogImage;