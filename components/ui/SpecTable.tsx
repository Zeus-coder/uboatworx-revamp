import { type ModelVariant } from "@/lib/models-data";

type SpecTableProps = {
  variants: ModelVariant[];
};

const COLUMNS: { key: keyof ModelVariant; label: string }[] = [
  { key: "depth", label: "Depth Rating" },
  { key: "occupancy", label: "Occupancy" },
  { key: "weight", label: "Weight" },
  { key: "dimensions", label: "Dimensions" },
  { key: "battery", label: "Battery" },
  { key: "speed", label: "Speed" },
  { key: "endurance", label: "Endurance" },
];

export function SpecTable({ variants }: SpecTableProps) {
  const hasPrice = variants.some((variant) => variant.price);

  return (
    <div className="glass-panel overflow-x-auto rounded-2xl">
      <table className="w-full min-w-[860px] text-left text-sm">
        <thead>
          <tr className="border-b border-cyan-glow/15 text-xs uppercase tracking-wider text-ink-400">
            <th className="px-5 py-4 font-display font-medium">
              Configuration
            </th>
            {COLUMNS.map((column) => (
              <th key={column.key} className="px-5 py-4 font-display font-medium">
                {column.label}
              </th>
            ))}
            {hasPrice && (
              <th className="px-5 py-4 font-display font-medium">Price</th>
            )}
          </tr>
        </thead>
        <tbody>
          {variants.map((variant) => (
            <tr
              key={variant.name}
              className="border-b border-cyan-glow/5 last:border-0"
            >
              <td className="px-5 py-4 font-display text-ink-100">
                {variant.name}
                {variant.notes && (
                  <span className="mt-1 block max-w-[16rem] font-body text-xs font-normal normal-case text-ink-400">
                    {variant.notes}
                  </span>
                )}
              </td>
              {COLUMNS.map((column) => (
                <td key={column.key} className="px-5 py-4 text-ink-300">
                  {variant[column.key] ?? "—"}
                </td>
              ))}
              {hasPrice && (
                <td className="px-5 py-4 font-display text-gold-300">
                  {variant.price ?? "On Request"}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
