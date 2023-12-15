import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import SearchOrder from "../features/order/SearchOrder";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading"; //global to navigation na to kaya usefull
  return (
    <div className="layout">
      {isLoading && <Loader />} {/* If ever na may nag lo-loading sa buong app since global yung navigation, mag aappear yung loader */}
      <Header />
      <SearchOrder />
      <main>
        <Outlet /> {/* Outlet ng mga child router to */}
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
