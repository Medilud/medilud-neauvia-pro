"use client";

import { createContext, useContext, useState } from "react";

export interface UserData {
  nombre: string;
  email: string;
  especialidad: string;
  cedula: string;
  clinica: string;
  telefono: string;
  direccion: string;
  rfc: string;
  loyaltyLevel: "Silver" | "Gold" | "Platinum";
  loyaltyPoints: number;
}

interface AuthContextValue {
  user: UserData | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (data: RegisterData) => Promise<boolean>;
  logout: () => void;
}

export interface RegisterData {
  nombre: string;
  email: string;
  password: string;
  especialidad: string;
  cedula: string;
  clinica: string;
  telefono: string;
  direccion: string;
  rfc: string;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const STORAGE_KEY = "neauvia_user";
const ACCOUNTS_KEY = "neauvia_accounts";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserData | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as UserData) : null;
    } catch {
      return null;
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const accounts = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "{}");
      const account = accounts[email];
      if (!account || account.password !== password) return false;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _pw, ...userData } = account as UserData & { password: string };
      setUser(userData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
      return true;
    } catch {
      return false;
    }
  };

  const register = async (data: RegisterData): Promise<boolean> => {
    try {
      const accounts = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "{}");
      if (accounts[data.email]) return false; // ya existe
      const userData: UserData = {
        nombre: data.nombre,
        email: data.email,
        especialidad: data.especialidad,
        cedula: data.cedula,
        clinica: data.clinica,
        telefono: data.telefono,
        direccion: data.direccion,
        rfc: data.rfc,
        loyaltyLevel: "Silver",
        loyaltyPoints: 0,
      };
      accounts[data.email] = { ...userData, password: data.password };
      localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
      setUser(userData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
      return true;
    } catch {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return ctx;
}
