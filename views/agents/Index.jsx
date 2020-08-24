const React = require('react');
const Default = require('../components/Default');


class Index extends React.Component {
    render() {
        const { agents } = this.props;
        return (
            <Default>
            <div className="agents">
                <h1 className="agents-title">Agents FAQ Index Page</h1>
                <nav>
                    <a href="/agents/new">Create a New Faq for agents</a>
                </nav>
                <ul className="index-ul">
                    {
                        agents.map((agent, i) => {
                            return (
                                <li id="index-li">
                                    <h1 className="agents-h1">
                                    FAQ: <a className="faq-title" href={`/agents/${agent._id}`}>{agent.title}</a> 
                                    <br></br>
                                    Answer: {agent.faq} 
                                    </h1>
                                    <br></br>
                                    {agent.requireFaq ? `Image: Required` : `Image: Not required`}
                                    <br></br>
                                    <form action={`/agents/${agent._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete" />
                                    </form>
                                    <br></br>
                                    
                                    <a href={`/agents/${agent._id}/edit`}>Edit</a>
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