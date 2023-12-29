import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss"
import { Link } from "react-router-dom";


const DataTable = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "avatar", headerName: "Avatar", widht:100,
      renderCell: (params) =>{
        return <img src={params.row.img || "/noavatar.png"} alt="" />
      }
    },
    {
      field: "actions", headerName: "Actions", widht:200,
      renderCell: (params) =>{
        return <div className="action">
          <div className="view">View</div>
          <Link to="">
          <img src="/view.svg" alt=""/>
          </Link>
          <div className="delete">Delete</div>
          <Link>
          <img src="/delete.svg" alt=""/>
          </Link>
        </div>
      }
    },
    {
      field: "status",
      headerName: "Status", 
      widht:100, 
      type:Boolean,
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status : true },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status : true },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status : true },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status : true },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, status : true },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, status : true },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status : true },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status : true },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status : true },
  ];
  return (
    <div className="dataTable">
        <DataGrid
        className="dataGrid"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
          toolbar:{
            showQuickFilter:true,
            quickFilterProps: {debounceMs : 500},
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable