import { PageRoutes } from './constant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const CustomerRoutes = () => {
  return (
    <Router>
      <Routes>
        {PageRoutes.map((p, index) => {
          const Element = p.element;
          return <Route key={index} path={p.path} element={<Element />} />;
        })}
      </Routes>
    </Router>
  );
};