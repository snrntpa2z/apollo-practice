const resolvers = {
  Query: {
    books: async (obj, args, ctx) => {
      return await ctx.book.find();
    },
    findbook: async (obj, args, ctx) => {
      return await ctx.book.find({ author: args.author });
    }
  },
  Mutation: {
    addBook: async (obj, args, ctx) => {
      return await new ctx.book(args).save();
    },
    register: async (obj, args, ctx) => {
      return await new ctx.user(args).save();
    },
    login: async (obj, args, ctx) => {
      return await ctx.user.find({ id: args.id, pwd: args.pwd });
    },
    writeCommunity: async (obj, args, ctx) => {
      return await new ctx.community(args).save();
    }
  }
};

export default resolvers;
