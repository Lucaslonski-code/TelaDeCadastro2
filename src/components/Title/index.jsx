import PropTypes from "prop-types";
import { Title } from "./styles.js";

function TitleComponent({ children }) {
    return (
        <Title>{children}</Title>
    )
}

TitleComponent.propTypes = {
    children: PropTypes.node.isRequired
}

export default TitleComponent
