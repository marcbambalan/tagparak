"use client";

import { QueryResultRow } from "@vercel/postgres";
import { DataGrid } from "devextreme-react";

const columns = ["name", "username"];

interface UsersGridProps {
  rows: QueryResultRow[];
}

export default function UsersGrid({ rows }: UsersGridProps) {
  return (
    <DataGrid
      id="usersGrid"
      dataSource={rows}
      defaultColumns={columns}
      showBorders
    />
  );
}
