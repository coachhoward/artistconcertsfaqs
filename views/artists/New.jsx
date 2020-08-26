const React = require("react");
const Default = require('../components/Default');


class New extends React.Component {
  render() {
    return (
      <Default>
      <div>
        <h1>New Artist FAQ page</h1>
        {/* <form action="/artists" method="POST">
         FAQ Title: <input type="text" name="title" />
          <br />
          Faq Answer: <input type="text" name="faq" />
          <br />
          Is FAQ required: <input type="checkbox" name="requireFaq" />
          <br />
          <input type="submit"name="" value="Create FAQ" />
        </form> */}
 <div className="card" style={{width: '30rem'}}>
 
  <div className="card-body">
    <h5 className="card-title">Create New Faq</h5>
    <form action="/artists" method="POST">
         FAQ Title: <input type="text" name="title" />
          <br />
          Faq Answer: <input type="text" name="faq" />
          <br />
          Is FAQ required: <input type="checkbox" name="requireFaq" />
          <br />
          <input type="submit"name="" value="Create FAQ" />
        </form>
    <p className="card-text">Create FAQ's that will help website visitors be more familiar with the products and services.</p>
    <a href="/artists" className="btn btn-primary">HOMEPAGE</a>
  </div>
</div>






      </div>
      </Default>
    );
  }
}

module.exports = New;
