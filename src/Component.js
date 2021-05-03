import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Page from './pages/Page';
import NotFound from './pages/NotFound';

import * as selectors from './redux/selectors';

const Component = ({ currentData }) => {
    const { useCallback } = wp.element;
    const { slug } = useParams();

    const renderComponent = useCallback((data) => {
        const { title: { rendered: title } = {}, type } = data || {}
        return Boolean(slug) && (title && type === 'page') ? <Page {...{ title }} /> : <NotFound />
    }, [currentData])


    return (renderComponent(currentData));
}

Component.propTypes = {
    children: PropTypes.node.isRequired,
    currentData: PropTypes.any,
}

Component.defaultProps = {
    currentData: null,
}

const mapStateToProps = (state) => ({
    currentData: selectors.getCurrentData(state),
});

export default connect(mapStateToProps)(Component);
