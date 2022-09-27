import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import HomeSection from './sections/HomeSection';
import Recipe from './components/Recipe';
import LoginSection from './sections/LoginSection';
import PrivateRoute from './components/PrivateRoute';
import { useContext } from 'react';
import { UserContext } from './context/UserContextProvider';
import NavBar from './components/NavBar';
import RecipesSection from './sections/RecipesSection';
import CategoriesSection from "./sections/CategoriesSection";
import IngredientsSection from './sections/IngredientsSection';
import RecipeShowSection from './sections/RecipeShowSection';
import IngredientShowSection from './sections/IngredientShowSection';
import RegisterSection from './sections/RegisterSection';
import UserSection from './sections/UserSection';
import AddIngredientSection from './sections/AddIngredientSection';
import AddRecipeSection from './sections/AddRecipeSection';

function App() {

  const { token } = useContext(UserContext);

  return (
    <div className="App">

      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={
            <PrivateRoute>
              <HomeSection />
            </PrivateRoute>
          } />
          <Route path="/recipes" element={
            <PrivateRoute>
              <RecipesSection />
            </PrivateRoute>
          } />
          <Route path="/recipe/:recipeId" element={
            <PrivateRoute>
              <RecipeShowSection />
            </PrivateRoute>
          } />

          <Route path="/recipe/edit/:recipeId" element={
            <PrivateRoute>
              <AddRecipeSection />
            </PrivateRoute>
          } />
          <Route path="/recipe/add" element={
            <PrivateRoute>
              <AddRecipeSection />
            </PrivateRoute>
          } />
          <Route path="/categories" element={
            <PrivateRoute>
              <CategoriesSection />
            </PrivateRoute>
          } />
          <Route path="/ingredients" element={
            <PrivateRoute>
              <IngredientsSection />
            </PrivateRoute>
          } />
          <Route path="/ingredient/:ingredientId" element={
            <PrivateRoute>
              <IngredientShowSection />
            </PrivateRoute>
          } />
          <Route path="/ingredient/edit/:ingredientId" element={
            <PrivateRoute>
              <AddIngredientSection />
            </PrivateRoute>
          } /><Route path="/ingredient/add" element={
            <PrivateRoute>
              <AddIngredientSection />
            </PrivateRoute>
          } />
          <Route path="/user/me" element={
            <PrivateRoute>
              <UserSection />
            </PrivateRoute>
          } />
          <Route path="/login" element={<LoginSection />} />
          <Route path="/register" element={<RegisterSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
