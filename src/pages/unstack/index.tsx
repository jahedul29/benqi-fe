import BottomArrow from "@/assets/svgs/BottomArrow";
import ConnectWalletModal from "@/components/connectWallet/ConnectWalletModal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleHelp } from "lucide-react";
import { useState } from "react";

const statistics = [
  {
    id: "1",
    title: "Annual percentage rate",
    value: "~5.56 %",
    tooltip:
      "The Annual Percentage Rate (APR) is an estimate of the annualized liquid staking rewards based on the current liquid staking delegations. This figure is dependent on the staking ratio of the Avalanche network and the performance of the underlying validators.",
  },
  {
    id: "2",
    title: "Exchange rate",
    value: "1 AVAX ≈ 0.8723 sAVAX",
    tooltip:
      "Exchange rate is the conversion rate between AVAX and sAVAX, or vice versa.",
  },
  {
    id: "3",
    title: "# of stakers",
    value: "54,380",
    tooltip: "",
  },
  {
    id: "4",
    title: "Total AVAX staked",
    value: "7,564,397 AVAX",
  },
  {
    id: "5",
    title: "sAVAX Market cap",
    value: "$245,743,051",
  },
  {
    id: "6",
    title: "Unstaking cooldown period",
    value: "15 days",
    tooltip:
      "Unstaking cooldown period is the waiting period that needs to elapse before unstaked sAVAX can be claimed for AVAX.",
  },
  {
    id: "7",
    title: "Redemption period",
    value: "2 days",
    tooltip:
      "Redemption period is the period to claim AVAX from unstaked sAVAX. AVAX is re-staked if this period expires.",
  },
];


