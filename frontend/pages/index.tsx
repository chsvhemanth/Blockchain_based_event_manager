import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">EventChain</h1>
      <ConnectButton />
    </div>
  );
}
