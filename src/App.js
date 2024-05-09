import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { fetchAllRecipes } from "./http/recipesAPI";
import { useState } from "react";
import { changeTotalPosts } from "./store/postsSlice";
function App() {
  const [totalPosts, setTotalPosts] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllRecipes().then((data) => {
      setTotalPosts(data.total);
    });
  }, []);

  const totalPostsMemo = useMemo(() => totalPosts, [totalPosts]);

  useEffect(() => {
    dispatch(changeTotalPosts(totalPostsMemo));
  }, [dispatch, totalPostsMemo]);
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
