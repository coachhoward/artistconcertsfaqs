const React = require("react");
const Default = require('../components/Default');


class Edit extends React.Component {
  render() {
    const { _id, title, faq, requireFaq } = this.props.artist;
    return (
      <Default>
      <div>
        <h1>Edit FAQ for Artists Page</h1>
        {/* url - /artists/id_of_artist? parameter to indicate the request */}
        <form action={`/artists/${_id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={title} /> <br />
          FAQ: <input type="text" name="faq" defaultValue={faq} /> <br />
          Is FAQ required:
          <input type="checkbox" name="requireFaq" checked={requireFaq} />
          <br />
          <input type="submit" name="" value="Submit Changes" />
        </form>
        
      </div>
      </Default>
    );
  }
}

module.exports = Edit;
