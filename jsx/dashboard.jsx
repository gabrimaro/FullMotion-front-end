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
      <div className="user-name">
        <p className="name">Dr. Kath Johnson</p>
        <p>Admin</p>
      </div>
    </div>
    <div className="nav-list">
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
  </div>
  {/*---------End of Sidebar------------*/}
  {/*---------------------------------------------------------------------------------------------------------------------------------------------------Dashboard Content---------------------------------------------------------------------------------------------------------------------------------------------------*/}
  <div className="main-content">
    <div className="contain">
      <h1>Therapist Dashboard</h1>
    </div>
    {/*-------------------------------------------Therapist Dashboard------------------------------------------------------------------*/}
    <div className="dashSections">
      <div className="box 1">
        <div className="profile">
          <title>Profile</title>
          Profile
        </div>
      </div>
      <div className="box 2">
        <div className="sessions 1">
          <title>Recent Therapy Sessions</title>
          Recent Therapy Sessions
        </div>
      </div>
      <div className="box 3">
        <div className="sessions 2">
          <title> Upcoming Sessions</title>
          Upcoming Sessions
        </div>
      </div>
      <div className="box 4">
        <div className="bottom 1">
          <title> Previous Reports</title>
          Previous Reports
        </div>
      </div>
      <div className="box 5">
        <div className="bottom 2">
          <title>Sensor Health</title>
          Sensor Health
        </div>
      </div>
      <div className="box6">
        <div className="button">
          <title>Sensor Health</title>
          <div className="therapybtn">
            <a href="patients.html">
              <button id="therapyBtn" type="button" className="btn">
                {" "}
                Start Session
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*-----------------------------------------------------------------------------------------------------------------------------------------*/}
</>
