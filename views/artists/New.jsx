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
 <div className="d-flex justify-content-center">       
 <div className="card p-3" style={{width: '30rem'}}>
 
  <div className="">
    <h5 className="d-flex justify-content-center">Create New Faq</h5>
    <form className="whole-form " action="/artists" method="POST">

      <div className="form-group">
        <label for="title">FAQ Title:</label>
         <input className="form-control" type="text" name="title" />
         </div>

         <div className="form-group">
           <label for="faq">Faq Answer:</label>
           <input className="form-control" type="text" name="faq" />
          </div>

          <div className="form-group">
            <label className="form-check-label mr-2 mb-3" for="requireFaq">Is FAQ required</label>
           <input className="" type="checkbox" name="requireFaq" />


          <br />
          <div className="form-group d-flex justify-content-end">
          <input className="btn btn-primary" type="submit"name="" value="Create FAQ & Notify Product Owner" />
          </div>

          </div>
        </form>
    <p className="card-text">NOTE:<br></br>When you Create a new FAQ, we will SMS notify the product owner with your request.</p>
    <a href="/artists" className="btn btn-secondary">HOMEPAGE</a>
  </div>
</div>
</div>





      </div>
      </Default>
    );
  }
}

module.exports = New;
