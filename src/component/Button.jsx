// import { PropTypes } from 'prop-types';
export const Button = (props) => {
    return (
        <button onClick={props.fn}> Click me </button>
    );
};

// Button.propTypes = {
//     fn: PropTypes.function.isRequired,
// };

{/* props type ensure that component is receiving the correct type of props */}