export default function Taslak2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-black font-[family-name:var(--font-sora)]">
      {children}
    </div>
  );
}
