import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { ErrorBoundary } from 'react-error-boundary';

export const initSentry = () => process.env.NODE_ENV === "production" &&
Sentry.init({
  dsn: "https://ca67e6aefe154a85bd16a5cb576dbcf4@o1263372.ingest.sentry.io/6442990",
  integrations: [new BrowserTracing()],
  normalizeDepth: 10,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const sentryErrorHandler = (error, componentStack) => {
    Sentry.withScope(scope => {
        scope.setExtra("componentStack", componentStack);
        Sentry.captureException(error);
    });
}

const SentryErrorFallbackComponent = () => "Some error happened";

export const SentryErrorBoundary = ({ children }) => <ErrorBoundary FallbackComponent={SentryErrorFallbackComponent} onError={sentryErrorHandler}>{children}</ErrorBoundary>