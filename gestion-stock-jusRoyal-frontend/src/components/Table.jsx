import { MaterialReactTable } from "material-react-table";
import { useMemo } from "react";

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example

export default function Table() {
  const data = [
    {
      name: "John",
      age: 30,
    },
    {
      name: "Sara",
      age: 25,
    },
  ];
  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "No",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorFn: (row) => row.age, //alternate way
        id: "age", //id required if you use accessorFn instead of accessorKey
        header: "Description",
        Header: <i style={{ color: "red" }}>Description</i>, //optional custom markup
      },
    ],
    []
  );
  return <MaterialReactTable columns={columns} data={data} />;
}
