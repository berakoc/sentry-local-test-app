import createSentryDataIdGenerator from './createSentryDataId';

function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}

export default function withSentryId(Component) {
    const displayName = getDisplayName(Component);
    const generateSentryId = createSentryDataIdGenerator(displayName);
    return (props) => <Component {...props} generateSentryId={generateSentryId} />;
}