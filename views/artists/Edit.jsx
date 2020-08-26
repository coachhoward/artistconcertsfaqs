const React = require("react");
const Default = require('../components/Default');


class Edit extends React.Component {
  render() {
    const { _id, title, faq, requireFaq } = this.props.artist;
    return (
      <Default>
      <div>
        <h1>Edit FAQ for Artists Page</h1>
        <div className="d-flex justify-content-center">       
 <div className="card p-3" style={{width: '30rem'}}>
 
  <div className="">
    <h5 className="d-flex justify-content-center">Edit Faq</h5>
    <form className="whole-form " action={`/artists/${_id}?_method=PUT`} method="POST">

      <div className="form-group">
        <label for="title">FAQ Title:</label>
         <input className="form-control" type="text" name="title" defaultValue={title}  />
         </div>

         <div className="form-group">
           <label for="faq">Faq Answer:</label>
           <input className="form-control" type="text" name="faq" defaultValue={faq}/>
          </div>

          <div className="form-group">
            <label className="form-check-label mr-2 mb-3" for="requireFaq">Is FAQ required</label>
           <input className="" type="checkbox" name="requireFaq" checked={requireFaq}/>


          <br />
          <div className="form-group d-flex justify-content-end">
          <input className="btn btn-primary" type="submit"name="" value="Edit FAQ" />
          </div>

          </div>
        </form>
        <p className="card-text">NOTE:<br></br>When you create a new FAQ, we will SMS notify the product owner with your request.</p>
    <a href="/artists" className="btn btn-secondary">HOMEPAGE</a>
  </div>
</div>
</div>
    </div>
      </Default>
    );
  }
}

module.exports = Edit;
