import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line
} from "recharts";
import {
  FaUserMd,
  FaUserNurse,
  FaStethoscope,
  FaCalendarAlt,
  FaChartLine,
  FaSignOutAlt,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaEllipsisV,
  FaBars,
  FaTimes
} from "react-icons/fa";

const App = () => {
  const [filterText, setFilterText] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [timeFrame, setTimeFrame] = useState("monthly");
  const [notifications, setNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [activePage, setActivePage] = useState("dashboard");
  const [userData, setUserData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sample Data
  useEffect(() => {
    setUserData({
      name: "Dr. Sarah Johnson",
      role: "Senior Cardiologist",
      lastLogin: "2 hours ago"
    });
    setTimeout(() => {
      setNotifications([
        { id: 1, message: "New appointment request from James Wilson", time: "10 mins ago", read: false },
        { id: 2, message: "Lab results for Patient #23456 are ready", time: "45 mins ago", read: false },
        { id: 3, message: "System maintenance scheduled for Sunday", time: "2 hours ago", read: true },
        { id: 4, message: "New article published in Cardiology Journal", time: "1 day ago", read: true },
      ]);
    }, 500);
  }, []);

  const staffData = [
    { id: 1, name: "Dr. John Doe", role: "Cardiologist", status: "available", lastActive: "Online" },
    { id: 2, name: "Jane Smith", role: "Head Nurse", status: "busy", lastActive: "In surgery" },
    { id: 3, name: "Dr. Emily Johnson", role: "Orthopedic Surgeon", status: "available", lastActive: "Online" },
    { id: 4, name: "Michael Brown", role: "Receptionist", status: "away", lastActive: "On break" },
    { id: 5, name: "Dr. Robert Chen", role: "Neurologist", status: "offline", lastActive: "Off duty" },
    { id: 6, name: "Lisa Ray", role: "Pediatric Nurse", status: "available", lastActive: "Online" },
  ];

  const appointmentData = [
    { id: 1, patient: "James Wilson", time: "9:30 AM", status: "confirmed", doctor: "Dr. John Doe" },
    { id: 2, patient: "Mary Thompson", time: "10:15 AM", status: "pending", doctor: "Dr. Emily Johnson" },
    { id: 3, patient: "David Miller", time: "11:00 AM", status: "confirmed", doctor: "Dr. John Doe" },
    { id: 4, patient: "Sarah Davis", time: "1:30 PM", status: "completed", doctor: "Dr. Robert Chen" },
  ];

  const chartData = {
    monthly: [
      { name: "Jan", patients: 42, revenue: 125000 },
      { name: "Feb", patients: 58, revenue: 145000 },
      { name: "Mar", patients: 78, revenue: 195000 },
      { name: "Apr", patients: 64, revenue: 160000 },
      { name: "May", patients: 92, revenue: 230000 },
      { name: "Jun", patients: 105, revenue: 262000 },
    ],
    quarterly: [
      { name: "Q1", patients: 178, revenue: 465000 },
      { name: "Q2", patients: 261, revenue: 652000 },
      { name: "Q3", patients: 297, revenue: 742000 },
      { name: "Q4", patients: 321, revenue: 803000 },
    ],
    yearly: [
      { name: "2020", patients: 842, revenue: 2105000 },
      { name: "2021", patients: 1057, revenue: 2642000 },
      { name: "2022", patients: 1328, revenue: 3320000 },
      { name: "2023", patients: 1576, revenue: 3940000 },
    ]
  };

  const filteredStaff = staffData.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(filterText.toLowerCase());
    const roleMatch = roleFilter === "all" || item.role.toLowerCase().includes(roleFilter.toLowerCase());
    return nameMatch && roleMatch;
  });

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? {...n, read: true} : n));
    setUnreadNotifications(Math.max(0, unreadNotifications - 1));
  };

  const handleLogout = () => {
    alert("You have been logged out successfully");
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "available": return "bg-green-500";
      case "busy": return "bg-yellow-500";
      case "away": return "bg-blue-500";
      case "offline": return "bg-gray-400";
      default: return "bg-gray-400";
    }
  };

  return (
    <div className="w-full h-screen flex overflow-hidden bg-gray-100">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed md:relative z-50 h-screen flex-shrink-0 bg-gradient-to-b from-blue-800 to-blue-900 text-white p-4 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        w-64`}
      >
        <div className="flex justify-between items-center mb-6 mt-2">
          <div className="flex items-center">
            <FaStethoscope className="text-3xl mr-3 text-blue-300" />
            <h1 className="text-2xl font-bold">MediCare</h1>
          </div>
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        <nav className="flex-1 space-y-2">
          <button
            className={`w-full flex items-center py-3 px-4 rounded-lg transition-all duration-200 ${
              activePage === "dashboard" ? "bg-blue-700 shadow-inner" : "hover:bg-blue-700/50"
            }`}
            onClick={() => {
              setActivePage("dashboard");
              setSidebarOpen(false);
            }}
          >
            <FaChartLine className="mr-3" />
            Dashboard
          </button>
          <button
            className={`w-full flex items-center py-3 px-4 rounded-lg transition-all duration-200 ${
              activePage === "patients" ? "bg-blue-700 shadow-inner" : "hover:bg-blue-700/50"
            }`}
            onClick={() => {
              setActivePage("patients");
              setSidebarOpen(false);
            }}
          >
            <FaUserMd className="mr-3" />
            Patients
          </button>
          <button
            className={`w-full flex items-center py-3 px-4 rounded-lg transition-all duration-200 ${
              activePage === "appointments" ? "bg-blue-700 shadow-inner" : "hover:bg-blue-700/50"
            }`}
            onClick={() => {
              setActivePage("appointments");
              setSidebarOpen(false);
            }}
          >
            <FaCalendarAlt className="mr-3" />
            Appointments
          </button>
          <button
            className={`w-full flex items-center py-3 px-4 rounded-lg transition-all duration-200 ${
              activePage === "staff" ? "bg-blue-700 shadow-inner" : "hover:bg-blue-700/50"
            }`}
            onClick={() => {
              setActivePage("staff");
              setSidebarOpen(false);
            }}
          >
            <FaUserNurse className="mr-3" />
            Medical Staff
          </button>
        </nav>
        <div className="mt-auto pt-4 border-t border-blue-700/50">
          <button
            className="w-full flex items-center py-3 px-4 rounded-lg hover:bg-blue-700/50 transition-all"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
          {userData && (
            <div className="flex items-center mt-4 pt-4 border-t border-blue-700/50">
              <FaUserCircle className="text-3xl mr-3 text-blue-300" />
              <div>
                <div className="font-semibold">{userData.name}</div>
                <div className="text-sm text-blue-200">{userData.role}</div>
                <div className="text-xs text-blue-300">Last login: {userData.lastLogin}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden md:ml-0">
        {/* Header */}
        <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center">
            <button 
              className="md:hidden mr-3 text-gray-500 hover:text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars className="text-xl" />
            </button>
            <h2 className="text-xl font-semibold text-gray-800 capitalize flex-1">
              {activePage === "dashboard" ? "Clinic Overview" : activePage}
            </h2>
          </div>
          
          {/* Top right icons & search */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Search */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <FaSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search patients, records..."
                  className="bg-transparent border-none focus:outline-none w-full"
                />
              </div>
            </div>
            {/* Notifications */}
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <FaBell className="text-xl text-gray-600" />
                {unreadNotifications > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {unreadNotifications}
                  </span>
                )}
              </button>
            </div>
            {/* User Avatar */}
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
              {userData?.name.split(" ").map(n => n[0]).join("")}
            </div>
          </div>
        </header>

        {/* Main Content with scroll */}
        <div className="flex-1 overflow-y-auto p-4 w-full max-w-[calc(100vw-1rem)]">
          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-transform transform hover:scale-[1.02] duration-200">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Patients</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">1,250</p>
              <div className="flex items-center text-green-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                12.5% from last month
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-transform transform hover:scale-[1.02] duration-200">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Monthly Revenue</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">₹3.2L</p>
              <div className="flex items-center text-green-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
                </svg>
                +8.3% from last month
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-transform transform hover:scale-[1.02] duration-200">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Appointments</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">320</p>
              <div className="flex items-center text-red-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                +3.2% from last month
              </div>
            </div>
          </div>

          {/* Charts & Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            {/* Patient Stats Chart */}
            <div className="bg-white p-4 rounded-xl shadow w-full overflow-x-auto">
              <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                <h2 className="text-xl font-semibold">Patient Statistics</h2>
                <div className="flex space-x-2">
                  {["monthly", "quarterly", "yearly"].map((frame) => (
                    <button
                      key={frame}
                      onClick={() => setTimeFrame(frame)}
                      className={`px-3 py-1 rounded-md text-sm ${
                        timeFrame === frame
                          ? "bg-blue-100 text-blue-600"
                          : "text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      {frame.charAt(0).toUpperCase() + frame.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData[timeFrame]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip
                    formatter={(value, name) =>
                      name === "revenue" ? [`₹${value.toLocaleString()}`, "Revenue"] : [value, "Patients"]
                    }
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="patients" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6, stroke: '#10b981', strokeWidth:2 }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Today's Appointments */}
            <div className="bg-white p-4 rounded-xl shadow w-full overflow-x-auto">
              <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                <h2 className="text-xl font-semibold">Today's Appointments</h2>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {appointmentData.map((app) => (
                  <div
                    key={app.id}
                    className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition"
                  >
                    <div className="mr-3">
                      <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-lg">
                        <FaUserCircle className="text-blue-600 text-xl" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate">{app.patient}</h3>
                      <p className="text-sm text-gray-600 truncate">{app.doctor}</p>
                    </div>
                    <div className="text-right ml-3 text-sm whitespace-nowrap">
                      <div className="font-semibold">{app.time}</div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          app.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : app.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {app.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Staff Table */}
          <div className="bg-white p-4 rounded-xl shadow w-full overflow-x-auto mb-8">
            <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
              <h2 className="text-xl font-semibold">Medical Staff</h2>
              <div className="flex items-center space-x-2 flex-wrap gap-2">
                <div className="relative w-full md:w-48 flex-shrink-0">
                  <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                    <FaSearch className="text-gray-400 mr-2" />
                    <input
                      type="text"
                      placeholder="Search staff..."
                      value={filterText}
                      onChange={(e) => setFilterText(e.target.value)}
                      className="bg-transparent border-none focus:outline-none w-full"
                    />
                  </div>
                </div>
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="bg-gray-100 rounded-lg px-3 py-2 focus:outline-none w-full md:w-auto"
                >
                  <option value="all">All Roles</option>
                  <option value="doctor">Doctors</option>
                  <option value="nurse">Nurses</option>
                  <option value="surgeon">Surgeons</option>
                  <option value="receptionist">Receptionists</option>
                </select>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors w-full md:w-auto">
                  Add Staff
                </button>
              </div>
            </div>
            {/* Overflow-x for wide table */}
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-max table-auto border-collapse">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="p-3 text-left text-gray-600">Staff Member</th>
                    <th className="p-3 text-left text-gray-600">Role</th>
                    <th className="p-3 text-left text-gray-600">Status</th>
                    <th className="p-3 text-left text-gray-600">Last Activity</th>
                    <th className="p-3 text-right text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStaff.length > 0 ? (
                    filteredStaff.map((staff) => (
                      <tr key={staff.id} className="border-b hover:bg-gray-50 transition">
                        <td className="p-3 flex items-center min-w-[200px]">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3 flex items-center justify-center">
                            <FaUserCircle className="text-blue-600 text-xl" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium truncate">{staff.name}</div>
                            <div className="text-sm text-gray-600">ID: {staff.id}</div>
                          </div>
                        </td>
                        <td className="p-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm whitespace-nowrap">
                            {staff.role}
                          </span>
                        </td>
                        <td className="p-3 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className={`w-3 h-3 rounded-full mr-2 ${getStatusColor(staff.status)}`}></span>
                            <span className="capitalize">{staff.status}</span>
                          </div>
                        </td>
                        <td className="p-3 text-gray-600 whitespace-nowrap">{staff.lastActive}</td>
                        <td className="p-3 text-right">
                          <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-200">
                            <FaEllipsisV />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="p-3 text-center text-gray-500">
                        No staff members found matching your criteria
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;