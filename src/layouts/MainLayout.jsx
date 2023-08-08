/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

const MainLayout = (props) => {
  const { isLoading, error } = props;

  return (
    <>
      <Menu />
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : error ? (
        <h1>Error: {error}</h1>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default MainLayout;
