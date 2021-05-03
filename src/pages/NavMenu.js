const { useCallback, useMemo } = wp.element;
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as selectors from '../redux/selectors';
import * as actions from '../redux/actions';

const NavMenu = ({ currentData, pages, setCurrentData }) => {
    const cleanData = () => setCurrentData({})

    const navList = useMemo(() => (pages || []).map((page) => {
        const { slug, title: { rendered: title } = {} } = page || {}
        return (
            <li>
                <NavLink
                    exact
                    to={`/${slug}`}
                    activeClassName="selected"
                    key={`nav-link-${slug}`}
                    isActive={(match) => {
                        if (match?.isExact && pages?.length && currentData !== page) {
                            setCurrentData(page);
                        }
                    }}
                    >
                    {title}
                </NavLink>
            </li>
        );
    }), [pages]);

    return (
        <ul>
            <li><NavLink exact to='/' activeClassName="selected" onClick={cleanData}>Home</NavLink></li>
            {navList}
            <li><NavLink to='/404' activeClassName="selected" onClick={cleanData}>404</NavLink></li>
        </ul>
    );
}

NavMenu.propTypes = {
    currentData: PropTypes.any.isRequired,
    pages: PropTypes.arrayOf({}).isRequired,
    setCurrentData: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
   currentData: selectors.getCurrentData(state),
});

const mapDispatchToProps = {
    setCurrentData: actions.setCurrentData,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
