/**
 * modpacks.ts
 * Minecraft modpacks used by KII0W administrators.
 * Designed to degrade gracefully if download URLs or assets are pending release.
 * Strict adherence to real, non-fabricated data.
 */

export interface Modpack {
  id: string;
  name: string;
  minecraftVersion: string;
  loader: string; // e.g. Fabric, Forge, NeoForge
  description: string;
  image?: string;
  downloadUrl?: string;
  version?: string;
  featured?: boolean;
  statusBadge?: string;
  tagline?: string;
}

export const adminModpacks: Modpack[] = [
  {
    id: 'kiiow-admin-pack',
    name: "Admin's Primary Setup",
    tagline: 'Stream & Performance Environment',
    minecraftVersion: '1.21.x',
    loader: 'Fabric',
    description: 'Konfigurasi modpack utama yang digunakan kiiow saat streaming Minecraft. Berfokus pada optimalisasi performa rendering, shader vanilla-friendly, perbaikan audio positioning, dan integrasi kontrol kamera.',
    version: 'v1.0 (Live Build)',
    statusBadge: 'SEDANG DIGUNAKAN',
    featured: true,
    // downloadUrl intentionally omitted until published by admin
    downloadUrl: undefined,
  },
  {
    id: 'kiiow-cozy-building',
    name: "Kiiow's Creative Sandbox",
    tagline: 'Detailing & Visual Enhancements',
    minecraftVersion: '1.20.x',
    loader: 'Fabric',
    description: 'Koleksi mod pendukung eksplorasi dan pembangunan balok santai. Menghadirkan peningkatan tekstur dedaunan, pencahayaan atmosferik, serta alat bantu penempatan blok estetik.',
    version: 'v0.8 (Dev)',
    statusBadge: 'ARSIP ADMIN',
    featured: false,
    downloadUrl: undefined,
  },
];

