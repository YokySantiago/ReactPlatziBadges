import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Badges = lazy(() => import("./pages/Badges"));
const BadgeNew = lazy(() => import("./pages/BadgeNew"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route exact path="/badges/:id/edit" component={BadgeNew} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
