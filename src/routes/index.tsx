import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/HomePage/HomePage';
import { CheckOut } from '../pages/CheckoutPage/CheckOut';
import { PurchaseHistory } from '../pages/PurchaseHistory/PurchaseHistory';
import { Layout } from '../components/Layout/Layout';


export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={ <Layout />}>
        <Route index element={<Home />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/history' element={<PurchaseHistory />} />
      </Route>
    </Routes>
  );
};