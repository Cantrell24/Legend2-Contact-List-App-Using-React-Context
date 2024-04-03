import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { AddContact } from "./component/AddContact.jsx";
import { AddressPage } from "./component/AddressPage.jsx";
import { EditContact } from "./component/EditContact.jsx";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div id="developer-layout">
      <BrowserRouter basename={basename}> {/* <-- Mall Map */}
        <ScrollToTop>
          <Navbar /> {/* <-- The glass ceiling you can see anywhere in the mall */}
          <Routes>   {/* <-- Directions you can take */}
            <Route path="/" element={<Home />} /> {/* <-- The first door you have to walk through (like the macys next to the parking lot) */}
            <Route path="/add-contact" element={<AddContact />} /> {/* <-- The destination */}
            <Route path="/single/:theid" element={<Single />} /> {/* <-- The destination */}
            <Route path="/edit-contact" element={<EditContact />} />
            <Route path="/address" element={<AddressPage />} />
            <Route path="*" element={<h1>Not found!</h1>} /> {/* <-- aka the 404: lost and found / the alley you accidentally turn into */}
          </Routes>
          <Footer /> {/* <-- Floor you can see anywhere in the mall */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
