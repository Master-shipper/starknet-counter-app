import { Chain } from "@starknet-react/chains";
import { supportedChains as chains } from "./supportedChains";

export type ScaffoldConfig = {
  targetNetworks: readonly Chain[];
  pollingInterval: number;
  onlyLocalBurnerWallet: boolean;
  rpcProviderUrl: {
    [key: string]: string;
  };
  walletAutoConnect: boolean;
  autoConnectTTL: number;
};

const scaffoldConfig = {
  targetNetworks: [chains.devnet],
  onlyLocalBurnerWallet: false,
  rpcProviderUrl: {
    devnet:
      process.env.NEXT_PUBLIC_DEVNET_PROVIDER_URL ||
      process.env.NEXT_PUBLIC_PROVIDER_URL ||
      "",
    sepolia:
      process.env.NEXT_PUBLIC_SEPOLIA_PROVIDER_URL ||
      process.env.NEXT_PUBLIC_PROVIDER_URL ||
      "",
    mainnet:
      process.env.NEXT_PUBLIC_MAINNET_PROVIDER_URL ||
      process.env.NEXT_PUBLIC_PROVIDER_URL ||
      "",
  },

  pollingInterval: 30_000,

  autoConnectTTL: 60000,
  walletAutoConnect: true,
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;
