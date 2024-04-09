import { atomFamily } from "recoil";
// multiple atoms with the same structure
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    return TODOS.find((x) => x.id === id); // function to get the default value
    // find is a function that returns the first element in the array that satisfies the condition
    // x is the current element in the array
    // atomFamily is a function that returns an atom with the key and default value just like atom
    // atomFamily is used to create multiple atoms with the same structure 
    // atomFamily is used to create atoms with dynamic keys
    
  },
});
