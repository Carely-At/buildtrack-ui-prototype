import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { ROLES } from './data/mock';

import LandingPage from './pages/public/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminOwners from './pages/admin/AdminOwners';
import AdminProjects from './pages/admin/AdminProjects';
import AdminSubscriptions from './pages/admin/AdminSubscriptions';

import OwnerLayout from './layouts/OwnerLayout';
import OwnerDashboard from './pages/owner/OwnerDashboard';
import OwnerProjects from './pages/owner/OwnerProjects';
import OwnerProjectDetail from './pages/owner/OwnerProjectDetail';
import OwnerCreateProject from './pages/owner/OwnerCreateProject';
import OwnerMembers from './pages/owner/OwnerMembers';
import OwnerSubscription from './pages/owner/OwnerSubscription';

import UserLayout from './layouts/UserLayout';
import UserDashboard from './pages/user/UserDashboard';
import UserProjects from './pages/user/UserProjects';
import UserProjectDetail from './pages/user/UserProjectDetail';

import MessagingPage from './pages/shared/MessagingPage';
import ConversationPage from './pages/shared/ConversationPage';
import TasksPage from './pages/shared/TasksPage';
import PlanningPage from './pages/shared/PlanningPage';
import SettingsPage from './pages/shared/SettingsPage';
import ProfilePage from './pages/shared/ProfilePage';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}

function RoleRedirect() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (user.role === ROLES.ADMIN) return <Navigate to="/admin" replace />;
  if (user.role === ROLES.OWNER) return <Navigate to="/owner" replace />;
  return <Navigate to="/dashboard" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      <Route path="/redirect" element={<ProtectedRoute><RoleRedirect /></ProtectedRoute>} />

      <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="owners" element={<AdminOwners />} />
        <Route path="projects" element={<AdminProjects />} />
        <Route path="subscriptions" element={<AdminSubscriptions />} />
        <Route path="messaging" element={<MessagingPage />} />
        <Route path="messaging/:conversationId" element={<ConversationPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      <Route path="/owner" element={<ProtectedRoute><OwnerLayout /></ProtectedRoute>}>
        <Route index element={<OwnerDashboard />} />
        <Route path="projects" element={<OwnerProjects />} />
        <Route path="projects/new" element={<OwnerCreateProject />} />
        <Route path="projects/:projectId" element={<OwnerProjectDetail />} />
        <Route path="members" element={<OwnerMembers />} />
        <Route path="messaging" element={<MessagingPage />} />
        <Route path="messaging/:conversationId" element={<ConversationPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="planning" element={<PlanningPage />} />
        <Route path="subscription" element={<OwnerSubscription />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedRoute><UserLayout /></ProtectedRoute>}>
        <Route index element={<UserDashboard />} />
        <Route path="projects" element={<UserProjects />} />
        <Route path="projects/:projectId" element={<UserProjectDetail />} />
        <Route path="messaging" element={<MessagingPage />} />
        <Route path="messaging/:conversationId" element={<ConversationPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="planning" element={<PlanningPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}