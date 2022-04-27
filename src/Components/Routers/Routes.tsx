import React from 'react';
import { Route, Routes } from 'react-router-dom';
import pages from './Pages';


const RoutesWrapper = () => {
    return (
        <Routes>
            {pages.map(({path,element},index) => {
                return <Route key={`${path}_${index}`} path={`${path}`} element={element} />;
            })}
        </Routes>
    );
};

export default RoutesWrapper;
