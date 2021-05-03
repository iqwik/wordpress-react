const { useEffect, useMemo } = wp.element;
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavMenu from './pages/NavMenu';
import Home from './pages/Home';
import Component from './Component';
import './App.scss';

import * as selectors from './redux/selectors';
import * as actions from './redux/actions';

const App = ({ isLoading, loadPages, pages }) => {
    useEffect(() => {
        if (!pages) {
            loadPages();
        }
    }, [pages]);

    const renderComponents = useMemo(() => (pages || []).map(({ slug }) => (
        <Route exact path='/:slug' key={`page-${slug}`}>
            <Component />
        </Route>
    )), [pages]);

    return (
        <>
            {isLoading ? 'Идет загрузка...' : (
                <BrowserRouter>
                    <NavMenu {...{ pages }} />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        {renderComponents}
                    </Switch>
                </BrowserRouter>
            )}
        </>
    );
}

App.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    pages: PropTypes.any.isRequired,
}

const mapStateToProps = (state) => ({
    isLoading: selectors.getIsLoading(state),
    pages: selectors.getPages(state),
})

const mapDispatchToProps = {
    loadPages: actions.loadPages,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
