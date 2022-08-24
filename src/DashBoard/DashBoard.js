import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import { AiOutlineAppstore,AiFillFolderAdd, AiFillSignal,AiOutlineUserAdd,AiOutlineSlackSquare } from "react-icons/ai";

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
            <h2 className='text-4xl text-purple-500'>My DashBoard</h2>
         <Outlet></Outlet>
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-[320px] bg-base-200 text-base-content">
          
            <li><Link to="/">
            <span className='text-[27px] text-primary'><AiOutlineAppstore /></span>
            <span className='text-[20px] text-primary' >Patient Management</span>
            </Link></li>

            <li><Link to="/consulation">
            <span className='text-[27px]'><AiFillFolderAdd /></span>
            <span className='text-[20px]' >Online consultation</span>
                </Link></li>

            <li><Link to="/consulation">
            <span className='text-[27px]'><AiFillFolderAdd /> </span>
            <span className='text-[20px]' >Clinic</span>
                </Link></li>

            <li><Link to="/consulation">
            <span className='text-[27px]'><AiOutlineUserAdd /></span>
            <span className='text-[20px]' >Patients</span>
                </Link></li>

            <li><Link to="/consulation">
            <span className='text-[27px]'><AiFillSignal /></span>
            <span className='text-[20px] ' >Analytics</span>
                </Link></li>

            <li><Link to="/consulation">
            <span className='text-[27px]'><AiOutlineSlackSquare /></span>
            <span className='text-[20px]' >Legal </span>
                </Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;