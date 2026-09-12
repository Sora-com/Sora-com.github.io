# Mi blog

Blog personal hecho con [Hugo](https://gohugo.io), inspirado en el estilo de devz.cl: minimalista en blanco y negro, títulos en serif, y un "cielo" en los márgenes donde cada nota es una estrella.

## Escribir una nota nueva

```bash
hugo new content posts/nombre-de-la-nota.md
```

Eso crea `content/posts/nombre-de-la-nota.md`. Ábrelo y escribe debajo de las líneas `---`:

```markdown
---
title: "My new note"
date: 2026-09-13T10:00:00+02:00
draft: true
---

Your text here.

# A section title

More text.
```

Cuando esté lista, cambia `draft: true` por `draft: false` (o borra esa línea).

### Imágenes

Guarda la imagen en `static/images/` y úsala así:

```markdown
![A description of the photo](/images/my-photo.jpg)
```

## Ver el blog en tu computador

```bash
hugo server -D
```

Abre http://localhost:1313. Se actualiza solo cada vez que guardas. `-D` muestra también los borradores.

## Publicar

Cada vez que subes cambios a GitHub (`git push`), el blog se publica solo en uno o dos minutos:

```bash
git add .
git commit -m "New note: my new note"
git push
```

## Personalizar

Todo lo básico está en `hugo.toml`: tu nombre, la frase de la portada, tus redes (`[[params.elsewhere]]`) y la foto (`static/images/avatar.svg`).

| Qué | Dónde |
|---|---|
| Portada | `layouts/home.html` |
| Página de cada nota | `layouts/single.html` |
| Lista de todas las notas | `layouts/list.html` |
| Estrellas y orbes | `layouts/_partials/sky.html` |
| Colores, tipografías, animaciones | `assets/css/main.css` |
| Página "About" | `content/about.md` |
