const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New FAQ page</h1>
        <form action="/artists" method="POST">
         title: <input type="text" name="title" />
          <br />
          Faq: <input type="text" name="faq" />
          <br />
          Is FAQ required: <input type="checkbox" name="requireFaq" />
          <br />
          <input type="submit"name="" value="Create FAQ" />
        </form>
      </div>
    );
  }
}

module.exports = New;
