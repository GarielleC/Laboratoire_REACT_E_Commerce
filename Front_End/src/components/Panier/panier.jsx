import PropTypes from 'prop-types';

const Panier = (props) => {
    const { productAjout, completed, deleted } = props;

    return (
        <h2>Panier</h2>
    );
};

Panier.propTypes = {
    productAjout: PropTypes.array,
    completed: PropTypes.func,
    deleted: PropTypes.func
};

export default Panier;