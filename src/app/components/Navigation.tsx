import Link from 'next/link';
import { TableIcon, TreeTable } from '../shared/ui/icons/icons';

const Navigation = () => {
  return (
    <div className=" gap-4 overflow-hidden p-4  w-full border-t-4 border-lightOlive ">
      <ul className=" flex flex-col items-center gap-8 mt-4">
        <li className="text-lg font-semibold text-olive">
          <Link href="/table">
            <TableIcon />
          </Link>
        </li>
        <li className="text-lg font-semibold  text-olive">
          <Link href="/table-tree">
            <TreeTable />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
