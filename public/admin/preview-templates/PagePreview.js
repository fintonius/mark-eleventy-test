const React = require('react');

const PagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS();

    return (
        <div>
            <h1>{data.title}</h1>
            <div>{widgetFor('body')}</div>
        </div>
    );
};

module.exports = PagePreview;