export default function createSentryDataIdGenerator(componentId) {
    return (label) => ({
        'data-sentry-id': `${componentId}-${label}-${Math.random().toString(24).substring(2, 15)}`,
    })
}