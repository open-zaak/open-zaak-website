#!/usr/bin/env bash
set -e # halt script on error

# Lint markdown using the Markdownlint gem with the default ruleset except for:
# MD002 First header should be a top level header : we allow different header hierachy for styling purposes
# MD013 Line length: we allow long lines
# MD029 Ordered list item prefix: we allow lists to be sequentially numbered
# MD033 Inline HTML: we allow inline HTML as needed for community pages layout and templating

bundle exec mdl -r ~MD002,-~MD013,~MD029,~MD033 -i -g '.'

# Build the site
bundle exec jekyll build

# Check for broken links and missing alt tags:
# jekyll does not require extentions like HTML
# ignore edit links to GitHub as they might not exist yet and
# set an extra long timout for test-servers with poor connectivity
# ignore request rate limit errors (HTTP 429) which often come from Twitter or GitHub
# using the files in Jekylls build folder
bundle exec htmlproofer \
    --assume-extension \
    --external-only \
    --alt-ignore \
    --empty-alt-ignore \
    --url-ignore "/github.com/(.*)/edit/" \
    --typhoeus-config '{"timeout":60,"ssl_verifypeer":false,"ssl_verifyhost":"0"}' \
    --http_status_ignore "429","403" \
    ./_site
