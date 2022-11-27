import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { data } from "./data/database";
import { columns } from "./data/gridcolumns";
import Box from "@mui/material/Box";

export default function Container() {
  const rows = data
    .filter((user) => user.assignment)
    .map((assignment, index) => ({
      ...assignment,
      id: index + 1,
    }));
  return (
    <Box sx={{ height: 800, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // pageSize={15}
        // rowsPerPageOptions={[15]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
