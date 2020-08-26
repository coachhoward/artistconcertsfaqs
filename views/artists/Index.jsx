const React = require('react');
const Default = require('../components/Default');


class Index extends React.Component {
    render() {
        const { artists } = this.props;
        return (
            <Default>
            <div className="artists">  
                <h1 className="artists-title">Frequently Asked Questions</h1>
                <hr></hr>
                <nav>
                    <a href="/artists/new">Create a New Faq for artists</a>
                </nav>
                <ul className="index-ul">
                    {
                        artists.map((artist, i) => {
                            return (
                                <li id="index-li">
                                    <h1 id="artists-h1"><br></br>
                                    <span>    </span><i class="far fa-comment"></i>
<span>    </span><a className="faq-title" href={`/artists/${artist._id}`}>{artist.title}</a><span>    </span>
<span>    </span>
<span>
<a style={{fontSsize: '3em', color: 'white', textDecoration: 'none'}}className="far fa-edit" href={`/artists/${artist._id}/edit`}></a>
</span>





                                 </h1>
                                    {/* <br></br>
                                    {artist.requireFaq ? `Image: Required` : `Image: Not required`}
                                    <br></br>
                                    <form action={`/artists/${artist._id}?_method=DELETE`} method="POST">
                                        <input type="submit" class="far fa-trash-alt"/>
                                    </form>
                                    <br></br>
                                    <a id="edit"href={`/artists/${artist._id}/edit`}>Edit</a> */}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </Default>
        )
    }
}

module.exports = Index;