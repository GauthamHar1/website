import type { MDXComponents } from "mdx/types";

// Next.js requires this file at the project root when using MDX.
// It maps markdown elements to React components. Leaving it as-is
// means your markdown renders as plain HTML, styled by globals.css.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
