import { Consumer } from "../swapi-context";

const withSwapi = (View, parseFunc) => {
    return (props) => {
        const component = (
            <Consumer>
                {(swapi) => {
                    const methods = parseFunc(swapi)
                    return <View {...methods} {...props}/>
                }}
            </Consumer>
        )
        return component
    }
}

export default withSwapi;