import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { Login } from "./features/Users/components/Login";
import { Interface } from "./features/Users/components/Interface";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Interface />} />
        </Routes>
        <Toaster />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
