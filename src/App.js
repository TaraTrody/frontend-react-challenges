import React from "react";
import AppRouter from "./components/AppRouter";
import AuthContextProvider from "./contexts/authContexts";

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
