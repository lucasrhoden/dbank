export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'balance' : IDL.Func([], [IDL.Nat], ['query']),
    'deposit' : IDL.Func([IDL.Nat], [], ['oneway']),
    'withdraw' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
