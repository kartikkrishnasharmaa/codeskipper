import Navbar from './Navbar';
import Footer from './Footer';

export default function SimpleLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white w-full">
      <Navbar />
      <main className="flex-1 w-full px-0">{children}</main>
      <Footer />
    </div>
  );
}
