/**
 * Infinite-scrolling marquee ticker.
 * Inspired by Wispr Flow's logo/social-proof scroll.
 */
export default function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="text-sm font-medium text-slate/60">{item}</span>
            <span className="text-chester-green-mid/40">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
