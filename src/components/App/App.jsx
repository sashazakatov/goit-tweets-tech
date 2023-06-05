import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import SharedLayout from "components/SharedLayout";
import Home from "pages/Home";
import Tweets from "pages/Tweets";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>}/>
        <Route path="tweets" element={<Tweets />}/>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  );
}

export default App;