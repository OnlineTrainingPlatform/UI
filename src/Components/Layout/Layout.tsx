import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="bg-[#050C1B]">
      <Outlet />
    </div>
  );
};
