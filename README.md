# Village Market

Site institucional do Village Market — minimercado autônomo em container, 24h.

Next.js (App Router) + Tailwind CSS, exportado como site estático e publicado no GitHub Pages.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Onde editar

- **Textos, contatos, endereço, produtos:** `lib/site.ts` (itens com `TODO` ainda são exemplos)
- **Seções da página:** `components/`
- **Cores e fontes:** `app/globals.css` e `app/layout.tsx`
- **Ilustração do container (provisória):** `components/ContainerIllustration.tsx`

## Publicação

Todo push na `main` roda `.github/workflows/deploy.yml`, que gera o site (`out/`) e publica em
https://souza1010.github.io/vilagge-market/

Configuração única no GitHub: **Settings → Pages → Source: GitHub Actions**.

## Fases

1. Site institucional
2. Logo oficial
3. Render 3D do container
4. …
5. Publicação
