import { links } from "../../data/data";
import { useStateContext } from "../../contexts/ContextProvider";
import Link from "next/link";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className="ml-3 h-screen overflow-auto pb-10 ">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900">
            <Link href="/" >Groovy</Link>
          </div>

          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title} className="flex flex-col">
                <p className="text-gray-400 m-3 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <Link href={`/${link.name}Page`} key={link.name}>
                    <div className="flex items-center gap-4 pl-3 py-3 rounded-lg text-md text-gray-700">
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Sidebar;
