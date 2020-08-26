const React = require('react');
const Default = require('../components/Default');


class Show extends React.Component {
    render() {
        // const title = this.props.artist.title;
        // const faq = this.props.artist.faq;
        // const requireFaq = this.props.artist.requireFaq;
        // destructuring
        const { title, faq, requireFaq } = this.props.artist;
        return (
            <Default>
            {/* <div>
                <h1>Artist''s FAQ Show Page</h1>
                <p>The {title} is {faq} </p>
                <p>{requireFaq ? `FAQ is required` : `FAQ Is not required`}</p>
            </div> */}

            <div className="jumbotron">
  <h1 className="display-4">Frequently Asked Questions & Answer!</h1>
  
  <p className="lead">{title}</p>
  <hr className="my-4" />
  <p>{faq}</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="/agents" role="button">Return to FAQ's'</a>
  </p>
  

  
</div>


            </Default>
           
        )
    }
}

module.exports = Show;