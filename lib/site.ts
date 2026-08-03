// Domínio ainda não registrado. Toda URL absoluta (canonical, OG, JSON-LD)
// deriva daqui — nunca hardcodar o domínio. O fallback localhost serve só
// para build e preview; em produção NEXT_PUBLIC_SITE_URL é obrigatório.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
