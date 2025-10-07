import { CartOverlay } from "../../components/Cart/CartOverlay";
import { InputSearch } from "../../components/InputSearch";
import { MainSection } from "./MainSection";

export const Home = () => {
    return (
      <>
        <InputSearch />
        <CartOverlay />
        <MainSection />
      </>
    );
};