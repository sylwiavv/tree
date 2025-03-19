'use client';

import { usePathname } from 'next/navigation';

const Content = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">
        {pathname === '/table-view'}
        {pathname === '/tree-view'}
      </h1>
      {children}
    </div>
  );
};
export default Content;
