export SENTRY_AUTH_TOKEN=d83a7ce2008d4936af399a5069538020b00effe71aad4463bccdab13f72b32fe
export SENTRY_ORG=bera-0j
VERSION=$(sentry-cli releases propose-version)

# Create a release
sentry-cli releases new -p react-todo-app $VERSION

# Associate commits with the release
sentry-cli releases set-commits --auto $VERSION