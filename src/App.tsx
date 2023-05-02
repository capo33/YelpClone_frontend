import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { RestaurantsContextProvider } from "./Context/RestaurantsContext";

import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <RestaurantsContextProvider>
      <div className='container'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/restaurants/:id' element={<RestaurantDetailPage />} />
            <Route path='/restaurants/:id/update' element={<UpdataPage />} /> */}
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
