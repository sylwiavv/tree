import Image from 'next/image';
import './globals.css';
import { TableIcon, TreeTable } from './shared/assets/icons/icons';
// bg-beige
export default function Home() {
  return (
    <main className="   bg-cream">
      <div className="grid grid-cols-10 grid-rows-10 gap-4 p-4 justify-center h-screen w-[1500px] m-auto">
        <div className="row-span-8 row-start-2 bg-beige  grid grid-rows-10 rounded-xl overflow-hidden">
          <div className="flex   text-accent col-start-1 col-span-1 row-start-1 justify-center ">
            <Image
              src="/tree_logo.svg"
              width={90}
              height={90}
              alt="Picture of the author"
            />
          </div>
          <div className=" gap-4 overflow-hidden p-4   w-full  row-span-8 border-t-4 border-cream ">
            <ul className=" flex flex-col col-start-2 items-center gap-8 mt-4">
              <li className="text-lg font-semibold text-olive">
                <TableIcon />
              </li>
              <li className="text-lg font-semibold  text-olive">
                <TreeTable />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col col-start-2 bg-olive row-start-2 row-span-8 col-span-8 p-4 rounded-xl gap-4">
          <div className="p-8  bg-beige rounded-xl">
            <h2>hello</h2>
          </div>

          <h1></h1>
        </div>
      </div>
    </main>
  );
}
