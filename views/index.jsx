// IMPORT REACT
const React = require("react");

// CREAT OUR REACT COMPONENT
class Index extends React.Component {
    render() {
        const fruits = this.props.fruits;
        return(
            <div>
                <nav>
    <a href="/fruits/new">Create a New Fruit</a>
</nav>
                <h1>Fruits Index Page</h1>
                <ul>
                    {fruits.map((fruit, index) =>{
                        return(
                            <li>
                            The <a href={`/fruits/${index}`}>
                                {fruit.name}
                            </a> is{' '}
                            {fruit.color} <br />
                            {fruit.readyToEat
                                ? `It is ready to eat`
                                : `It is not ready to eat...`}
                            <br />
                        </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

// Export component to be used in other parts of our application 

module.exports = Index;