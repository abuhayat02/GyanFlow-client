import { IoCreateOutline, IoHome, IoSearch } from "react-icons/io5";

import { BiSolidUpArrow } from "react-icons/bi";
import { FaDollarSign, FaRegStar, FaRegUser, FaUsers } from "react-icons/fa";

import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";
import { VscVmRunning } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";
import { MdDashboard, MdOutlineCreateNewFolder, MdOutlinePayments } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { PiVideoCameraLight } from "react-icons/pi";
import { GrAnnounce } from "react-icons/gr";
import { AiTwotoneHome } from "react-icons/ai";
const Sidebar = () => {
  let { user, loader } = useSelector((state) => state.authUser);
  let [role, setRole] = useState({});

  // console.log(user);
  // let adminRole = 'admin';
  // let student = 'student';
  // let instructor = ' instructor';
  // const [isOpen, setIsOpen] = useState(false);

  // let { data } = useGetMyUserQuery(user?.email);
  // console.log(data?.user.role);
  useEffect(() => {
    setRole(user?.role);
  }, [user, loader]);
  // const role = user?.user?.role;
  // console.log(user)

  return (
    <div className="w-full min-h-screen bg-gradient-to-bl to-[#0F172A] from-[#080127] text-white p-2 pt-8 md:p-8">
      <Link
        to={"/"}
        className="font-bold text-base md:text-2xl  md:block block"
      >
        <span className="logoColor">Gyan</span>Flow
      </Link>

      <div className="relative flex items-center space-y-3 mt-10">
        <IoSearch className="absolute left-2 top-2 " />
        <input
          type="text"
          placeholder="Search for..."
          className="w-full md:w-11/12 text-sm md:text-base pl-7 py-1 border-[1px] border-gray-500 focus:outline-none focus:ring-blue-[#1a044d] focus:ring rounded-lg"
        />
      </div>

      {/* admin role */}
      {role === "admin" &&
        (loader ? (
          "Loading"
        ) : (
          <div className="space-y-5 mt-10">
            <NavLink
              to={"/dashboard/adminDashboard"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <MdDashboard />
              Admin Dashboard
            </NavLink>
            <NavLink
              to={"/dashboard/addCourse"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <IoIosAddCircle />
              Add Course
            </NavLink>
            <NavLink
              to={"/dashboard/courses"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <VscVmRunning />
              All Courses
            </NavLink>

            <NavLink
              to={"/dashboard/userManagement"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <FaUsers />
              Users Managment
            </NavLink>
            <NavLink
              to={"/chat"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <IoIosAddCircleOutline />
              Chat
            </NavLink>

            <NavLink
              to={"/dashboard/addAnnouncement"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <GrAnnounce />
              Add Announcement
            </NavLink>
            <NavLink
              to={"/dashboard/paymentHistory"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <MdOutlinePayments />
              Payment History
            </NavLink>
          </div>
        ))}
      {/* student role */}
      {role === "student" &&
        (loader ? (
          "Loding"
        ) : (
          <div className="space-y-5 mt-10">
            <NavLink
              to={"/dashboard/studentDashboard"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <PiVideoCameraLight />
              My Courses
            </NavLink>
            <NavLink
              to={"/dashboard/create-meeting"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <IoIosAddCircleOutline />
              Join Meeting
            </NavLink>
            <NavLink
              to={"/chat"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <IoIosAddCircleOutline />
              Chat
            </NavLink>
            <NavLink
              to={"/dashboard/actionaldashboard"}
              className="capitalize text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <MdDashboard />
              Actionable Dashboard
            </NavLink>
            <NavLink
              to={"/dashboard/allAnnouncement"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <TfiAnnouncement />
              Announcement
            </NavLink>
          </div>
        ))}

      {/* Instructor role */}
      {role === "instructor" &&
        (loader ? (
          "Loading"
        ) : (
          <div className="space-y-5 mt-10">
            <NavLink
              to={"/dashboard/instructor-Dashboard-progress"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <MdDashboard />
              Instructor dashboard
            </NavLink>
            <NavLink
              to={"/dashboard/instructorDashboard"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <BiSolidUpArrow />
              Invited Courses
            </NavLink>
            <NavLink
              to={"/dashboard/create-meeting"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <MdOutlineCreateNewFolder />
              Create Meeting
            </NavLink>
            <NavLink
              to={"/dashboard/create-module"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <IoCreateOutline />
              Create Module
            </NavLink>
          </div>
        ))}
      {role === "teacher" &&
        (loader ? (
          "Loading"
        ) : (
          <div className="space-y-5 mt-10">
            <NavLink
              to={"/dashboard/teacherDashboard"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <BiSolidUpArrow />
              Teacher Dashboard
            </NavLink>
          </div>
        ))}
      <div className="w-full mt-4  border-gray-600 border-t-[1px]">
        <NavLink
          to={"/"}
          className="text-sm md:text-base font-bold mt-8 flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
        >
          <IoHome />
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
