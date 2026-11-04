/**
 * site.ts
 * Single source of truth for site data.
 * Adheres strictly to verified real-world data for KII0W.
 * No fabricated statistics, member counts, or schedules.
 */

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  label: string;
  primaryAction?: boolean;
  rel?: string;
  target?: string;
}

export interface SiteConfig {
  name: string;
  displayName: string;
  tagline: string;
  bioVerbatim: string;
  aestheticNote: string;
  primarySupportUrl: string;
  tiktokUrl: string;
  tiktokHandle: string;
  sociabuzzHandle: string;
  
  // Channel 1: Main KII0W Community
  kiiowCommunityChannelUrl: string;
  kiiowCommunityChannelName: string;
  kiiowCommunityChannelDescription: string;
  kiiowCommunityChannelCta: string;

  // Channel 2: Admin's Modpack Channel
  adminModpackChannelUrl: string;
  adminModpackChannelName: string;
  adminModpackChannelDescription: string;
  adminModpackChannelCta: string;

  characterSkinImage: string;
  socials: SocialLink[];
  navItems: NavItem[];
  meta: {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
    themeColor: string;
    lang: string;
  };
  /**
   * Verified unknown data items explicitly listed as placeholders.
   * Sections depending on unknown content degrade gracefully or omit them.
   */
  placeholders: {
    liveSchedule: string;
    discordCommunity: string;
    minecraftServerIp: string;
  };
}

export const siteData: SiteConfig = {
  name: 'KII0W',
  displayName: 'kiiow',
  tagline: 'Pixel Editorial × Digital Community',
  bioVerbatim: 'support streamer kecil :o',
  aestheticNote: 'Clean, full white aesthetic meets dark obsidian pixel brutalism.',
  primarySupportUrl: 'https://sociabuzz.com/kkiiiow',
  tiktokUrl: 'https://www.tiktok.com/@kk1iow',
  tiktokHandle: '@kk1iow',
  sociabuzzHandle: 'kkiiiow',

  // 1. KII0W Community — Main Channel
  kiiowCommunityChannelUrl: 'https://whatsapp.com/channel/0029VbDRqDc002TFq2hNCb2o',
  kiiowCommunityChannelName: 'KII0W Community',
  kiiowCommunityChannelDescription: 'Stay connected with the KII0W community. Get community announcements, updates, activities, and the latest information about KII0W.',
  kiiowCommunityChannelCta: 'Join KII0W Community',

  // 2. Admin's Modpack — Dedicated Modpack Channel
  adminModpackChannelUrl: 'https://www.whatsapp.com/channel/0029VbBhyH347Xe8WNtwwL2j',
  adminModpackChannelName: "Admin's Modpack",
  adminModpackChannelDescription: 'Discover the Minecraft modpacks currently used by KII0W administrators. Follow this channel for modpack releases, updates, version information, configurations, and other Minecraft-related content.',
  adminModpackChannelCta: "Explore Admin's Modpacks",

  characterSkinImage: '/images/kiiow-skin.png',
  socials: [
    {
      name: 'SociaBuzz',
      handle: 'kkiiiow',
      url: 'https://sociabuzz.com/kkiiiow',
      label: 'Dukung di SociaBuzz',
      primaryAction: true,
      rel: 'noopener noreferrer',
      target: '_blank',
    },
    {
      name: 'KII0W Community',
      handle: 'Saluran Komunitas Utama',
      url: 'https://whatsapp.com/channel/0029VbDRqDc002TFq2hNCb2o',
      label: 'Join KII0W Community',
      primaryAction: false,
      rel: 'noopener noreferrer',
      target: '_blank',
    },
    {
      name: "Admin's Modpack",
      handle: 'Saluran Modpack Admin',
      url: 'https://www.whatsapp.com/channel/0029VbBhyH347Xe8WNtwwL2j',
      label: "Explore Admin's Modpacks",
      primaryAction: false,
      rel: 'noopener noreferrer',
      target: '_blank',
    },
    {
      name: 'TikTok',
      handle: '@kk1iow',
      url: 'https://www.tiktok.com/@kk1iow',
      label: 'Ikuti di TikTok',
      primaryAction: false,
      rel: 'noopener noreferrer',
      target: '_blank',
    },
  ],
  navItems: [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Community Hub', href: '#community-hub' },
    { label: "Admin's Modpack", href: '#admin-modpacks' },
    { label: 'Platform', href: '#platform' },
    { label: 'Dukungan', href: 'https://sociabuzz.com/kkiiiow', isExternal: true },
  ],
  meta: {
    title: 'kiiow — support streamer kecil :o',
    description: 'Ruang digital kiiow. Komunitas santai pencinta Minecraft, stream gameplay, dan kreasi pixel. Gabung di KII0W Community Channel resmi dan telusuri Admin Modpack.',
    canonical: 'https://kiiow.community/',
    ogImage: '/og-image.png',
    themeColor: '#111015',
    lang: 'id',
  },
  placeholders: {
    liveSchedule: 'TODO: isi jadwal live jika sudah ada jadwal rutin',
    discordCommunity: 'TODO: isi tautan Discord saat server komunitas resmi dibuka',
    minecraftServerIp: 'TODO: isi IP server Minecraft jika server bersama telah dirilis',
  },
};
