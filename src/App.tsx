import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from 'components/modules';
// 1
const Welcome = lazy(() => import('pages/Welcome'));
const Register = lazy(() => import('pages/RegisterPage'));
const Login = lazy(() => import('pages/LoginPage'));
// 2
const MainPage = lazy(() => import('pages/MainPage'));
const CategoriesPage = lazy(() => import('pages/CategoriesPage'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));
const RecipePage = lazy(() => import('pages/RecipePage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const ShoppingListPage = lazy(() => import('pages/ShoppingListPage'));
// 3
const NotFound = lazy(() => import('pages/NotFound'));

function App() {
  return (
    <Routes>
      {/* 1 */}
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      {/* 2 */}
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path='/categories/:categoryName' element={<CategoriesPage />} />
        <Route path='/add' element={<AddRecipePage />} />
        <Route path='/favorite' element={<FavoritePage />} />
        <Route path='/recipe/:recipeId' element={<RecipePage />} />
        <Route path='/my' element={<MyRecipesPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/shopping-list' element={<ShoppingListPage />} />
      </Route>
      {/* 3 */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
