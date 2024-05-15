import { DialogContent } from '@/components/ui/dialog';
import Logo from '@/assets/svgs/Logo';
const walletItems = [
    {
      id: '1',
      title: 'Core',
      imageUrl: 'assets/images/wallet/core_black.svg'
    },
    {
      id: '2',
      title: 'Metamask',
      imageUrl: 'assets/images/wallet/metamask.svg'
    },
    {
      id: '3',
      title: 'OKS Wallet',
      imageUrl: 'assets/images/wallet/okx-black.svg'
    }
  ]
  
function ConnectWalletModal() {
  return (
    <DialogContent className="bg-white dark:bg-richBlack-1 max-w-[382px] px-12 pb-10 dark:text-white border-processCyan">
        {/* <img src='assets/logo/logo.png' className="mb-10"/> */}
        <div className='mb-16'>
          <Logo/>
        </div>
        <div className="flex flex-col gap-y-[.75rem]">
          {
            walletItems?.map(item => (
              <div className="flex border rounded-lg border-processCyan px-5 py-3 flex items-center justify-between hover:bg-processCyan">
                <p>{item.title}</p>
                <img src={item.imageUrl} alt="wallet" className="w-[32px] h-[32px]" />
              </div>
            ))
          }
        </div>
        </DialogContent>
  )
}

export default ConnectWalletModal