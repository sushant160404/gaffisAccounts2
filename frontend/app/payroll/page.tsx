"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronDown, Edit2, Trash2, Plus, Filter } from "lucide-react";
import { Eye, Pencil, Download } from "lucide-react";

export default function EmployeeDashboard() {

  const router = useRouter();
    
    // imp
    useEffect(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      if (!isLoggedIn) {
        router.replace("/login");
      }
    }, [router]);
    
  return (
    <div className="page-wrapper">
      <div className="page-breadcrumb">
        <div className="row">
          <div className="col-5 align-self-center">
            <h4 className="page-title">Payroll</h4>
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Payrolls
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-7 align-self-center">
            <div className="d-flex no-block justify-content-end align-items-center">
              <div className="me-2">
                <div className="lastmonth"></div>
              </div>
              <div className="">
                <small>LAST MONTH</small>
                <h4 className="text-info mb-0 font-medium">$58,256</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="table-responsive m-t-40"></div>
          <table
            id="config-table"
            className="table display table-bordered table-striped no-wrap"
          >
            <thead>
              <tr>
                {/* <th>First name</th>
                <th>Last name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Extn.</th>
                <th>E-mail</th> */}
                <th>User</th>
                <th>Net Salary</th>
                <th>Month</th>
                <th>Payment Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td>Tiger</td>
                <td>Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
                <td>5421</td>
                <td>t.nixon@datatables.net</td> */}
                <td>Jairo Monahan IV</td>
                <td>$1,569.5</td>
                <td>January 2026</td>
                <td> - </td>
                <td>Generated</td>
                <td>
                  <div className="flex items-center gap-2">
                    {/* View */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Eye size={18} />
                    </button>

                    {/* Edit */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Pencil size={18} />
                    </button>

                    {/* Delete */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Trash2 size={18} />
                    </button>

                    {/* Payroll Slip */}
                    <button className="flex items-center gap-2 px-4 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white font-medium transition">
                      <Download size={18} />
                      Payroll Slip
                    </button>
                  </div>
                </td>
              </tr>
              {/* user 2  */}

              <tr>
                {/* <td>Tiger</td>
                <td>Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
                <td>5421</td>
                <td>t.nixon@datatables.net</td> */}
                <td>Dr. Lance Kshlerin IV</td>
                <td>$2,072.00</td>
                <td>January 2026</td>
                <td> - </td>
                <td>Generated</td>
                <td>
                  <div className="flex items-center gap-2">
                    {/* View */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Eye size={18} />
                    </button>

                    {/* Edit */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Pencil size={18} />
                    </button>

                    {/* Delete */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Trash2 size={18} />
                    </button>

                    {/* Payroll Slip */}
                    <button className="flex items-center gap-2 px-4 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white font-medium transition">
                      <Download size={18} />
                      Payroll Slip
                    </button>
                  </div>
                </td>
              </tr>
              {/* user 3 */}

              <tr>
                {/* <td>Tiger</td>
                <td>Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
                <td>5421</td>
                <td>t.nixon@datatables.net</td> */}
                <td>Jairo Monahan IV</td>
                <td>$1,569.55</td>
                <td>January 2026</td>
                <td> - </td>
                <td>Generated</td>
                <td>
                  <div className="flex items-center gap-2">
                    {/* View */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Eye size={18} />
                    </button>

                    {/* Edit */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Pencil size={18} />
                    </button>

                    {/* Delete */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Trash2 size={18} />
                    </button>

                    {/* Payroll Slip */}
                    <button className="flex items-center gap-2 px-4 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white font-medium transition">
                      <Download size={18} />
                      Payroll Slip
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                {/* <td>Tiger</td>
                <td>Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
                <td>5421</td>
                <td>t.nixon@datatables.net</td> */}
                <td>Jairo Monahan IV</td>
                <td>$1,569.55</td>
                <td>January 2026</td>
                <td> - </td>
                <td>Generated</td>
                <td>
                  <div className="flex items-center gap-2">
                    {/* View */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Eye size={18} />
                    </button>

                    {/* Edit */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Pencil size={18} />
                    </button>

                    {/* Delete */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Trash2 size={18} />
                    </button>

                    {/* Payroll Slip */}
                    <button className="flex items-center gap-2 px-4 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white font-medium transition">
                      <Download size={18} />
                      Payroll Slip
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                {/* <td>Tiger</td>
                <td>Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
                <td>5421</td>
                <td>t.nixon@datatables.net</td> */}
                <td>Jairo Monahan IV</td>
                <td>$1,569.55</td>
                <td>January 2026</td>
                <td> - </td>
                <td>Generated</td>
                <td>
                  <div className="flex items-center gap-2">
                    {/* View */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Eye size={18} />
                    </button>

                    {/* Edit */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Pencil size={18} />
                    </button>

                    {/* Delete */}
                    <button className="flex items-center justify-center w-10 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white transition">
                      <Trash2 size={18} />
                    </button>

                    {/* Payroll Slip */}
                    <button className="flex items-center gap-2 px-4 h-10 rounded border bg-blue-500 hover:bg-blue-600 text-white font-medium transition">
                      <Download size={18} />
                      Payroll Slip
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
