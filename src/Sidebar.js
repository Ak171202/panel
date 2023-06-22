import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    
    return (
        <div>
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <li class="nav-item nav-profile">
                        <Link to="/" class="nav-link">
                            <div class="nav-profile-image">
                                <img src="assets/images/faces/face1.jpg" alt="profile" />
                                <span class="login-status online"></span>


                            </div>

                            <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/">
                            <span class="menu-title">Dashboard</span>
                            <i class="mdi mdi-home menu-icon"></i></Link>

                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/user">
                            <span class="menu-title">Tables</span>
                            <i class="mdi mdi-home menu-icon"></i></Link>


                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/status">
                            <span class="menu-title">Status</span>
                            <i class="mdi mdi-home menu-icon"></i></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/updates">
                            <span class="menu-title">Updates</span>
                            <i class="mdi mdi-home menu-icon"></i></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/proj">
                            <span class="menu-title">Projects</span>
                            <i class="mdi mdi-home menu-icon"></i></Link>
                    </li>
                    <li class="nav-item sidebar-actions">
                        <span class="nav-link">
                            <div class="border-bottom">
                                <h6 class="font-weight-normal mb-3">Projects</h6>
                                
                            </div>
                            < Link button class="btn btn-block btn-lg btn-gradient-primary mt-4" to="/add">+ Add a project</Link>

                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
