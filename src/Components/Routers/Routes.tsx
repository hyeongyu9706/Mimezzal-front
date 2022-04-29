import React from 'react';
import { Route, Routes } from 'react-router-dom';
import pages from './pages';
import { HeaderNav } from 'Components/Common';

const RoutesWrapper = () => {
    return (
        <div className="contents-container">
            <HeaderNav />
            <Routes>
                {pages.map(({ path, element }, index) => {
                    return <Route key={`${path}_${index}`} path={`${path}`} element={element} />;
                })}
            </Routes>
        </div>
    );
};

export default RoutesWrapper;
