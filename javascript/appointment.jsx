<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/*<meta http-equiv="refresh" content="10">       <---refreshes page evry 10 sec*/}
  <title>Therapist Dashboard</title>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="../css/style.css" />
  <div className="sidebar">
    <div className="top">
      <div className="logo">
        <i className="bx bxl-codepen" /> {/*change logo*/}
        <span>FullMotion</span>
      </div>
      <i className="bx bx-menu" id="button" />
    </div>
    <div className="user">
      <img src="../images/pfp.jpg" alt="me" className="userPFP" />
      <div>
        <p className="name">Dr. Kath Johnson</p>
        <p>Admin</p>
      </div>
    </div>
    <ul>
      <li>
        <a href="dashboard.html">
          <i className="bx bxs-grid-alt" />
          <span className="nav-item">Dashboard</span>
        </a>
        <span className="tooltip">Dashboard</span>
      </li>
      <li>
        <a href="patients.html">
          <i className="bx bx-body" />
          <span className="nav-item">Patients</span>
        </a>
        <span className="tooltip">Patients</span>
      </li>
      <li>
        <a href="notifications.html">
          <i className="bx bxs-bell" />
          <span className="nav-item">Notifications</span>
        </a>
        <span className="tooltip">Notifications</span>
      </li>
      <li>
        <a href="appointments.html">
          <i className="bx bxs-calendar" />
          <span className="nav-item">Appointments</span>
        </a>
        <span className="tooltip">Appointments</span>
      </li>
      <li>
        <a href="messages.html">
          <i className="bx bxs-message-dots" />
          <span className="nav-item">Messages</span>
        </a>
        <span className="tooltip">Messages</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-log-out" />
          <span className="nav-item">Logout</span>
        </a>
        <span className="tooltip">Logout</span>
      </li>
    </ul>
  </div>
  {/*---------End of Sidebar------------*/}
  <div className="main-content">
    <div className="contain">
      <h1>Appointments</h1>
    </div>
  </div>
</>
