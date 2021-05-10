---
path: "/news/2021-04-16-codecov-security-update/"
date: "2021-04-16"
title: "Codecov security update: geen impact op Open Zaak"
lang: nl
template: default
---

## Codecov security update: geen impact op Open Zaak

Op 15 april werden we door Codecov geïnformeerd over een security incident met mogelijke impact op Open Zaak repositories.
We hebben onze repositories gecontroleerd en vastgesteld dat alles naar verwachting is.

Tenzij je gebruik maakt van de `latest` image tag van de Open Zaak of Open Notificaties Docker Hub images, **hoef je niets te doen**.
Als je _wel_ gebruik maakt van de `latest` tag in deze image(s), dan adviseren we om voor de zekerheid de images opnieuw te pullen 
van Docker Hub. Er is geen indicatie dat er malafide code in deze images terechtgekomen is, maar we kunnen dit niet garanderen
door de manier waarop Docker Hub werkt.

Hieronder kan je in detail nalezen wat er fout ging bij Codecov en hoe het mogelijks impact had op Open Zaak projecten. Tevens
hebben we gedocumenteerd hoe we geverifieerd hebben dat er geen problemen zijn voor ons.

### Codecov's security incident

Codecov is een tool die in Open Zaak, Open Notificaties en de CMIS adapter gebruikt wordt om code-coverage statistieken bij te houden
en visualiseren. Tijdens het automatisch testen van deze codebases worden statistieken verzameld die bijhouden welke lijnen code
uitgevoerd werden, deels uitgevoerd worden of niet uitgevoerd werden. Door dit te delen door het totale aantal lijnen code in de codebase
kan je een dekkingspercentage berekenen.

