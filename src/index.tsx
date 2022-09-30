import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
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
            <Route path=":contactId" element={<ContactDetails />} />
          </Route>
        </Routes>
        
      </Layout>
    </Router>
  </React.StrictMode>
);
