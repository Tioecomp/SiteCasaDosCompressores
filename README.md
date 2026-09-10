# Casa dos Compressores

Demonstração comercial de um site institucional com catálogo interativo. Next.js, React, TypeScript e CSS responsivo. Projeto preparado para Vercel, sem banco de dados ou serviços pagos.

## Rodar localmente

Requisito: Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Publicar na Vercel

Importe **Tioecomp/SiteCasaDosCompressores** e mantenha **Root Directory** na raiz padrão (`./`). O código deste projeto é publicado diretamente na raiz do repositório. Na pasta local de trabalho, ele fica em `site/`.

- Framework: **Next.js**.
- Build: `npm run build`.
- Output Directory: padrão do Next.js (não usar `dist`).
- Não são necessárias variáveis de ambiente, chaves ou banco de dados.

A URL da Vercel configura automaticamente a base das imagens de compartilhamento. A demonstração está com `noindex` para evitar indexação como site oficial. Ajuste `app/layout.tsx` quando a versão final for aprovada.

## O que funciona

- Menu móvel e navegação entre seções.
- Catálogo com busca sem diferenciação de acentos, categorias e expansão.
- Detalhes de cada linha em janela acessível, fechável com Escape.
- Seleção e remoção de equipamentos para pedido de orçamento.
- Formulário que prepara uma mensagem e permite abri-la no WhatsApp. Nenhuma mensagem é enviada automaticamente e os dados não são armazenados.
- Perguntas frequentes expansíveis, telefone e link de localização.
- Imagens e fontes locais, layout responsivo e respeito à preferência por movimento reduzido.

## Conteúdo e ajustes antes da versão final

Os dados centrais e produtos estão em `app/catalog.ts`. A página está em `app/page.tsx`, o estilo em `app/globals.css`.

A logo e as fotos de loja foram fornecidas pelo cliente. As fotos de loja aparecem a partir da imagem `equipamentos.png`, com enquadramentos em CSS e otimização nativa de imagem do Next.js; os arquivos originais da pasta principal foram preservados. Fotografias isoladas de produtos são imagens ilustrativas das linhas, sem compromisso de modelo, preço ou estoque. Conferir com o proprietário os telefones, o número de WhatsApp preferido, endereço, marcas, modelos, serviços e direitos das imagens antes de publicar a versão oficial.

Não foram inventados depoimentos, avaliações, preços, certificações, horários ou prazos. As fontes públicas têm dados de contato divergentes; foi priorizado o cadastro da fabricante Pressure.

## Fontes consultadas

Consultadas em 10/09/2026:

- Referência de estrutura: https://www.jasantoscompressores.com.br/
- Cadastro da empresa, endereço, telefone e celulares: https://pressurecompressores.com/distribuidores/
- Corroboração do telefone: https://www.hidromar.com.br/representantes?96458dfd_page=2
- Confirmação do endereço: https://www.solutudo.com.br/empresas/ba/fra-santana/ferramentas-utilidades/casa-dos-compressores-5625629
- Linha de compressores e imagem principal: https://pressurecompressores.com/produtos/storm-600hp-200l/
- Imagem ilustrativa de gerador Tekna: https://www.lojassgeradores.com.br/geradores-de-energia/geradores-de-energia-a-gasolina/gerador-de-energia-a-gasolina-8-kva-gt8000fbe-monofasico-110220v-bivolt-partida-eletrica-e-manual
- Imagem ilustrativa de motobomba: https://www.mhtshopping.com.br/bombas-d-agua/motobomba-a-gasolina-4t-6-5cv-auto-escorvante-tekna-alta-vazao
- Imagem ilustrativa de furadeira: https://www.anhangueraferramentas.com.br/produto/furadeira-de-bancada-1-2-com-morsa-fg-13-ferrari-111101
- Fonte Manrope: https://fonts.google.com/specimen/Manrope

## Verificação

```bash
npm run build
npm run lint
```
