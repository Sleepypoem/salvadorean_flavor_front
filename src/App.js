import './App.css';
import { useEffect } from 'react';
import Login from './components/Login';
import Recipe from './components/Recipe';

function App() {

  const testRecipe = {
    "recipe_id": 1,
    "name": "Salmorejo Cordobez",
    "steps": "En un bol coloco el pan y lo cubro con el puré de tomate dejando que se impregne durante unos diez minutos.Pasado ese tiempo,\r\nincorporo el diente de ajo y trituro bien con la batidora o con la Thermomix y obtengo una crema espesa de pan y tomate.La proporción de pan que yo uso es estupenda para esta textura,\r\npero podéis variarla en función del agua que tengan los tomates que utilicéis y de lo consistente que sea la miga.A continuación incorporo el aceite de oliva virgen extra,\r\nprocurad que sea un buen aceite de oliva virgen extra que conseguirá la emulsión perfecta y un resultado cremoso y espeso.Tras echar el aceite volvemos a turbinar todo en el robot de cocina o a base de batidora y paciencia hasta que nuestro salmorejo sea uniforme,\r\ncon un bonito color anaranjado y suficientemente compacto como para aguantar sobre su superficie los tradicionales tropezones de guarnición con los que se decora cada ración.",
    "category_id": null,
    "created_at": "2022-09-13T00:00:00.000000Z",
    "updated_at": "2022-09-13T00:00:00.000000Z",
    "ingredients": [
      {
        "ingredient_id": 1,
        "name": "Ajo",
        "created_at": "2022-09-13T00:00:00.000000Z",
        "updated_at": "2022-09-13T00:00:00.000000Z",
        "pivot": {
          "recipe_id": 1,
          "ingredient_id": 1
        }
      },
      {
        "ingredient_id": 2,
        "name": "Pan de hogaza",
        "created_at": "2022-09-13T00:00:00.000000Z",
        "updated_at": "2022-09-13T00:00:00.000000Z",
        "pivot": {
          "recipe_id": 1,
          "ingredient_id": 2
        }
      },
      {
        "ingredient_id": 3,
        "name": "Tomate",
        "created_at": "2022-09-13T00:00:00.000000Z",
        "updated_at": "2022-09-13T00:00:00.000000Z",
        "pivot": {
          "recipe_id": 1,
          "ingredient_id": 3
        }
      },
      {
        "ingredient_id": 4,
        "name": "Aceite de oliva",
        "created_at": "2022-09-13T00:00:00.000000Z",
        "updated_at": "2022-09-13T00:00:00.000000Z",
        "pivot": {
          "recipe_id": 1,
          "ingredient_id": 4
        }
      }
    ],
    "image": {
      "image_id": 2,
      "title": "Salmorejo Cordobès_image",
      "image": "default_recipe.jpg",
      "imageable_id": 1,
      "imageable_type": "App\\Models\\Recipe",
      "created_at": "2022-09-16T02:43:39.000000Z",
      "updated_at": "2022-09-16T02:43:39.000000Z"
    },
    "category": null,
    "tags": [
      {
        "tag_id": 1,
        "name": "Vegan",
        "created_at": "2022-09-16T02:43:39.000000Z",
        "updated_at": "2022-09-16T02:43:39.000000Z",
        "pivot": {
          "recipe_id": 1,
          "tag_id": 1
        }
      },
      {
        "tag_id": 2,
        "name": "Easy",
        "created_at": "2022-09-16T02:43:39.000000Z",
        "updated_at": "2022-09-16T02:43:39.000000Z",
        "pivot": {
          "recipe_id": 1,
          "tag_id": 2
        }
      }
    ]
  }

  return (
    <div className="App">
      <Login />
      <Recipe recipe={testRecipe} />
    </div>
  );
}

export default App;
