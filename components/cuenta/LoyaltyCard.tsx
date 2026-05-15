import type { UserData } from "@/lib/auth-context";

const levelConfig = {
  Silver: { cashback: "3%", next: "Gold", pointsNeeded: 5000 },
  Gold: { cashback: "4%", next: "Platinum", pointsNeeded: 15000 },
  Platinum: { cashback: "5%", next: null, pointsNeeded: null },
};

interface LoyaltyCardProps {
  user: UserData;
}

export function LoyaltyCard({ user }: LoyaltyCardProps) {
  const config = levelConfig[user.loyaltyLevel];
  const progress = config.pointsNeeded
    ? Math.min((user.loyaltyPoints / config.pointsNeeded) * 100, 100)
    : 100;

  return (
    <div className="bg-[#111010] border-t-2 border-neauvia-red p-6 text-white">
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neauvia-red mb-2">
            Neauvia Pro
          </div>
          <div className="text-2xl font-semibold tracking-tight">{user.loyaltyLevel}</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-[0.15em] text-white/40 mb-1">
            Cashback
          </div>
          <div className="text-3xl font-light text-neauvia-red">{config.cashback}</div>
        </div>
      </div>

      <div className="text-[13px] font-light text-white/60 mb-6 truncate">{user.nombre}</div>

      {config.pointsNeeded && (
        <div>
          <div className="flex justify-between text-[10px] uppercase tracking-[0.1em] text-white/40 mb-2">
            <span>{user.loyaltyPoints} pts</span>
            <span>
              {config.pointsNeeded} pts hacia {config.next}
            </span>
          </div>
          <div className="w-full bg-white/10 h-[1px]">
            <div
              className="bg-neauvia-red h-[1px]"
              style={{
                width: `${progress}%`,
                transition: "width 800ms cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            />
          </div>
        </div>
      )}

      {!config.pointsNeeded && (
        <div className="text-[10px] uppercase tracking-[0.15em] text-white/30">
          Nivel máximo
        </div>
      )}
    </div>
  );
}
