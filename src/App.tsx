import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { RestaurantsContextProvider } from "./Context/RestaurantsContext";

import "./App.css";
import Home from "./Pages/Home";
import RestaurantDetails from "./Pages/RestaurantDetails";
import UpdataPage from "./Pages/UpdatePage";

function App() {
  return (
    <RestaurantsContextProvider>
      <div className='container'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/restaurants/:id' element={<RestaurantDetails/>} />
            <Route path='/restaurants/:id/update' element={<UpdataPage />} />
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
