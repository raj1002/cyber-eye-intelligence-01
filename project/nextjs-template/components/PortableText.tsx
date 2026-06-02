import { PortableText as SanityPortableText } from 'next-sanity';

type PTValue = Parameters<typeof SanityPortableText>[0]['value'];

const components: Parameters<typeof SanityPortableText>[0]['components'] = {
  block: {
    h2: ({ children }) => <h2 className="display text-4xl mt-12 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="display text-2xl mt-10 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-medium mt-8 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="text-mute leading-relaxed mb-5">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-accent pl-6 my-8 text-lg leading-relaxed">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="mono text-accent bg-surface px-1.5 py-0.5 rounded-sm text-sm">{children}</code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-accent hover:underline"
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-5 text-mute">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-5 text-mute">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
};

export default function PortableText({ value }: { value: unknown[] }) {
  return <SanityPortableText value={value as PTValue} components={components} />;
}
