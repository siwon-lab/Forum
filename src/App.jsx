import './App.css';
import { Route, Routes } from 'react-router-dom';
import Write from './pages/Write';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
   return (
      <>
         <Nav />

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<Write />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<p>404</p>} />
         </Routes>
      </>
   );
}

export default App;
