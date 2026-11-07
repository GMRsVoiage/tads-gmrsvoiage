# GMRsVoiage · Portal Acadêmico TADS

Portal estático para publicar trabalhos, pesquisas e protótipos desenvolvidos no curso de Tecnologia em Análise e Desenvolvimento de Sistemas.

**Domínio planejado:** `https://tads.gmrsvoiage.com.br/`

## O que está incluído

- Página inicial com identidade visual híbrida GMRsVoiage + acadêmica.
- Catálogo de trabalhos com campo de busca.
- Página individual do trabalho de acessibilidade digital do YouTube.
- Downloads do relatório PDF/DOCX, pacote do protótipo e arquivos SVG.
- Layout responsivo para desktop e celular.
- Navegação por teclado, link para pular ao conteúdo, foco visível, rótulos e regiões semânticas.
- Respeito à preferência `prefers-reduced-motion`.
- Cabeçalhos básicos de segurança para Cloudflare Pages (`_headers`).

## Estrutura

```text
.
├── index.html
├── trabalhos/
│   ├── index.html
│   └── acessibilidade-youtube/index.html
├── assets/
│   ├── css/site.css
│   ├── js/site.js
│   └── img/
├── arquivos/acessibilidade-youtube/
│   ├── Relatorio_Acessibilidade_YouTube_WCAG22.pdf
│   ├── Relatorio_Acessibilidade_YouTube_WCAG22.docx
│   ├── Prototipo_YouTube_Acessivel_Figma.zip
│   └── arquivos SVG individuais e prévia PNG
├── _headers
├── CNAME
├── robots.txt
└── sitemap.xml
```

## Visualizar localmente

Com Python 3 instalado, abra um terminal dentro desta pasta e execute:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000` no navegador.

> Use um servidor HTTP local em vez de abrir o `index.html` diretamente. Os caminhos de assets foram preparados para a publicação no domínio raiz `tads.gmrsvoiage.com.br`.

## Publicar com Cloudflare Pages

1. Crie um repositório GitHub e envie **todo o conteúdo desta pasta** para a raiz do repositório.
2. No Cloudflare, acesse **Workers & Pages → Create application → Pages → Connect to Git**.
3. Selecione o repositório.
4. Como o site é HTML/CSS/JS puro, deixe o comando de build vazio e defina o diretório de saída como `.` (raiz do repositório).
5. Faça o primeiro deploy.
6. Em **Custom domains**, adicione `tads.gmrsvoiage.com.br` e siga as instruções de DNS exibidas pelo próprio Cloudflare.

Não é necessário Node.js, framework, banco de dados ou variável de ambiente.

## Publicar com GitHub Pages

1. Envie todo o conteúdo desta pasta para a raiz de um repositório GitHub.
2. Abra **Settings → Pages**.
3. Selecione a branch principal e a pasta `/ (root)` como origem.
4. O arquivo `CNAME` já contém `tads.gmrsvoiage.com.br`. Configure o DNS do domínio conforme as instruções atuais do GitHub Pages e habilite HTTPS quando estiver disponível.

O uso de domínio próprio na raiz é esperado: os caminhos do site começam com `/`.

## Adicionar um novo trabalho

1. Crie uma pasta em `trabalhos/`, por exemplo `trabalhos/nome-do-projeto/`.
2. Adicione um `index.html` usando os mesmos arquivos CSS e JS com caminhos absolutos (`/assets/...`).
3. Coloque os documentos para download em `arquivos/nome-do-projeto/`.
4. Adicione um novo cartão em `trabalhos/index.html` e, se desejar, na seção de destaque da página inicial.
5. Atualize `sitemap.xml` com a nova URL.

## Observação sobre o trabalho do YouTube

O portal apresenta o material recebido no projeto, mas não declara que a plataforma YouTube foi certificada ou integralmente auditada segundo a WCAG. O estudo é qualitativo e exploratório. Capturas originais e resultados de testes práticos devem corresponder à navegação realmente realizada pelo autor antes de uma entrega acadêmica definitiva.

## Verificações recomendadas antes de publicar

- Conferir o nome dos integrantes e demais dados de identificação dentro do DOCX/PDF.
- Confirmar e completar no relatório as capturas reais e observações dos testes de navegação.
- Abrir cada link de download depois do deploy.
- Testar a navegação com `Tab`, `Shift + Tab` e `Enter`.
- Testar em celular e desktop.
- Revisar contraste e zoom de 200%.
