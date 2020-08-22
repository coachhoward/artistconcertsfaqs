const React = require('react');

class Show extends React.Component {
    render() {
        // const title = this.props.artist.title;
        // const faq = this.props.artist.faq;
        // const requireFaq = this.props.artist.requireFaq;
        // destructuring
        const { title, faq, requireFaq } = this.props.artist;
        return (
            <div>
                <h1>Artist''s FAQ Show Page</h1>
                <p>The {title} is {faq} </p>
                <p>{requireFaq ? `FAQ is required` : `FAQ Is not required`}</p>
            </div>
        )
    }
}

module.exports = Show;