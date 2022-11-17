import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import database from "./database";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
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

const rows = { database };

export default function Container() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
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
