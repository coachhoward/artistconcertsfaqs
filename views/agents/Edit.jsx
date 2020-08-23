const React = require("react");
const Default = require('../components/Default');


class Edit extends React.Component {
  render() {
    const { _id, title, faq, requireFaq } = this.props.agent;
    return (
      <Default>
      <div className="agents">
        <h1>Edit FAQ for agents Page</h1>
        {/* url - /agents/id_of_agent? parameter to indicate the request */}
        <form action={`/agents/${_id}?_method=PUT`} method="POST">
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
