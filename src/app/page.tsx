import Content from './components/Content';
import './globals.css';

export default function Home() {
  return (
    <main className="   bg-cream">
      <div className="grid grid-cols-10 grid-rows-10 gap-4 p-4 justify-center h-screen w-[1500px] m-auto">
        <div className="flex flex-col col-start-2 bg-olive row-start-2 row-span-8 col-span-8 p-4 rounded-xl gap-4">
          <div className="p-8  bg-beige rounded-xl">
            <Content>
              <h2>hello</h2>
            </Content>
          </div>
        </div>
      </div>
    </main>
  );
}
