---
path: "/en/news/2021-04-16-codecov-security-update/"
date: "2021-04-16"
title: "Codecov security update: Open Zaak not affected"
lang: en
template: default
---

## Codecov security update: Open Zaak is not affected

On April 15th, we were informed by Codecov that they had a security incident that
possibly affected Open Zaak repositories. We have checked our repositories and verified
that everything is as expected.

Unless you are using the `latest` image tag of Open Zaak
or Open Notificaties Docker Hub images, **no action is required**. If you _do_ use the `latest` 
tag in any of those images, _and_ those images are old enough to no longer have build logs, then 
our advice is to pull these images again. There is no indication that they have been compromised, 
but we cannot guarantee this because of the nature of how Docker Hub operates.

Below, you can find a detailed breakdown of the security incident at Codecov, how it
possibly impacted Open Zaak projects and how we verified that we were not impacted by
this.

### Codecov and their security incident

Codecov is a tool used in Open Zaak, Open Notificaties and the CMIS adapter used to
track and visualize code coverage statistics. During the process of automatically
testing these codebases, statistics are collected on which lines of code are hit,
partially hit or missed during the test runs. Divided by the number of total lines in
the code base, you arrive at a coverage percentage.

The collection of statistics is performed as part of our automated
[Continuous Integration](https://github.com/open-zaak/open-zaak/blob/main/.github/workflows/ci.yml)
pipeline on Github. The raw statistics are uploaded to Codecov's infrastructure using
their Github Action, which in turn uses the "global bash uploader" hosted on Codecov's
website.

It is this bash script that was altered by an unauthorized third party, and actively
used to exfiltrate access tokens from Github Action workflows to third party servers.
For more details, please read the detailed
[statement](https://about.codecov.io/security-update/) from Codecov.

This exfiltration was possible from the beginning of January 2021, until April 2021.

### Impact on the Open Zaak projects

Codecov is used in four projects:

* Open Zaak
* Open Notificaties
* CMIS adapter
* vng-selectielijst

The Open Zaak, Open Notificaties and VNG-Selectielijst projects automatically publish
Docker Images to Docker Hub after a succesful build on either the main branch or tagged
releases. CMIS Adapter is automatically published to the
[Python Packaging index](http://pypi.org/) on tagged releases.

To be able to do this, credentials are provided to the Github Workflow context in the
form of organization and/or repository secrets. The modified Codecov bash uploader
was able to extract these credentials outside of the workflow scope.

The impact per project is summarized below.

**Open Zaak**

Open Zaak uses the Github Action, and is therefore affected. However, we know that
during a CI run, the code is checked out from the repository and remained trusted code.
From this code, a Docker image is produced which has a sha256 checksum. The checksum
reported in Github Workflows log is the trusted, uncompromised checksum.

_If_ an attacker would overwrite the image tag using the extracted token, this would
happen after the build finishes, and the image would have a different checksum.

We verified the checksums for Open Zaak releases between Jan. 1st and April 1st:

* [1.3.4](https://github.com/open-zaak/open-zaak/runs/1838882241?check_suite_focus=true)

  CI produced the `fe10bb4f402119d4b4073388bd60cacca4cea3964ad2c95c4f3507bdb6c377ad` checksum,
  and on [Docker Hub](https://hub.docker.com/layers/openzaak/open-zaak/1.3.4/images/sha256-fe10bb4f402119d4b4073388bd60cacca4cea3964ad2c95c4f3507bdb6c377ad?context=repo) we find
  the same checksum.

* [1.3.5](https://github.com/open-zaak/open-zaak/runs/2194702452?check_suite_focus=true)

  CI produced the `f83a8e33eb6572e196721914a999fff3eca1ef9b742499fbdebe91780491d87c` checksum,
  and on [Docker Hub](https://hub.docker.com/layers/openzaak/open-zaak/1.3.5/images/sha256-f83a8e33eb6572e196721914a999fff3eca1ef9b742499fbdebe91780491d87c?context=repo) we find
  the same checksum.

For people using the `latest` image tag, you can verify this manually. The `master` (past)
and `main` (present) branches map to the `latest` image tag. CI run logs can be seen
on [Github](https://github.com/open-zaak/open-zaak/actions?query=branch%3Amain). Note
that CI logs older than three months are no longer available, which is why we recommend
to re-pull the `latest` tag to be sure.

**Open Notificaties**

The situation for Open Notificaties is similar to Open Zaak above.

The relevant releases are:

* [1.1.3](https://github.com/open-zaak/open-notificaties/runs/2131685805?check_suite_focus=true)

  CI produced the `47d001e89b904a1d4450b0d165c072289ba34ee95c7ff41e28b8440c9689a83b`
  checksum, and on [Docker Hub](https://hub.docker.com/layers/openzaak/open-notificaties/1.1.3/images/sha256-47d001e89b904a1d4450b0d165c072289ba34ee95c7ff41e28b8440c9689a83b?context=repo)
  we find the same checksum.

* [1.1.4](https://github.com/open-zaak/open-notificaties/runs/2194513677?check_suite_focus=true)

  CI produced the `2532abe52a37fd8ff90dcdb3564a187be520a973fef94574740e8f340258644f`
  checksum, and on [Docker Hub](https://hub.docker.com/layers/openzaak/open-notificaties/1.1.4/images/sha256-2532abe52a37fd8ff90dcdb3564a187be520a973fef94574740e8f340258644f?context=repo)
  we find the same checksum.

Users of the `latest` tag should follow the advice as for Open Zaak.

**CMIS adapter**

While we use Codecov, we do not use the Github Action, but the global Python uploader
from PyPI. This uploader was not affected.

**vng-selectielijst**

While we use Codecov, we do not use the Github Action, but the global Python uploader
from PyPI. This uploader was not affected.

### Which steps have we taken?

On April 15th, shortly after learning about the incident, we have revoked any access
tokens/credentials exposed to Github Workflows:

* Docker access token for the `maykinmediaci` account
* PyPI access token for the `maykinmedia` account

At the same time, we verified the Docker Image checksums of the Open Zaak releases.

On April 16th, we verified the Open Notificaties checksums, and checked which other
projects could potentially be impacted. We also drafted this news article.

On May 7th and the following days, the news article was published and announced on various communication
channels.

### Questions

If you have any questions at this, do not hesitate to contact us on the Common Ground
Slack in the #open-zaak channel. Members of the Technical Steering Group are usually
around.

If you need to report any security incidents, please follow our documented
[guidelines](https://open-zaak.readthedocs.io/en/stable/support/security.html#reporting-security-issues).
