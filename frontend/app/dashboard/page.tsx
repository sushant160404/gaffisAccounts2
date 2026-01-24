// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// // import Image from "next/image";

// export default function Home() {
//   const router = useRouter();

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//     if (!isLoggedIn) {
//       router.replace("/login");
//     }
//   }, [router]);


//   return (
//     <div className="page-wrapper">
//       {/* Bread crumb and right sidebar toggle  */}
//       <div className="page-breadcrumb">
//         <div className="row">
//           <div className="col-5 align-self-center">
//             <h4 className="page-title">Dashboard</h4>
//             <div className="d-flex align-items-center">
//               <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb">
//                   <li className="breadcrumb-item"><a href="#">Home</a></li>
//                   <li className="breadcrumb-item active" aria-current="page">Library</li>
//                 </ol>
//               </nav>
//             </div>
//           </div>
//           <div className="col-7 align-self-center">
//             <div className="d-flex no-block justify-content-end align-items-center">
//               <div className="me-2">
//                 <div className="lastmonth"></div>
//               </div>
//               <div className="">
//                 <small>LAST MONTH</small>
//                 <h4 className="text-info mb-0 font-medium">$58,256</h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container-fluid">

//         <div className="row">
//           <div className="col-12">

//             <div className="card">
//               <div className="card-body">
//                 <div className="d-md-flex align-items-center">
//                   <div>
//                     <h4 className="card-title">Sales Summary</h4>
//                     <h5 className="card-subtitle">Overview of Latest Month</h5>
//                   </div>
//                   <div className="ms-auto d-flex no-block align-items-center">
//                     <ul className="list-inline fs-2 dl me-3 mb-0">
//                       <li className="list-inline-item text-info">
//                         <i className="ri-checkbox-blank-circle-fill align-middle fs-3"></i>
//                         Iphone
//                       </li>
//                       <li className="list-inline-item text-primary">
//                         <i className="ri-checkbox-blank-circle-fill align-middle fs-3"></i>
//                         Ipad
//                       </li>
//                     </ul>
//                     <div className="dl">
//                       <select className="form-select">
//                         <option value="0" selected>Monthly</option>
//                         <option value="1">Daily</option>
//                         <option value="2">Weekly</option>
//                         <option value="3">Yearly</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">

//                   <div className="col-lg-4 d-md-flex d-lg-block justify-content-between">
//                     <div>
//                       <h1 className="mb-0 mt-4">$6,890.68</h1>
//                       <h6 className="fw-light text-muted">Current Month Earnings</h6>
//                     </div>
//                     <div>
//                       <h3 className="mt-4 mb-0">1,540</h3>
//                       <h6 className="fw-light text-muted mb-md-0 mt-md-2 mt-lg-0 mt-0">
//                         Current Month Sales
//                       </h6>
//                     </div>
//                     <a className="btn btn-info mt-3 p-3 pl-4 pr-4 mb-3" href="javascript:void(0)"
//                     >Last Month Summary</a
//                     >
//                   </div>

//                   <div className="col-lg-8">
//                     <div className="sales-summery"></div>
//                   </div>

//                 </div>
//               </div>

//               <div className="card-body border-top">
//                 <div className="row mb-0">

//                   <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
//                     <div className="d-flex align-items-center">
//                       <div className="me-2">
//                         <span className="text-orange display-5"
//                         ><i className="ri-wallet-2-fill"></i
//                         ></span>
//                       </div>
//                       <div>
//                         <span>Wallet Balance</span>
//                         <h3 className="font-medium mb-0">$3,567.53</h3>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
//                     <div className="d-flex align-items-center">
//                       <div className="me-2">
//                         <span className="text-cyan display-5"
//                         ><i className="ri-money-cny-circle-fill"></i
//                         ></span>
//                       </div>
//                       <div>
//                         <span>Referral Earnings</span>
//                         <h3 className="font-medium mb-0">$769.08</h3>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-3 col-md-6 mb-3 mb-md-0">
//                     <div className="d-flex align-items-center">
//                       <div className="me-2">
//                         <span className="text-info display-5"
//                         ><i className="ri-shopping-bag-fill"></i
//                         ></span>
//                       </div>
//                       <div>
//                         <span>Estimate Sales</span>
//                         <h3 className="font-medium mb-0">5489</h3>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-3 col-md-6">
//                     <div className="d-flex align-items-center">
//                       <div className="me-2">
//                         <span className="text-primary display-5"
//                         ><i data-feather="dollar-sign"></i
//                         ></span>
//                       </div>
//                       <div>
//                         <span>Earnings</span>
//                         <h3 className="font-medium mb-0">$23,568.90</h3>
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//       {/* <footer className="footer text-center">
//           All Rights Reserved by Xtreme admin. Designed and Developed by
//           <a href="https://www.wrappixel.com">WrapPixel</a>.
//         </footer> */}
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import { Search, ChevronDown, Edit2, Trash2, Plus, Filter } from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  phone: string;
  hireDate: string;
  salary: string;
  status: 'Active' | 'Inactive' | 'On Leave';
  avatar?: string;
}

