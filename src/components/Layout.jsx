import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';

export const Layout = ({ children }) => {
  console.log(children);

  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
