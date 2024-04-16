import './style.css';
import { Header } from '../../components/header';
import { Body } from '../../components/body';
import { Product } from '../../components/products';

export const HomePage = () => {
  return (
  <>
   <Header></Header>
   <Body></Body>
   <Product></Product>
  </>
  );
};