const mockEmployees: Employee[] = [
  {
    id: 'EMP001',
    name: 'John Anderson',
    email: 'john.anderson@gaffis.com',
    department: 'Engineering',
    position: 'Senior Developer',
    phone: '+1 (555) 123-4567',
    hireDate: '2022-03-15',
    salary: '$95,000',
    status: 'Active'
  },
  {
    id: 'EMP002',
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@gaffis.com',
    department: 'Marketing',
    position: 'Marketing Manager',
    phone: '+1 (555) 234-5678',
    hireDate: '2021-07-22',
    salary: '$85,000',
    status: 'Active'
  },
  {
    id: 'EMP003',
    name: 'Michael Chen',
    email: 'michael.chen@gaffis.com',
    department: 'Engineering',
    position: 'Frontend Developer',
    phone: '+1 (555) 345-6789',
    hireDate: '2023-01-10',
    salary: '$78,000',
    status: 'Active'
  },
  {
    id: 'EMP004',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@gaffis.com',
    department: 'HR',
    position: 'HR Specialist',
    phone: '+1 (555) 456-7890',
    hireDate: '2022-05-18',
    salary: '$72,000',
    status: 'On Leave'
  },
  {
    id: 'EMP005',
    name: 'David Thompson',
    email: 'david.thompson@gaffis.com',
    department: 'Sales',
    position: 'Sales Manager',
    phone: '+1 (555) 567-8901',
    hireDate: '2020-11-03',
    salary: '$88,000',
    status: 'Active'
  },
  {
    id: 'EMP006',
    name: 'Jessica Lee',
    email: 'jessica.lee@gaffis.com',
    department: 'Finance',
    position: 'Financial Analyst',
    phone: '+1 (555) 678-9012',
    hireDate: '2023-02-14',
    salary: '$75,000',
    status: 'Inactive'
  }
];

const StatCard = ({ title, value, icon, bgColor, textColor }: any) => (
  <div className={`${bgColor} rounded-lg p-3 sm:p-4 md:p-6 shadow-md`}>
    <div className="flex items-center justify-between gap-2">
      <div className="min-w-0">
        <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">{title}</p>
        <p className={`${textColor} text-xl sm:text-2xl md:text-3xl font-bold mt-1`}>{value}</p>
      </div>
      <div className={`${textColor} opacity-20 text-3xl sm:text-4xl flex-shrink-0`}>{icon}</div>
    </div>
  </div>
);

const StatusBadge = ({ status }: { status: string }) => {
  const statusConfig: any = {
    Active: { bg: 'bg-green-100', text: 'text-green-700' },
    Inactive: { bg: 'bg-red-100', text: 'text-red-700' },
    'On Leave': { bg: 'bg-yellow-100', text: 'text-yellow-700' }
  };
  const config = statusConfig[status] || statusConfig.Inactive;
  return (
    <span className={`${config.bg} ${config.text} text-xs font-semibold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap`}>
      {status}
    </span>
  );
};

