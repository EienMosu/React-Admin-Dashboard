import React from "react";
import styled from "styled-components";
// Components
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import HomePage from "./pages/HomePage";

const Container = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <HomePage />
      </Container>
    </>
  );
};

export default App;