function MainContent({selectedTab}: {selectedTab: string}) {
  return (
    <div className="bg-aliceBlue dark:bg-gunmetal p-5 md:p-10 rounded-lg w-full lg:w-[856px] mt-12">
      <div className={`dark:text-white flex gap-y-5 flex-col`}>
        <div className={`border rounded-t-lg pt-4 px-5 md:px-10 pb-10 md:pb-14 bg-white dark:bg-richBlack relative ${selectedTab === "stack" ? "border-princetonOrange" : "border-processCyan"}`}>
          <p className="text-xl">{selectedTab === "stack" ? "Stack" : "Unstack"}</p>
          <div className={`flex justify-between border rounded-xl mt-2 px-4 py-2 md:py-6 h-[51px] md:h-20 ${selectedTab === "stack" ? "border-princetonOrange" : "border-processCyan"}`}>
            <input
              type="number"
              className="w-full text-right md:text-left focus:outline-none text-xl md:text-3xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="0.00"
              style={{
                background: 'transparent',
              }}
            />
            <div className="w-[130px] hidden md:flex gap-x-2 items-center">
              <img
                src={ selectedTab === "stack" ? "/assets/images/avax.png" : "/assets/images/savax.png"}
                alt="logo"
                className="w-[30px] h-[30px]"
              />
              <p className="text-[22px]">{selectedTab === "stack" ? "AVAX" : "sAVAX"}</p>
            </div>
            
          </div>
          <div className="w-[100px] flex md:hidden gap-x-2 items-center ml-auto mt-2">
              <img
                src={ selectedTab === "stack" ? "/assets/images/avax.png" : "/assets/images/savax.png"}
                alt="logo"
                className="w-[24px] h-[24px]"
              />
               <p className="text-[22px]">{selectedTab === "stack" ? "AVAX" : "sAVAX"}</p>
            </div>
          <p className="mt-2 font-light text-right md:text-left">1 AVAX ≈ 0.8723 sAVAX</p>
          <div className="absolute -bottom-[20px] left-[42%] md:left-[45%] w-full">
            <BottomArrow className={`${selectedTab === "stack" ? "text-princetonOrange fill-white dark:fill-gunmetal" : "text-processCyan fill-white dark:fill-gunmetal"}`}/>
          </div>
        </div>
        <div className={`border rounded-b-lg pt-4 px-5 md:px-10 pb-10 md:pb-14 bg-white dark:bg-richBlack relative ${selectedTab === "stack" ? "border-processCyan" : "border-princetonOrange"}`}>
          <div className="absolute -top-[1px] left-[42%] md:left-[45%] w-full">
            <BottomArrow  className={`${selectedTab === "stack" ? "text-processCyan fill-aliceBlue dark:fill-gunmetal" : "text-princetonOrange fill-aliceBlue dark:fill-gunmetal"}`} />
          </div>
          <p className="text-xl">Recieve</p>
          <div className={`flex justify-between border rounded-xl mt-2 px-4 py-2 md:py-6 h-[51px] md:h-20 ${selectedTab === "stack" ? "border-processCyan" : "border-princetonOrange"}`}>
            <input
              type="number"
              className="w-full text-right md:text-left focus:outline-none text-xl md:text-3xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="0.00"
              style={{
                background: 'transparent',
              }}
            />
            <div className="w-[130px] hidden md:flex gap-x-2 items-center">
              <img
                src={ selectedTab === "stack" ? "/assets/images/savax.png" : "/assets/images/avax.png"}
                alt="logo"
                className="w-[30px] h-[30px]"
              />
              <p className="text-[22px]">{selectedTab === "stack" ? "sAVAX" : "AVAX"}</p>
            </div>
          </div>
          <div className="w-[100px] flex md:hidden gap-x-2 items-center ml-auto mt-2">
              <img
                 src={ selectedTab === "stack" ? "/assets/images/savax.png" : "/assets/images/avax.png"}
                alt="logo"
                className="w-[24px] h-[24px]"
              />
              <p className="text-[20px]">sAVAX</p>
            </div>
          <p className="mt-2 font-light text-right md:text-left">1 AVAX ≈ 0.8723 sAVAX</p>
        </div>
      </div>
      <div className="flex items-center justify-center my-10">
        <Dialog>
          <DialogTrigger>
            <button className="rounded-lg bg-processCyan/10 text-processCyan w-[203px] text-center border border-processCyan py-2 mx-auto">
              Connect wallet
            </button>
          </DialogTrigger>
          <ConnectWalletModal/>
        </Dialog>
        </div>
      <div className="px-0 md:px-10 dark:text-white">
        <p className="text-[22px]">Liquid Staking Statistics</p>
        <hr className="border-.5 border-processCyan my-2" />
        {statistics.map((stat) => (
          <div key={stat.id} className="flex justify-between w-full mb-1">
            <p className="text-sm mb-1 flex gap-x-1 items-center">
              {stat.title}
              {/* <CircleHelp size={12} color="dimGray"/> */}
              {stat.tooltip && (
                <Dialog>
                  <DialogTrigger asChild>
                    <CircleHelp size={12} color="dimGray" className="cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="bg-white dark:bg-black dark:text-white border-2 border-processCyan">
                    <p>{stat.tooltip}</p>
                  </DialogContent>
                </Dialog>
              )}
            </p>
            <p className="text-sm">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Unstack() {
  const [selectedTab, setSelectedTab] = useState<string>("stack");
  return (
    <div className="pt-5 md:pt-40 px-5 md:px-10 max-w-3xl mx-auto flex flex-col items-center pb-10">
      <h1 className="text-3xl mb-3 font-medium dark:text-white">Liquid Staking</h1>
      <p className="mb-5 font-light text-center dark:text-white">
        Stake AVAX and receive sAVAX to unlock your capital
      </p>
      <Tabs
        defaultValue="account"
        className="w-[320px]"
        onValueChange={(val) => setSelectedTab(val)}
      >
        <TabsList
          className={`border-2 rounded-xl w-full ${
            selectedTab === "stack"
              ? "border-princetonOrange"
              : "border-processCyan"
          }`}
        >
          <TabsTrigger
            className={`w-1/2 rounded-xl text-xl ${
              selectedTab === "stack"
                ? "bg-princetonOrange text-black"
                : "text-processCyan"
            }`}
            value="stack"
          >
            Stack
          </TabsTrigger>
          <TabsTrigger
            className={`w-1/2 rounded-xl text-xl ${
              selectedTab === "unstack"
                ? "bg-processCyan text-black"
                : "text-princetonOrange"
            }`}
            value="unstack"
          >
            Unstack
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <MainContent selectedTab={selectedTab} />
    </div>
  );
}

export default Unstack;
