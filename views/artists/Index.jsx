const React = require('react');
const Default = require('../components/Default');

class Index extends React.Component {
    render() {
        const { artists } = this.props;
        return (
            <Default>
            <div>
                <h1>Artists FAQ Index Page</h1>
                <nav>
                    <a href="/artists/new">Create a New Faq for Artists</a>
                </nav>
                <ul>
                    {
                        artists.map((artist, i) => {
                            return (
                                <li>
                                    The <a href={`/artists/${artist._id}`}>{artist.title}</a> is {artist.faq} <br></br>
                                    {artist.requireFaq ? `FAQ is required` : `FAQ is not ready required`}
                                    {/* /artists/id_of_the_artist/override_post_method */}
                                    <form action={`/artists/${artist._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* Create a link to the edit route /artists/id_of_artist/edit */}
                                    <a href={`/artists/${artist._id}/edit`}>Edit</a>
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