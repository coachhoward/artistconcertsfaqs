const React = require('react');

class Show extends React.Component {
    render() {
        // const title = this.props.agent.title;
        // const faq = this.props.agent.faq;
        // const requireFaq = this.props.agent.requireFaq;
        // destructuring
        const { title, faq, requireFaq } = this.props.agent;
        return (
            <div>
                <h1>Agent's' FAQ Show Page</h1>
                <p>The {title} is {faq} </p>
                <p>{requireFaq ? `FAQ is required` : `FAQ Is not required`}</p>
            </div>
        )
    }
}

module.exports = Show;