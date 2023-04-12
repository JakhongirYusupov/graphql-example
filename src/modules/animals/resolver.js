import module from "./module.js";

export default {
  Query: {
    animals: async () => await module.getAnimals(),
  },
  Mutation: {
    createAnimal: async (_, args) => await module.createAnimal(args),
    updateAnimal: async (_, args) => await module.updateAnimal(args),
    deleteAnimal: async (_, args) => await module.deleteAnimal(args),
  },
};
