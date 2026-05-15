"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-context";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  defaultTab?: "login" | "register";
}

export function AuthModal({ open, onClose, defaultTab = "login" }: AuthModalProps) {
  const { login, register } = useAuth();
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError("");
    setIsLoading(true);
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const ok = await login(email, password);
    setIsLoading(false);
    if (ok) {
      onClose();
    } else {
      setLoginError("Email o contraseña incorrectos.");
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegisterError("");
    setIsLoading(true);
    const f = e.currentTarget;
    const get = (name: string) =>
      (f.elements.namedItem(name) as HTMLInputElement).value;

    const ok = await register({
      nombre: get("nombre"),
      email: get("reg_email"),
      password: get("reg_password"),
      especialidad: get("especialidad"),
      cedula: get("cedula"),
      clinica: get("clinica"),
      telefono: get("telefono"),
      direccion: get("direccion"),
      rfc: get("rfc"),
    });
    setIsLoading(false);
    if (ok) {
      onClose();
    } else {
      setRegisterError("Este email ya está registrado.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-neauvia-dark font-bold text-lg">
            <span className="text-neauvia-red">Neauvia Pro</span>: Acceso Médico
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={defaultTab} className="mt-2">
          <TabsList className="w-full">
            <TabsTrigger value="login" className="flex-1">
              Acceder
            </TabsTrigger>
            <TabsTrigger value="register" className="flex-1">
              Registrarme
            </TabsTrigger>
          </TabsList>

          {/* Login */}
          <TabsContent value="login" className="mt-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="doctor@clinica.com"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              {loginError && (
                <p className="text-xs text-neauvia-red">{loginError}</p>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="btn-neauvia w-full disabled:opacity-60"
              >
                {isLoading ? "Verificando..." : "Iniciar Sesión"}
              </button>
            </form>
          </TabsContent>

          {/* Registro */}
          <TabsContent value="register" className="mt-4">
            <form onSubmit={handleRegister} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1 sm:col-span-2">
                  <Label htmlFor="nombre">Nombre completo *</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    placeholder="Dr. Juan Pérez García"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="especialidad">Especialidad médica *</Label>
                  <Input
                    id="especialidad"
                    name="especialidad"
                    placeholder="Dermatología"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="cedula">Cédula profesional *</Label>
                  <Input
                    id="cedula"
                    name="cedula"
                    placeholder="12345678"
                    required
                  />
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <Label htmlFor="clinica">Nombre de clínica / consultorio *</Label>
                  <Input
                    id="clinica"
                    name="clinica"
                    placeholder="Clínica Estética del Valle"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="telefono">Teléfono *</Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="+52 55 1234 5678"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="rfc">RFC</Label>
                  <Input
                    id="rfc"
                    name="rfc"
                    placeholder="PEGJ800101ABC"
                  />
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <Label htmlFor="direccion">Dirección de entrega *</Label>
                  <Input
                    id="direccion"
                    name="direccion"
                    placeholder="Calle, colonia, ciudad, CP"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="reg_email">Email *</Label>
                  <Input
                    id="reg_email"
                    name="reg_email"
                    type="email"
                    placeholder="doctor@clinica.com"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="reg_password">Contraseña *</Label>
                  <Input
                    id="reg_password"
                    name="reg_password"
                    type="password"
                    placeholder="Mínimo 8 caracteres"
                    minLength={8}
                    required
                  />
                </div>
              </div>

              {/* Declaración bajo protesta */}
              <div className="flex items-start gap-2 bg-neauvia-offwhite border border-neauvia-border p-3 mt-2">
                <input
                  type="checkbox"
                  id="protesta"
                  required
                  className="mt-0.5 accent-neauvia-red shrink-0"
                />
                <label htmlFor="protesta" className="text-xs text-neauvia-gray leading-relaxed">
                  Declaro bajo protesta de decir verdad que soy médico especialista con
                  cédula profesional vigente, y que los datos proporcionados son correctos.
                </label>
              </div>

              {registerError && (
                <p className="text-xs text-neauvia-red">{registerError}</p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn-neauvia w-full disabled:opacity-60"
              >
                {isLoading ? "Registrando..." : "Crear Cuenta"}
              </button>

              <p className="text-xs text-neauvia-gray text-center">
                Al registrarte obtienes{" "}
                <span className="text-neauvia-red font-semibold">15% OFF</span> en tu primer pedido.
              </p>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
