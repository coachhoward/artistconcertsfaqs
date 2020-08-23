const React = require('react');
const Default = require('../components/Default');


class Index extends React.Component {
    render() {
        const { agents } = this.props;
        return (
            <Default>
            <div className="agents">
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
            </Default>
        )
    }
}

module.exports = Index;