import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import database from "./database.js";

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "assignment",
    headerName: "Assignment",
    hoemoeilijk: 150,
    editable: true,
  },
  {
    field: "difficulty",
    headerName: "Difficulty",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fun",
    headerName: "Fun",
    type: "number",
    width: 110,
    editable: true,
  },
];

export default function Container() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={database}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
