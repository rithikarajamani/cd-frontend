import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { FilterMatchMode } from "primereact/api";
import { PrimeIcons } from "primereact/api";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useFont } from "../fonts/fontContext";
import "./table.css";

function Table() {
  const fontStyles = useFont();
  const [filters, setFilters] = useState({
    global: {
      value: "",
      matchMode: FilterMatchMode.CONTAINS,
    },
  });

  const [data, setData] = useState([
    {
      id: 1,
      client: "john",
      company: "ATS",
      designation: "BA",
      contact: 6369912399,
      email: "john@gmail.com",
      emailSent: "27 Mar 2024",
      clientReply: "27 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "27 Mar 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "eye",
      key: "2",
      actions: "",
    },
    {
      id: 2,
      client: "shelly",
      company: "ATS",
      designation: "Devloper",
      contact: 6369912399,
      email: "shelly@gmail.com",
      emailSent: "27 Mar 2024",
      clientReply: "27 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "27 Mar 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "eye",
      key: "3",
      actions: "",
    },
    {
      id: 3,
      client: "murphy",
      company: 25,
      designation: "Tester",
      contact: 6369912399,
      email: "murphy@gmail.com",
      emailSent: "27 Mar 2024",
      clientReply: "27 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "27 Mar 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "eye",
      key: "3",
      actions: "",
    },
    {
      id: 4,
      client: "cecee",
      company: "ATS",
      designation: "Designer",
      contact: 6369912399,
      email: "cecee@gmail.com",
      emailSent: "27 Mar 2024",
      clientReply: "27 Mar 2024",
      followUp: "27 Mar 2024",
      status: "INACTIVE",
      meetingHeld: "27 Mar 2024",
      enquiry: "YES",
      proposal: "NO",
      remarks: "eye",
      key: "4",
      actions: "",
    },
    {
      id: 5,
      client: "mary",
      company: "ATS",
      designation: "Lead",
      contact: 6369912399,
      email: "mary@gmail.com",
      emailSent: "27 Mar 2024",
      clientReply: "27 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "27 Mar 2024",
      enquiry: "NO",
      proposal: "YES",
      remarks: "eye",
      key: "5",
      actions: "",
    },
    {
      id: 6,
      client: "memaw",
      company: "ATS",
      designation: "DDO",
      contact: 6369912399,
      email: "memaw@gmail.com",
      emailSent: "27 Mar 2024",
      clientReply: "27 Mar 2024",
      followUp: "27 Mar 2024",
      status: "INACTIVE",
      meetingHeld: "27 Mar 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "eye",
      key: "6",
      actions: "",
    },
    {
      id: 7,
      client: "George",
      company: "ATS",
      designation: "CTO",
      contact: 6369912399,
      email: "george@gmail.com",
      emailSent: "27 Mar 2024",
      clientReply: "27 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "27 Mar 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "eye",
      key: "7",
      actions: "",
    },
    {
      id: 8,
      client: "Missy",
      company: "ATS",
      designation: "CEO",
      contact: 6369912399,
      email: "missy@gmail.com",
      emailSent: "27 Mar 2024",
      clientReply: "27 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "27 Mar 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "eye",
      key: "8",
      actions: "",
    },
    {
      id: 9,
      client: "Sushi",
      company: "ATS",
      designation: "GM",
      contact: 6369912399,
      email: "sushi@gmail.com",
      emailSent: "27 Mar 2024",
      clientReply: "27 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "27 Mar 2024",
      enquiry: "NO",
      proposal: "YES",
      remarks: "eye",
      key: "9",
      actions: "",
    },
    {
      id: 10,
      client: "Shubh",
      company: "ATS",
      designation: "PM",
      contact: 6369912399,
      email: "shubh@gmail.com",
      emailSent: "27 Mar 2024",
      clientReply: "27 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "27 Mar 2024",
      enquiry: "YES",
      proposal: "NO",
      remarks: "eye",
      key: "10",
      actions: "",
    },
    {
      id: 11,
      client: "penny",
      company: "ATS",
      designation: "BA",
      contact: 6369912399,
      email: "penny@gmail.com",
      emailSent: "27 Mar 2024",
      clientReply: "27 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "27 Mar 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "eye",
      key: "2",
      actions: "",
    },
    {
      id: 12,
      client: "howard",
      company: "ATS",
      designation: "BA",
      contact: 6369912399,
      email: "howard@gmail.com",
      emailSent: "27 Mar 2024",
      clientReply: "27 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "27 Mar 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "eye",
      key: "2",
      actions: "",
    },
  ]);

  const statusOptions = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];
  const enquiryOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];
  const proposalOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const onStatusChange = (rowData, e) => {
    const updatedData = [...data];
    const index = updatedData.findIndex((item) => item.id === rowData.id);
    if (index !== -1) {
      updatedData[index].status = e.value;
      setData(updatedData);
    }
  };
  const onEnquiryChange = (rowData, e) => {
    const enquiryUpdatedData = [...data];
    const index = enquiryUpdatedData.findIndex(
      (item) => item.id === rowData.id
    );
    if (index !== -1) {
      enquiryUpdatedData[index].enquiry = e.value;
      setData(enquiryUpdatedData);
    }
  };
  const onProposalChange = (rowData, e) => {
    const proposalUpdatedData = [...data];
    const index = proposalUpdatedData.findIndex(
      (item) => item.id === rowData.id
    );
    if (index !== -1) {
      proposalUpdatedData[index].proposal = e.value;
      setData(proposalUpdatedData);
    }
  };

  return (
    <div style={fontStyles}>
      {/* <h1>Clients</h1> */}
      <span className="p-input-icon-left">
        <i className="fa fa-search"></i>
        <InputText
          placeholder="Search"
          value={filters.global.value}
          onChange={(e) =>
            setFilters({
              global: {
                value: e.target.value,
                matchMode: FilterMatchMode.CONTAINS,
              },
            })
          }
        />
      </span>
      <DataTable
        value={data}
        filters={filters}
        paginator
        rows={10}
        className="p-datatable-customers"
        style={fontStyles}
      >
        <Column field="id" header="ID" sortable />
        <Column field="client" header="CLIENT" sortable />
        <Column field="company" header="COMPANY" sortable />
        <Column field="designation" header="DESIGNATION" sortable />
        <Column field="contact" header="CONTACT" sortable />
        <Column field="email" header="EMAIL" sortable />
        <Column field="emailSent" header="EMAIL SENT" sortable />
        <Column field="clientReply" header="CLIENT REPLY" sortable />
        <Column field="followUp" header="FOLLOW UP" sortable />
        <Column
          field="status"
          header="STATUS"
          sortable
          body={(rowData) => (
            <Dropdown
              value={rowData.status}
              options={statusOptions}
              onChange={(e) => onStatusChange(rowData, e)}
              placeholder="Inactive"
            />
          )}
        />
        <Column field="meetingHeld" header="MEETING HELD" sortable />
        <Column
          field="enquiry"
          header="ENQUIRY RECEIVED"
          sortable
          body={(rowData) => (
            <Dropdown
              value={rowData.enquiry}
              options={enquiryOptions}
              onChange={(e) => onEnquiryChange(rowData, e)}
              placeholder="No"
            />
          )}
        />
        <Column
          field="proposal"
          header="PROPOSAL GIVEN"
          sortable
          body={(rowData) => (
            <Dropdown
              value={rowData.proposal}
              options={proposalOptions}
              onChange={(e) => onProposalChange(rowData, e)}
              placeholder="No"
            />
          )}
        />
        <Column field="remarks" header="REMARKS" />
        <Column field="action" header="ACTIONS" />
      </DataTable>
    </div>
  );
}

export default Table;
