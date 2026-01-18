export default function Sidebar({ isOpen, setSidebarOpen }) {
  return (
   <aside className={`
  bg-gray-800 dark:bg-gray-900 text-white w-64 absolute md:static h-[calc(100vh-64px-48px)] z-50 transition-transform duration-300 ease-in-out
  ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  md:translate-x-0 overflow-y-auto
`}>

      <ul className="space-y-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <li key={i} className="hover:bg-gray-700 p-2 rounded cursor-pointer">Menu Item {i + 1}</li>
        ))}
      </ul>
    </aside>
  );
}
