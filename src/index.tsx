import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Blank from "./pages/Blank";
import ContactDetails from "./pages/ContactDetails";
import Contacts from "./pages/Contacts";
import Overview from "./pages/Overview";
import Layout from "./ui/organisms/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        
        <Routes>
          <Route path="/" element={<Overview />} />

          <Route path="/contacts">
            <Route index element={<Contacts />} />
            <Route path=":id" element={<ContactDetails />} />
          </Route>

          <Route path="/setting" element={<Blank />} />
          <Route path="/edit" element={<Blank />} />
          <Route path="/manage" element={<Blank />} />
        </Routes>
        
      </Layout>
    </Router>
  </React.StrictMode>
);
