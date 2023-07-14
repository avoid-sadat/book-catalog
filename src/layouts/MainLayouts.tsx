import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Product from '../pages/Product';

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
