import PostService, {
  AddPostPayload,
  AddCommentPayload,
} from "../../services/post"

const queries = {
  getPosts: async (_: any, _2: any, context: any) => {
    if (context && context.success) {
      const allPosts = await PostService.getAllPosts()
      console.log(allPosts)

      return allPosts
    }

    throw new Error("User is not authorized")
  },
}

const mutations = {
  async addPost(_: any, payload: AddPostPayload, context: any) {
    if (context && context.success) {
      const id = context.user.id
      const post = await PostService.addPost(payload, id)

      return post
    }

    throw new Error("User is not authorized")
  },

  async addComment(_: any, payload: AddCommentPayload, context: any) {
    if (context && context.success) {
      const id = context.user.id
      const comment = await PostService.addComment(payload, id)

      return comment
    }

    throw new Error("User is not authorized")
  },
}

export const resolvers = { queries, mutations }
