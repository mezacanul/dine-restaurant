import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Booking from "./pages/Booking";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path="/booking"
                    element={<Booking />}
                />
            </Route>
        </Routes>
    );
}

export default App;
