import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'balance' : () => Promise<number>,
  'compound' : () => Promise<undefined>,
  'deposit' : (arg_0: number) => Promise<undefined>,
  'withdraw' : (arg_0: number) => Promise<undefined>,
}
