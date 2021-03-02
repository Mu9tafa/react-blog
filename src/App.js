import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './assets/styles/main.css'
import HomeView from './views/HomeView';
import Blog from './views/Blog';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PostView from './views/PostView';
import NotFound from './views/NotFound';

const AddPostView = React.lazy(() => import('./views/AddPostView'));

const App = () => {
  return (
    <BrowserRouter basename="/app">
      <Header />
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/addpost" render={() => {
          return (
            <Suspense fallback={<h1>loading...</h1>}>
              <AddPostView />
            </Suspense>
          )
        }} />
        <Route path="/posts/:id" component={PostView} />
        <Route render={() => <NotFound />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
