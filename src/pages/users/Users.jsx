import { useState } from "react"
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import { useQuery } from "@tanstack/react-query"

const columns = [
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "username",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "fullname",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },]

async function getUsers() {
  const res = await fetch(
    "http://192.168.196.198:2810/users"
  );
  const data = await res.json();
  
  return data.data;
}

const Users = () => {
  const [open, setOpen] = useState(false)
  const { data, isError, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  console.log(data)

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      {isLoading ? ("Loading...") : (<DataTable slug="users" columns={columns} rows={data}/>)}
      {open && <Add slug="user" setOpen={setOpen}/>}
    </div>
  )
} 

export default Users
