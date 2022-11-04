import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="pt-10 pl-10 pb-10 h-screen bg-gray-100">
      <Outlet />
    </div>
  );
};
