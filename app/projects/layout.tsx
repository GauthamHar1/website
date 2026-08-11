import Link from "next/link";

// Wraps every project writeup: back link + the .prose class that styles
// the content of each page.tsx under app/projects/.
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Link href="/" className="back">
        ← back
      </Link>
      <article className="prose">{children}</article>
    </main>
  );
}
