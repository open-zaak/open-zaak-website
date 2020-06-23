---
layout: page
title: Codebase
subtitle: Slogan voor de Codebase
hero_height: is-medium
hero_link: /page-1/
hero_link_text: Voorbeeld Call To Action
hero_image: /img/codebasesteward.svg
show_sidebar: false
callouts: example_callouts
permalink: /
language : nl
---

## Algemene pagina content

Dit is de rest van de pagina-inhoud. Je kunt hier toevoegen wat je leuk vindt.

## Hero Link

Als je een call-to-action-knop in de held wilt toevoegen, voeg dan `hero_link` en` hero_link_text` toe aan de frontmatter van de pagina

```yaml
layout: page
title: Voorbeeld Landing Page
subtitle: Dit is een voorbeeld van een bestemmingspagina met bijschriften
hero_height: is-large
hero_link: /page-1/
hero_link_text: Voorbeeld Call To Action
```


## Maak een bijschriftgegevensbestand

Maak een gegevensbestand volgens het onderstaande formaat. De stijl is voor klassen om de achtergrondkleur en -groottes in te stellen die u wilt gebruiken van de Bulma-heldencontainer voor de toelichtingen.

** Nieuw in 0.5.7 ** U kunt de hoogte van de toelichtingen in het gegevensbestand instellen, zoals is-klein, is-medium of is-groot. Indien uitgeschakeld, is het standaard medium.

De items hebben 5 velden, maar alleen de titel en ondertitel zijn verplicht.

```yaml
style: is-light
height: is-medium
items:
  - title: Voorbeeld callout 1
    subtitle: Voorbeeld subtitle 1
    icon: fa-space-shuttle
    description: >
      De voorbeeldbeschrijvingstekst komt hier en kan uit meerdere regels bestaan.

      For example, such as this.
    call_to_action_name: Call to action 1
    call_to_action_link: /page-1/
  - title: Example callout 2
    subtitle: Example subtitle 2
    icon: fa-wrench
    description: >
      De voorbeeldbeschrijvingstekst komt hier en kan uit meerdere regels bestaan.

      For example, such as this.
    call_to_action_name: Call to action 2
    call_to_action_link: /page-2/
  - title: Example callout 3
    subtitle: Example subtitle 3
    icon: fab fa-github
    description: >
      De voorbeeldbeschrijvingstekst komt hier en kan uit meerdere regels bestaan.

      For example, such as this.
    call_to_action_name: Call to action 3
    call_to_action_link: /page-3/
```

## Stel de highlights in de frontmatter in

Om de highlights op uw pagina weer te geven, voegt u een highlight-eigenschap in de frontmatter toe en stelt u deze in op de naam van uw gegevensbestand zonder de extensie.

```yaml
layout: page
title: Example Landing Page
subtitle: This is an example landing page
callouts: example_callouts
```
