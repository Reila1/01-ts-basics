function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
const num = getFirstElement<number>([1, 2, 3]);         
const str = getFirstElement<string>(["a", "b", "c"]);    
const bool = getFirstElement<boolean>([true, false]);
const mixed = getFirstElement<number | string>([1, "a", 3]);