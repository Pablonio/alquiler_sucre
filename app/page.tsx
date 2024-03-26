'use client'
// Home.tsx
import React from "react";
import Formulario from "./Inicio/FormularioLoginCliente";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mt-6">
        <Formulario></Formulario>
      </div>
    </main>
  );
}