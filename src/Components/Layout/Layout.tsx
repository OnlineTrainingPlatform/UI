import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="p-10 h-screen bg-gray-100">
      <Outlet />
    </div>
  );
};
