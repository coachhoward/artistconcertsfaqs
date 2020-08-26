const React = require('react');
const Default = require('../components/Default');


class Index extends React.Component {
    render() {
        const { agents } = this.props;
        return (
            <Default>
            <div className="agents">
                <h1 className="agents-title">Frequently Asked Questions
                </h1>
                <hr></hr>
                <nav>
                    <a href="/agents/new">Create a New Faq for agents</a>
                </nav>
                <ul className="index-ul">
                    {
                        agents.map((agent, i) => {
                            return (
                                <li id="index-li">
                                    <h1 id="agents-h1"><br></br>
                                    <span>    </span><i class="far fa-comment"></i>
<span>    </span><a className="faq-title" href={`/agents/${agent._id}`}>{agent.title}</a><span>    </span>

{/* <i className="far fa-trash-alt"></i><span>    </span> */}

<span>
<a style={{fontSsize: '3em', color: 'white', textDecoration: 'none'}}className="far fa-edit" href={`/agents/${agent._id}/edit`}></a>
</span>

                                    </h1>

                                    {/* <br></br>

                                    {agent.requireFaq ? `Image: Required` : `Image: Not required`}
                                    <br></br>
                                    <form action={`/agents/${agent._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete" />
                                    </form>
                                    <br></br>
                                    
                                    <a id="edit"href={`/agents/${agent._id}/edit`}>Edit</a> */}
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