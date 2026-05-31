interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const BlogImage: React.FC<BlogImageProps> = ({ src, alt, caption }) => {
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-lg"
        loading="lazy"
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-base-content/60 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BlogImage;