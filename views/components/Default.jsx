const React = require('react');


class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/styles.css" type="text/css"/>
                    <title>FAQs</title>
                </head>
                <body>
             <div className="">
                <section className="placeholder">
                {this.props.children}
                </section>
            </div>
                </body>
            </html>
        )
    }
}

module.exports = Default;