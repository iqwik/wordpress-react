import PropTypes from 'prop-types';

const Post = ({ title }) => (<h1>{title}</h1>);

Post.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Post;
