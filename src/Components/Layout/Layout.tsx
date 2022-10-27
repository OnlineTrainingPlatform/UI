import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="ml-5">
      <Outlet />
    </div>
  );
};
