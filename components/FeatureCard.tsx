type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="card-hover rounded-2xl border border-linen bg-off-white p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-chester-green-surface text-chester-green">
        {icon}
      </div>
      <h3 className="mb-2 text-xl">{title}</h3>
      <p className="text-sm leading-relaxed text-slate">{description}</p>
    </div>
  );
}
