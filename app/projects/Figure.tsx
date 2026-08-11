// Shared bits for the project writeup pages.
// Not a route — only files named page.tsx become pages.

import Image from "next/image";

// Pass width and height to get next/image (optimized, no layout shift).
// Leave them off for a plain img, which is fine for small screenshots.
export function Figure({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure>
      {width && height ? (
        <Image src={src} alt={alt} width={width} height={height} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} />
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

// Two images side by side. Stacks on mobile.
export function FigureRow({ children }: { children: React.ReactNode }) {
  return <div className="figure-row">{children}</div>;
}

// The grey italic guidance text. Delete these as you write.
export function Note({ children }: { children: React.ReactNode }) {
  return <p className="note">{children}</p>;
}
