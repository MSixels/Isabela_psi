// Domínio ainda não registrado. Toda URL absoluta (canonical, Open Graph,
// JSON-LD, sitemap, robots) deriva daqui — nunca hardcodar o domínio.
//
// Em produção, configure NEXT_PUBLIC_SITE_URL na Vercel (a URL do projeto,
// enquanto não há domínio próprio). Como rede de segurança, cai para o domínio
// de produção do projeto na Vercel; fora disso, localhost para dev/build.
function resolverSiteUrl(): string {
  const explicito = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicito) return explicito.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolverSiteUrl();
