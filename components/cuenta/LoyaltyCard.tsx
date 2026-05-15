import type { UserData } from "@/lib/auth-context";

const levelConfig = {
  Silver: {
    cashback: "3%",
    color: "from-slate-400 to-slate-600",
    next: "Gold",
    pointsNeeded: 5000,
  },
  Gold: {
    cashback: "4%",
    color: "from-amber-400 to-amber-600",
    next: "Platinum",
    pointsNeeded: 15000,
  },
  Platinum: {
    cashback: "5%",
    color: "from-indigo-400 to-indigo-700",
    next: null,
    pointsNeeded: null,
  },
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
    <div className={`rounded-xl bg-gradient-to-br ${config.color} p-6 text-white`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest opacity-80 mb-1">
            Neauvia Pro
          </div>
          <div className="text-2xl font-bold">{user.loyaltyLevel}</div>
        </div>
        <div className="text-right">
          <div className="text-xs opacity-80">Cashback</div>
          <div className="text-2xl font-bold">{config.cashback}</div>
        </div>
      </div>

      <div className="text-sm font-medium truncate mb-4">{user.nombre}</div>

      {config.pointsNeeded && (
        <div>
          <div className="flex justify-between text-xs opacity-80 mb-1">
            <span>{user.loyaltyPoints} pts</span>
            <span>{config.pointsNeeded} pts → {config.next}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-1.5">
            <div
              className="bg-white rounded-full h-1.5 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