Het verzamelen van deze statistieken is een onderdeel van onze automatische 
[Continuous Integration](https://github.com/open-zaak/open-zaak/blob/main/.github/workflows/ci.yml) pipeline
op Github. De ruwe statistieken worden naar Codecov toegestuurd met hun Github Action. Deze gebruikt op zijn
beurt weer de "global bash uploader" die op Codecov's website gehost is.

Het is dit bash script die door een ongeautoriseerde derde partij gewijzigd is en actief gebruikt werd
om acess tokens van Github Action workflows te exfiltreren naar third-party servers. Voor meer details kun
je de [statement](https://about.codecov.io/security-update/) van Codecov lezen.

Deze extractie was mogelijk van begin Januari 2021 tot April 2021.

### Impact on the Open Zaak projects

We gebruiken Codecov in vier projecten:

* Open Zaak
* Open Notificaties
* CMIS adapter
* vng-selectielijst

De Open Zaak, Open Notificaties en VNG-Selectielijst projecten publiceren automatisch container images naar Docker Hub.
Dit gebeurt als een build slaagt op de main branch of een getagde release. CMIS adapter is automatisch gepubliceerd
naar de [Python Packaging index](http://pypi.org/) voor getagde releases.

Om dit mogelijk te maken zijn er credentials beschikbaar in de Github Workflow context, in de vorm van
organisatie en/of repository secrets. De aangepaste Codecov bash uploader was in staat om deze credentials
te exfiltreren buiten de workflow scope.

De impact is hieronder per project samengevat.

**Open Zaak**

Open Zaak maakt gebruik van de Github Action, en was hier dus mogelijk door beïnvloed. Echter, we weten dat tijdens een CI run
de code uitgelezen wordt van de repository, en dus vertrouwde code is. Op basis van deze code wordt een Docker image geproduceerd.
Deze images hebben een sha256 checksum. De checksums die dus in de Github Workflow logs terug te zien zijn, zijn vertrouwde checksums.

_Als_ een aanvaller met de gestolen tokens de image tag zou overschrijven, dan gebeurt dit nadat de build afgelopen is, en de resulterende
image zou dan een andere checksum hebben.

We hebben de checksums gecontroleerd voor releases tussen 1 Januari en 1 April 2021:

* [1.3.4](https://github.com/open-zaak/open-zaak/runs/1838882241?check_suite_focus=true)

  Uit CI kwam de `fe10bb4f402119d4b4073388bd60cacca4cea3964ad2c95c4f3507bdb6c377ad` checksum,
  en op [Docker Hub](https://hub.docker.com/layers/openzaak/open-zaak/1.3.4/images/sha256-fe10bb4f402119d4b4073388bd60cacca4cea3964ad2c95c4f3507bdb6c377ad?context=repo) vinden we
  dezelfde checksum.

* [1.3.5](https://github.com/open-zaak/open-zaak/runs/2194702452?check_suite_focus=true)

  Uit CI kwam de `f83a8e33eb6572e196721914a999fff3eca1ef9b742499fbdebe91780491d87c` checksum,
  en op [Docker Hub](https://hub.docker.com/layers/openzaak/open-zaak/1.3.5/images/sha256-f83a8e33eb6572e196721914a999fff3eca1ef9b742499fbdebe91780491d87c?context=repo) vinden we
  dezelfde checksum.

De gebruikers van de `latest` image tag kunnen dit manueel verifiëren door builds te controleren
op de `master` (verleden) en de `main` branches - deze mappen op de `latest` docker image tag. De
CI run logs zijn terug te vinden op [Github](https://github.com/open-zaak/open-zaak/actions?query=branch%3Amain).
Merk op dat CI logs die ouder zijn dan drie maanden niet meer beschikbaar zijn - daarom raden we aan om de
`latest` tag voor de zekerheid opnieuw te pullen.

**Open Notificaties**

De situatie voor Open Notificaties is vergelijkbaar met Open Zaak hierboven.

De relevante releases zijn:

* [1.1.3](https://github.com/open-zaak/open-notificaties/runs/2131685805?check_suite_focus=true)

  Uit CI kwam de `47d001e89b904a1d4450b0d165c072289ba34ee95c7ff41e28b8440c9689a83b`
  checksum, en op [Docker Hub](https://hub.docker.com/layers/openzaak/open-notificaties/1.1.3/images/sha256-47d001e89b904a1d4450b0d165c072289ba34ee95c7ff41e28b8440c9689a83b?context=repo)
  vinden we dezelfde checksum.

* [1.1.4](https://github.com/open-zaak/open-notificaties/runs/2194513677?check_suite_focus=true)

  Uit CI kwam de `2532abe52a37fd8ff90dcdb3564a187be520a973fef94574740e8f340258644f`
  checksum, en op [Docker Hub](https://hub.docker.com/layers/openzaak/open-notificaties/1.1.4/images/sha256-2532abe52a37fd8ff90dcdb3564a187be520a973fef94574740e8f340258644f?context=repo)
  vinden we dezelfde checksum.

Voor de gebruikers van de `latest` image tag geldt hetzelfde advies als voor Open Zaak.

**CMIS adapter**

We maken wel gebruik van Codecov, maar in plaats van de Github Action gebruiken we de
global Python Uploader van PyPI. Deze uploader was niet kwetsbaar.

**vng-selectielijst**

We maken wel gebruik van Codecov, maar in plaats van de Github Action gebruiken we de
global Python Uploader van PyPI. Deze uploader was niet kwetsbaar.

### Welke stappen hebben we ondernomen?

Op 15 april, kort nadat we geïnformeerd werden door Codecov, hebben we alle access tokens/credentials
geroteerd die gebruikt werden in Github Workflows:

* Docker access token voor de `maykinmediaci` account
* PyPI access token voor de `maykinmedia` account

Tegelijkertijd hebben we de Docker Image checksums gecontroleerd van de Open Zaak releases.

Op 16 april hebben we de Open Notificaties checksums gecontroleerd, en onderzocht welke andere
projecten potentieel risico liepen. We hebben ook een draft gemaakt van dit artikel .

Op 7 mei en de daaropvolgende dagen hebben we dit artikel gepubliceerd en aangekondigd op de
verschillende communicatiekanalen om de community te informeren.

### Vragen

Indien je hier vragen over hebt, aarzel niet om contact op te nemen in de Common Ground Slack,
in het #open-zaak kanaal. Doorgaans zijn er leden van de Technical Steering Group aanwezig.

Mocht je zelf nog security-incidenten rapporteren, gelieve dan onze gedocumenteerde 
[richtlijnen (EN)](https://open-zaak.readthedocs.io/en/stable/support/security.html#reporting-security-issues)
te volgen.
