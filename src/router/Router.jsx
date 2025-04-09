import { createBrowserRouter } from 'react-router';
import StudentDashboard from '@/pages/Dashboard/StudentDashboard/StudentDashboard';
import AddCourses from '@/pages/Dashboard/AdminDashboard/AddCourses/AddCourses';
import Main from '../layouts/MainLayout/Main';
import Home from '../pages/Home/Home';
import Login from '../authentication/Login/Login';
import Register from '../authentication/Register/Register';
import Support from '../pages/Support/Support';
import About from '../pages/About/About';
import Error from '@/pages/Error/Error';
import Dashboard from '@/layouts/DashboardLayout/Dashboard/Dashboard';
import Courses from '@/pages/Dashboard/AdminDashboard/Courses/Courses';
import UserManagement from '@/pages/Dashboard/AdminDashboard/UserManagement/UserManagement';
import InstructorDashboard from '@/pages/Dashboard/InstructorDashboard/InstructorDashboard/InstructorDashboard';
import UserProfile from '@/components/Dashboard/UserProfile/UserProfile';
import AdminDashboard from '@/pages/Dashboard/AdminDashboard/AdminDashboard';
import Career from '@/pages/Career/Career';
import TecherDashboard from '@/pages/Dashboard/TecherDashboard/TecherDashboard';
import StudentRoutes from './../protectedRoutes/StudentRoutes';
import AdminRoute from './../protectedRoutes/AdminRoute';
import UploadModul from '@/pages/Dashboard/InstructorDashboard/InstructorDashboard/UploadModul';
import FeaturesCourseDetails from '@/pages/FeaturesCourseDetails/FeaturesCourseDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/support',
        element: <Support></Support>,
      },
      {
        path: '/career',
        element: <Career></Career>,
      },
      {
        path: '/featuresDetails/:id',
        element: <FeaturesCourseDetails></FeaturesCourseDetails>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register/:role',
    element: <Register></Register>,
  },

  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      // admin related routes

      {
        path: 'adminDashboard',
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: 'courses',
        element: (
          <AdminRoute>
            <Courses />
          </AdminRoute>
        ),
      },
      {
        // dashboard/addCourse'
        path: 'addCourse',
        element: (
          <AdminRoute>
            <AddCourses />
          </AdminRoute>
        ),
      },
      {
        path: 'userManagement',
        element: <UserManagement></UserManagement>,
      },
      // student related  routes
      {
        path: 'studentDashboard',
        element: (
          <StudentRoutes>
            <StudentDashboard></StudentDashboard>
          </StudentRoutes>
        ),
      },
      {
        path: 'teacherDashboard',
        element: <TecherDashboard></TecherDashboard>,
      },
      {
        path: 'instructorDashboard',
        element: <InstructorDashboard></InstructorDashboard>,
      },
      {
        path: 'instructorDashboard/action/:id',
        element: <UploadModul></UploadModul>,
      },
    ],
  },
  {
    path: '*',
    element: <Error></Error>,
  },
  {
    path: 'profile',
    element: <UserProfile></UserProfile>,
  },
]);
