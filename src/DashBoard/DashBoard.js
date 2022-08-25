import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import patient from "../Images/patient.png";
import vector from "../Images/Vector.png";
import logo from "../Images/logo.png";
import doctor from "../Images/doctor.png";
import bel from "../Images/bel.png";
import rac1 from "../Images/Rac-1.png";
import rac2 from "../Images/Rac-2.png";
import rac3 from "../Images/Rac-3.png";
import './Dashboard.css';
import { AiFillFolderAdd, AiFillSignal, AiOutlineUserAdd, AiOutlineSlackSquare, AiOutlineSearch } from "react-icons/ai";

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col bg-base-200">


                <div className='container'>
                    <div class="card w-[750px] h-[48px]  shadow-sm ml-8">
                        <div className='flex'>
                            <span className='mt-3 text-primary text-xl'></span>
                            <input type="text" placeholder="Search patient name, date" class="input input-bordered w-[960px]" />
                        </div>
                    </div>

                    <div className='images'>
                        <img className='bel' src={bel} alt="" />
                        <img className='doctor' src={doctor} alt="" />
                    </div>
                </div>



                <div class="w-[1150px] h-[70px] bg-base-300 shadow-sm ml-8 mt-4 items-center">
                    <div className='container-2'>
                        <div className='ml-12'>
                            <p className=' font-bold'>Add Your Bank & Activate Video Consultation</p>
                            <p>Provide secure video consultation to your patients from the comfort of your home</p>
                        </div>

                        <div className='ml-56'>
                            <input type="button" class="button" value="Get Started" />
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-4 gap-4 w-[1160px] ml-6 mt-4">

                    <div className="carousel-item relative w-full">
                        <div className='w-full h-full  top-0 left-0 absolute opacity-70'></div>
                        <div className='w-full h-full flex flex-col absolute top-0 left-0  items-center justify-center'>
                            <div className='py-5 text-white pl-6'>
                                <p>No. of patients</p>
                                <p className='text-xl font-bold'>224</p>
                            </div>
                        </div>
                        <img src={rac1} className="w-full" alt='' />
                    </div>

                    <div className="carousel-item relative w-full">
                        <div className='w-full h-full  top-0 left-0 absolute opacity-70'></div>
                        <div className='w-full h-full flex flex-col absolute top-0 left-0  items-center justify-center'>
                            <div className='py-5 text-white pl-6'>
                                <p>Today’s Revenue</p>
                                <p className='text-xl font-bold'>₹ 224</p>
                            </div>
                        </div>
                        <img src={rac2} className="w-full" alt='' />
                    </div>

                    <div className="carousel-item relative w-full">
                        <div className='w-full h-full  top-0 left-0 absolute opacity-70'></div>
                        <div className='w-full h-full flex flex-col absolute top-0 left-0  items-center justify-center'>
                            <div className='py-5 text-white pl-6'>
                                <p>Monthly Revenue</p>
                                <p className='text-xl font-bold'>₹ 224</p>
                            </div>
                        </div>
                        <img src={rac3} className="w-full" alt='' />
                    </div>

                    <div className="carousel-item relative w-full">
                        <div className='w-full h-full  top-0 left-0 absolute opacity-70'></div>
                        <div className='w-full h-full flex flex-col absolute top-0 left-0  items-center justify-center'>
                            <div className='py-5 text-white pl-6'>
                                <p>Today’s No-show</p>
                                <p className='text-xl font-bold'>3</p>
                            </div>
                        </div>
                        <img src={rac2} className="w-full" alt='' />
                    </div>


                </div>




                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu overflow-y-auto w-[320px] text-base-content">

                    <div>
                        <img className='vector' src={vector} alt="" />
                        <img className='logo' src={logo} alt="" />
                        <p className='title'>DRCFO</p>
                    </div>

                    <li><Link to="/">
                        <img className='w-[27px] mt-2' src={patient} alt="" />
                        <span className='text-[20px] mt-2 font-inter text-primary' >Patient Management</span>
                    </Link></li>

                    <li><Link to="/consulation">
                        <span className='text-[27px]'><AiFillFolderAdd /></span>
                        <span className='text-[20px] font-inter' >Online consultation</span>
                    </Link></li>

                    <li><Link to="/consulation">
                        <span className='text-[27px]'><AiFillFolderAdd /> </span>
                        <span className='text-[20px] font-inter' >Clinic</span>
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

                    <li><Link to="/consulation">
                        <div class="card w-44 p-2 ml-12 bg-base-100 shadow-xl mt-28">
                                <h2 className="text-primary">Create Appointment</h2>
                        </div>
                    </Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;