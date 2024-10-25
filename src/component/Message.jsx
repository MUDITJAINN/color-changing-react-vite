import PropTypes from 'prop-types';

export const Message = (props ) => {     
    return ( 
    <div>
        <h1 style={{backgroundColor:props.he}}> Hello World! </h1>
    </div>
    );
};

Message.propTypes = {
    he: PropTypes.string.isRequired,
};