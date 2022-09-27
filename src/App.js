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
          <Route path="/login" element={<LoginSection />} />
          <Route path="/register" element={<RegisterSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
