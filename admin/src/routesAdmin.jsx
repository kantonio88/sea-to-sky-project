import { Route, Switch } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Register/Register";
import AllPosts from "./components/Posts/AllPosts";
import AddPost from "./components/Posts/AddPost";

import React from "react";

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/allposts" component={AllPosts} />
      <Route path="/addpost" component={AddPost} />
      <Route component={Unknown} />
    </Switch>
  );
}

function Unknown() {
  return <div>Error 404 | Page not found!</div>;
}
