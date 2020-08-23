const React = require("react");
const Default = require('../components/Default');


class New extends React.Component {
  render() {
    return (
      <Default>
      <div className="agents">
        <h1>New Agents FAQ page</h1>
        <form action="/agents" method="POST">
         title: <input type="text" name="title" />
          <br />
          Faq: <input type="text" name="faq" />
          <br />
          Is FAQ required: <input type="checkbox" name="requireFaq" />
          <br />
          <input type="submit"name="" value="Create FAQ" />
        </form>
      </div>
      </Default>
    );
  }
}

module.exports = New;
