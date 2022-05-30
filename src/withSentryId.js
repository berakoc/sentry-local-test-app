import createSentryDataIdGenerator from './createSentryDataId';

export default function withSentryId(Component) {
    
    const generateSentryId = createSentryDataIdGenerator(Component.name);
    return (props) => <Component {...props} generateSentryId={generateSentryId} />;
}