import PropTypes from 'prop-types';

const Page = ({ title }) => (<h1>{title}</h1>);

Page.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Page;
