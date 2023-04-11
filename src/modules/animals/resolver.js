import module from "./module.js";

export default {
  Query: {
    animals: async () => await module.getAnimals(),
  },
};
