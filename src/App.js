import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { AccountPage } from "./pages/AccountPage/AccountPage";
import { CoursesPage } from "./pages/CoursesPage/CoursesPage";
import { CollectionPage } from "./pages/CollectionPage/CollectionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="account/" element={<AccountPage />} >
          <Route path="courses" element={<CoursesPage />} />
          <Route path="collection" element={<CollectionPage />} />
        </Route>
        
        {/* <Route path="planner" element={<PlannerPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
