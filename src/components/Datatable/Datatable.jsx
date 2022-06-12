import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatableSource';
import { Link } from 'react-router-dom';
import './Datatable.scss';

const Database = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="dataTableTitle">
        Add New User
        <Link
          to="/users/new"
          style={{ textDecoration: 'none' }}
          className="Link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Database;
