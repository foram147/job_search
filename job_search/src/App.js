import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CompanyDetails from "../src/components/CompanyDetails";

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/companyDetails/:id" exact component={CompanyDetails} />
      </Router>
    </div>
  );
}

export default App;
