import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import { publicRoutes } from './routes';
import './App.scss'


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
    </div>
  )
}

export default App
