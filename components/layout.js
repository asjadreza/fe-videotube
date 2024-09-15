import ThemeToggle from './theme-toggle';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <header className="flex justify-between p-3 bg-gray-200 dark:bg-gray-800">
        <h1 className="text-2xl font-bold">videotube</h1>
        <ThemeToggle /> 
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
