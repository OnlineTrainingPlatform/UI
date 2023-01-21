import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="pt pl pb h-screen bg-[#050C1B]">
      <Outlet />
    </div>
  );
};
