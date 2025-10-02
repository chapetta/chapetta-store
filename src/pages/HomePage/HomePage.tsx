import { CartOverlay } from "../../components/Cart/CartOverlay";
import { MainSection } from "./MainSection";

export const Home = () => {
    return (
      <>
        <CartOverlay />
        <MainSection />
      </>
    );
};