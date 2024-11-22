import { CodeXml } from "lucide-react";
import Link from "next/link";

interface IProps {}

const Header = (props: IProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[80px] border-b-[8px] bg-white border-primary/60 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <CodeXml className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-semibold text-primary">ShortGen</span>
        </div>
        <nav className="flex space-x-6">
          <Link href="/" className="text-lg text-gray-900 font-semibold">
            Dashboard
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <nav className="flex space-x-6">
          <Link href="/login" className="text-lg text-gray-900 font-semibold">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
