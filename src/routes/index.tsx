import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/HomePage/HomePage';
import { CheckOut } from '../pages/CheckoutPage/CheckOut';
import { PurchaseHistory } from '../pages/PurchaseHistory/PurchaseHistory';
import { Layout } from '../components/Layout/Layout';
import { ProductDetails } from '../pages/ProductDetails';


export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={ <Layout />}>
        <Route index element={<Home />} />
        <Route path='/product/:id' element={ <ProductDetails /> } />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/history' element={<PurchaseHistory />} />
      </Route>
    </Routes>
  );
};