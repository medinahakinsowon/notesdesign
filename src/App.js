
import './App.css';
import Header from './components/Header';
import NoteListPages from './pages/NoteListPages';
import NotePage from './pages/NotePage'

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: '/',
    element: <NoteListPages />,
  },
  {
    path: "/note/:id",
    element: <NotePage />,

  }
]

)

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