export default function EmployeeDashboard() {
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDept, setFilterDept] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const departments = ['All', ...new Set(employees.map(e => e.department))];

  const filteredEmployees = employees
    .filter(emp =>
      (emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterDept === 'All' || emp.department === filterDept)
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'department') return a.department.localeCompare(b.department);
      if (sortBy === 'salary') return parseInt(a.salary) - parseInt(b.salary);
      return 0;
    });

  const stats = {
    total: employees.length,
    active: employees.filter(e => e.status === 'Active').length,
    onLeave: employees.filter(e => e.status === 'On Leave').length,
    departments: new Set(employees.map(e => e.department)).size
  };

  return (
    <div className=" page-wrapper">


      <div className="page-breadcrumb">
        <div className="row">
          <div className="col-5 align-self-center">
            <h4 className="page-title">Dashboard</h4>
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Payrolls</li>
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

      {/* Main Content Card */}
      <div className="bg-white px-18 rounded-lg shadow-lg overflow-hidden">
        {/* Toolbar */}
        <div className="border-b border-gray-200 p-3 sm:p-4 md:p-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Search Bar */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm md:text-base"
              />
            </div>

            {/* Filters Row 1 - Mobile */}
            <div className="grid grid-cols-2 gap-2 md:hidden">
              <select
                value={filterDept}
                onChange={(e) => setFilterDept(e.target.value)}
                className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
              >
                <option value="name">Sort Name</option>
                <option value="department">Sort Dept</option>
                <option value="salary">Sort Salary</option>
              </select>
            </div>

            {/* Filters Row 2 - Mobile & Desktop */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-stretch md:items-center">
              {/* Desktop Filters */}
              <div className="hidden md:flex gap-2 md:gap-4 items-center flex-1">
                <Filter className="h-5 w-5 text-gray-600 flex-shrink-0" />
                <select
                  value={filterDept}
                  onChange={(e) => setFilterDept(e.target.value)}
                  className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="name">Sort by Name</option>
                  <option value="department">Sort by Department</option>
                  <option value="salary">Sort by Salary</option>
                </select>
              </div>

              {/* Add Button - Full width on mobile, auto on desktop */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 md:px-6 py-2 rounded-lg flex items-center justify-center gap-2 font-medium transition text-xs sm:text-sm md:text-base whitespace-nowrap md:flex-shrink-0">
                <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Add Employee</span>
                <span className="sm:hidden">Add</span>
              </button>
            </div>
          </div>
        </div>

        {/* Table - Responsive with horizontal scroll on mobile */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
              <tr>
                <th className="py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">ID</th>
                <th className="py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">Name</th>
                <th className="py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap hidden sm:table-cell">Email</th>
                <th className="py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap hidden lg:table-cell">Dept</th>
                <th className="py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap hidden xl:table-cell">Position</th>
                <th className="py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap hidden xl:table-cell">Phone</th>
                <th className="py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap hidden md:table-cell">Hire Date</th>
                <th className="py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap hidden md:table-cell">Salary</th>
                <th className="py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">Status</th>
                <th className="py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee, index) => (
                  <tr key={employee.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200 hover:bg-blue-50 transition`}>
                    <td className="py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">{employee.id}</td>
                    <td className="py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-gray-900 font-medium">
                      <div className="flex flex-col">
                        <span className="truncate">{employee.name}</span>
                        <span className="text-gray-500 text-xs sm:hidden">{employee.department}</span>
                      </div>
                    </td>
                    <td className="py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-gray-600 hidden sm:table-cell truncate max-w-xs">{employee.email}</td>
                    <td className="py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-gray-600 hidden lg:table-cell whitespace-nowrap">{employee.department}</td>
                    <td className="py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-gray-600 hidden xl:table-cell whitespace-nowrap">{employee.position}</td>
                    <td className="py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-gray-600 hidden xl:table-cell whitespace-nowrap">{employee.phone}</td>
                    <td className="py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-gray-600 hidden md:table-cell whitespace-nowrap">{employee.hireDate}</td>
                    <td className="py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-gray-900 hidden md:table-cell whitespace-nowrap">{employee.salary}</td>
                    <td className="py-2 sm:py-3 md:py-4 text-xs sm:text-sm">
                      <StatusBadge status={employee.status} />
                    </td>
                    <td className="py-2 sm:py-3 md:py-4 text-xs sm:text-sm">
                      <div className="flex gap-0.5 sm:gap-1">
                        <button className="p-1 sm:p-2 text-blue-600 hover:bg-blue-100 rounded transition flex-shrink-0" title="Edit">
                          <Edit2 className="h-3 w-3 sm:h-4 sm:w-4" />
                        </button>
                        <button className="p-1 sm:p-2 text-red-600 hover:bg-red-100 rounded transition flex-shrink-0" title="Delete">
                          <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10} className="py-6 sm:py-8 text-center text-gray-500 text-xs sm:text-sm">
                    No employees found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
            Showing <span className="font-semibold">{filteredEmployees.length}</span> of <span className="font-semibold">{employees.length}</span> employees
          </p>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-initial px-2 sm:px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition text-xs sm:text-sm">
              Previous
            </button>
            <button className="flex-1 sm:flex-initial px-2 sm:px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition text-xs sm:text-sm">
              Next
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}
