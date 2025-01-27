import React from "react";
import { GlobalStyle } from "./common/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Toast from "./module/Toast";
import AuthProvider from "./provider/Auth/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./layout/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Toast />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
