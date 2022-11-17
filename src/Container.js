import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { data } from "./database";

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
    width: 150,
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

let uniqe = {};
const singleAssignment = data.filter(
  (assignment) =>
    !uniqe[assignment.assignment] && (uniqe[assignment.assignment] = true)
);

const rows = [
  singleAssignment.map((assignment, index) => ({
    ...assignment,
    id: index + 1,
  })),
];

export default function Container() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
