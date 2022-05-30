import * as Sentry from '@sentry/react';

function nativeTryCatch(tryFn, catchFn) {
    try {
        return tryFn();
    } catch (error) {
        catchFn(error);
    }
}

const withSentry = tryCatchFn => (tryFn, catchFn) => tryCatchFn(() => tryFn(), error => {
    catchFn(error);
    Sentry.captureException(error);
});

const standardCatchFn = (error) => {
    console.error(error);
}

export default function tryCatchWithSentry(tryFn, catchFn = standardCatchFn, options = {
    tryCatchFunction: nativeTryCatch,
}) {
    return withSentry(options.tryCatchFunction)(tryFn, catchFn);
};

