import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import SharedLayout from "components/SharedLayout";
import Home from "pages/Home";
import Tweets from "pages/Tweets";

const App = () => {
  return (
    <Routes>
      <Route path="/" component={<SharedLayout />}>
        <Route index component={<Home/>}/>
        <Route path="tweets" component={<Tweets />}/>
      </Route>
      <Route path="*" component={<Navigate to="/" replace />}/>
    </Routes>
  );
}

export default App;