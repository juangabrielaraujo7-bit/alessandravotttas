# Alessandra Vottas

Site institucional responsivo em português, baseado na proposta visual aprovada: vinho, rosa e off-white, tipografia Cormorant Garamond + Manrope, fotografias e formas orgânicas.

## Abrir no computador

Abra `index.html` no navegador. Não precisa instalar dependências ou compilar. Fontes e imagens estão salvas na pasta `assets/`.

## Publicar na Vercel

1. Importe este repositório em **Add New → Project**.
2. Framework Preset: **Other**.
3. Root Directory: raiz do repositório.
4. Deixe Build Command e Output Directory sem personalização (site estático na raiz).
5. Clique em **Deploy**.

## Atualizar contato

O WhatsApp provisório informado pelo responsável está centralizado em `CONTACT.whatsapp`, no início de `script.js`. Altere esse valor para trocar o destino de todos os botões. Os dois links no HTML também têm esse número como alternativa caso JavaScript esteja desativado; atualize-os ao trocar o contato.

## Conteúdo e imagens

- Retrato criado a partir da foto real fornecida e aprovado durante a direção visual.
- Fotografia do ambiente é ilustrativa; sua legenda informa isso.
- Não há depoimentos, credenciais ou avaliações inventadas.
- Localidade de atendimento recuperada dos prints fornecidos: São João da Boa Vista–SP. Confirmar endereço e modalidades pelo WhatsApp.
- O menu mobile pode ser fechado com Escape, toque fora ou seleção de um link.
- Perguntas frequentes usam elementos nativos `details`/`summary`.
- Links de serviços abrem conversas com mensagens específicas.
- A página respeita a preferência por movimento reduzido.

## Arquivos

- `index.html`: estrutura e conteúdo.
- `styles.css`: identidade visual e adaptação para celular/tablet/desktop.
- `script.js`: menu, história expansível e mensagens de WhatsApp.
- `assets/`: imagens e fontes locais.
- `vercel.json`: configuração estática e cabeçalhos.

## Fidelidade à proposta visual

A composição aprovada orienta as proporções, com fotografias independentes de 1536 × 1024 px e elementos decorativos vetoriais. A página não renderiza ou amplia recortes da prévia. Textos, navegação, botões, perguntas e estrutura são HTML real e responsivo.

`resolution-fix.css` limita a escala do desktop a um conteúdo equivalente a 1280 px, mesmo em monitores maiores. O título principal tem limite de 80 px. A abertura mobile usa título menor, retrato com enquadramento próprio, apresentação curta e apenas a foto do ambiente na seção complementar, conforme a referência mobile.

O CSS mantém a composição do desktop acima de 700 px e reorganiza o conteúdo abaixo dessa largura. O Instagram não foi vinculado porque o perfil ainda não foi informado.
