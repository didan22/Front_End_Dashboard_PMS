import DataTable from "../../components/dataTable/DataTable"
import "./munisi.scss"

const Munisi = () => {
  return (
    <div className="munisi">
      <div className="info">
        <h1>Munisi</h1>
        <button>Add New Munisi</button>
      </div>
      <DataTable/>
    </div>
  )
} 

export default Munisi
