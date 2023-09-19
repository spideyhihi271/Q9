import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import { publicRoutes } from './routes';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Player from './components/Player';

function App() {
    return (
        <div className="App">
            <Router>
                <>
                    <Routes>
                        {publicRoutes.map((route, idx) => {
                            // Check Page
                            const Page = route.component;
                            // Check layout
                            let Layout = DefaultLayout;
                            if (route.layout) Layout = route.layout;
                            // Logic here
                            return (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </>
            </Router>
            <Player />
            <ToastContainer
                position="bottom-left"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                className="translate-y-[-50%]"
            />
        </div>
    );
}

export default App;
