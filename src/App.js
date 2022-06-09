import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";
function App() {
  return (
    <div className="App">
      <Box>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
