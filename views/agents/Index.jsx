const React = require('react');

class Index extends React.Component {
    render() {
        const { agents } = this.props;
        return (
            <div>
                <h1>agents FAQ Index Page</h1>
                <nav>
                    <a href="/agents/new">Create a New Faq for agents</a>
                </nav>
                <ul>
                    {
                        agents.map((agent, i) => {
                            return (
                                <li>
                                    The <a href={`/agents/${agent._id}`}>{agent.title}</a> is {agent.faq} <br></br>
                                    {agent.requireFaq ? `FAQ is required` : `FAQ is not ready required`}
                                    {/* /agents/id_of_the_agent/override_post_method */}
                                    <form action={`/agents/${agent._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* Create a link to the edit route /agents/id_of_agent/edit */}
                                    <a href={`/agents/${agent._id}/edit`}>Edit</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;