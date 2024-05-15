import ConnectWalletModal from "@/components/connectWallet/ConnectWalletModal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import Logo from '@/assets/svgs/Logo'
import { AppContext } from "@/App";

function Sidebar() {
  const {isDarkMode, setIsDarkMode} = useContext(AppContext);

  // useEffect(() => {
  //   const isDrkMode = localStorage.getItem('darkMode') === 'true';
  //   if(isDrkMode){
  //     document.documentElement.classList.add('dark');
  //     // localStorage.setItem('darkMode', 'true');
  //   }else{
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('darkMode', 'false');
  //   }
  //   setIsDarkMode(isDrkMode);
  // }, []);

  const handleDarkMode = (val: boolean) => {
    if(val){
      document.documentElement.classList.add('dark');
      setIsDarkMode(val)
      // localStorage.setItem('darkMode', 'true');
    }else{
      document.documentElement.classList.remove('dark');
      // localStorage.setItem('darkMode', 'false');
      setIsDarkMode(val)
    }
    // setIsDarkMode((prevMode) => !prevMode);
  };

  console.log({isDarkMode})

  return (
    <div className="w-full md:w-[16rem] h-screen overflow-y-auto relative bg-aliceBlue dark:bg-gunmetal px-7 py-8 relative">
      <a className="flex">
        {/* <img src="assets/logo/logo.png" /> */}
        <Logo/>
      </a>
      <Dialog>
        <DialogTrigger className="w-full">
          <button className="bg-white dark:bg-black border border-processCyan hover:bg-processCyan dark:hover:bg-processCyan px-4 py-1 text-center text-sm w-full rounded-none mt-20 leading-0 h-[33px] hover:text-white dark:text-white">
            Connect wallet
          </button>
        </DialogTrigger>
        <ConnectWalletModal />
      </Dialog>

      <hr className="border-.5 border-processCyan my-8" />
      <button className="bg-processCyan borer border-processCyan px-4 py-2 text-center text-sm w-full rounded-none leading-0">
        Liquid Staking
      </button>
      <hr className="border-.5 border-processCyan my-8" />

      <div className="flex items-center justify-center gap-x-2">
        <div className={isDarkMode ? "text-white" : "text-crystalBlue"}>
          <Moon size={"14"} />
        </div>
        <Switch
          checked={isDarkMode}
          onCheckedChange={handleDarkMode}
          className="data-[state=checked]:bg-black data-[state=unchecked]:bg-processCyan h-5 border-black dark:border-white"
        />
        <div className={isDarkMode ? "text-white" : "text-crystalBlue"}>
          <Sun size={"14"} />
        </div>
      </div>
      <div className="text-[11px] text-center text text-dimGray pb-5 absolute bottom-0 left-0 w-full">
        <hr className="border-.5 border-processCyan my-5" />
        <p>This project is in beta. </p>
        <p>Use at your own risk.</p>
      </div>
    </div>
  );
}

export default Sidebar;
