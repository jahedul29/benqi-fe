import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Sidebar from "./Sidebar";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ConnectWalletModal from "@/components/connectWallet/ConnectWalletModal";

function MobileHeader() {
  return (
    <div className="h-[5rem] px-5 bg-aliceBlue dark:bg-richBlack-1 flex justify-between items-center">
      <img
        src={"/assets/logo/mobile-logo.svg"}
        alt="mobile-logo"
        className="h-[44px] w-[44px] block dark:hidden"
      />
      <img
        src={"/assets/logo/mobile-logo-light.svg"}
        alt="mobile-logo"
        className="h-[44px] w-[44px] hidden dark:block"
      />
      <Dialog>
        <DialogTrigger className="w-[140px]">
        <button className="bg-processCyan h-[45px] px-4 w-[140px] py-2 text-center text-sm w-full rounded-none leading-0 text-base">
          Connect wallet
        </button>
        </DialogTrigger>
        <ConnectWalletModal />
      </Dialog>
      
      <Drawer direction="left">
        <DrawerTrigger>
          <Menu className="h-[26px] w-[26px] dark:text-white" />
        </DrawerTrigger>
        <DrawerContent className="max-w-[300px]">
          <Sidebar />
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default MobileHeader;
