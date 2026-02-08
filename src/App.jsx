import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';

import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Work from './pages/Work/Work.jsx';
import Booking from './pages/Booking/Booking.jsx';
import Donation from './pages/Donation/Donation.jsx';
import Goods from './pages/Goods/Goods.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/goods" element={<Goods />} />
      </Route>
    </Routes>
  );
}
