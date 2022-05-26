export default function createSentryDataIdGenerator(componentId) {
    return (label) => ({
        'data-sentry-id': `${componentId}-${label}-${Math.random().toString(36).substring(2, 15)}-${Math.random().toString(36).substring(2, 15)}`,
    })
}