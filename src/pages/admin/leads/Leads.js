import React, { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { CgSpinner } from "react-icons/cg";
import Sidebar from '../../../components/admin/Sidebar'
import Navbar from '../../../components/admin/Navbar'
import DataTable from "react-data-table-component";
import { useMemo } from "react";
import { db } from "../../../firebase";
// import { toast } from "react-toastify";

const customStyles = {
  rows: {
    style: {
      minHeight: "55px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      backgroundColor: "#7e22ce",
      color: "white",
      fontSize: "15px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      borderRight: "1px solid #eaeaea",
    },
  },
};

const Export = ({ onExport }) => (
  <button
    className="bg-green-600 text-white rounded px-5 py-1.5 text-sm"
    onClick={(e) => onExport(e.target.value)}
  >
    Export Data
  </button>
);

function Leads() {
  const [active, setActive] = useState(true);
  const handleActive = () => {
    setActive(!active);
  };
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let list = [];
      try {
        const collectionRef = collection(db, "enquiries");
        const q = query(collectionRef, orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
          setData(list);
          setFilteredData(list);
        });
        setLoading(false);
      } catch (error) {
        console.log(error)
        // toast.error("Something went wrong!");
      }
    };
    fetchData();
  }, []);

  const actionsMemo = useMemo(
    () => <Export onExport={() => downloadCSV(data)} />,
    [downloadCSV, data]
  );

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Model",
      selector: (row) => row.model,
    },
    {
      name: "Description",
      selector: (row) => row.message,
    },
    {
      name: "Pickup",
      selector: (row) => row.pickup,
    },
    {
      name: "Date",
      selector: (row) => row.timestamp,
    },
  ];

  function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(data[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;
        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function downloadCSV(array) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "leads.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }

  useEffect(() => {
    const result = data?.filter(
      (item) =>
        item.phone.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(result);
  }, [search, data]);
  return (
    <>
      <div className="flex flex-row h-screen">
        <Sidebar active={active} />
        <div className="flex-auto bg-gray-50 overflow-auto">
          <Navbar handleActive={handleActive} />
          <div className="mx-5 mt-5">
            {loading ? (
              <div className="text-center">
                <CgSpinner
                  className="animate-spin flex mx-auto"
                  size={50}
                  color="#7e22ce"
                />
              </div>
            ) : (
              <DataTable
                title="All Leads"
                columns={columns}
                data={filteredData}
                selectableRows
                selectableRowsHighlight
                pagination
                fixedHeader
                fixedHeaderScrollHeight="100vh"
                customStyles={customStyles}
                highlightOnHover
                subHeader
                actions={actionsMemo}
                subHeaderComponent={
                  <SearchComponent search={search} setSearch={setSearch} />
                }
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const SearchComponent = ({ search, setSearch }) => {
  return (
    <div className="flex items-center justify-center">
      <input
        className="border-2 rounded mb-3 py-2 px-4 text-gray-700 font-light focus:outline-none"
        type="text"
        placeholder="Search by name, phone or email"
        value={search}
        style={{ width: "300px" }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Leads;
