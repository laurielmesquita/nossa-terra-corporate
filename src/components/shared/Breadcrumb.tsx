import Link from "next/link";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex mb-6 opacity-0 animate-fade-in-up" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest text-accent/60 hover:text-accent transition-colors no-underline"
          >
            Início
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-accent/30 text-[10px] font-bold">/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="text-xs font-bold uppercase tracking-widest text-accent/60 hover:text-accent transition-colors no-underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-xs font-bold uppercase tracking-widest text-accent cursor-default">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
