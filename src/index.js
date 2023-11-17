import React from 'react';
import ReactDOM from 'react-dom/client';
import{ BrowserRouter, Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



import Home from './views/Home'
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import Contacts from './views/Contacts'
import NotFound from './views/NotFound';
import FullArticle from '../src/components/Generics/FullArtcile';
import { FormProvider } from './components/Generics/FormContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FormProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/News' element={<News />} />
        <Route path='/News/NewsDetails' element={<NewsDetails />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/articles/:articleId" element={<FullArticle />} />
      </Routes>
      </FormProvider>
    </BrowserRouter>
  </React.StrictMode>
);


