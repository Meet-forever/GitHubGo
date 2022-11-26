import { axiosGitHubGraphQL } from "../.."
import { lastChangeQuery } from "../repostatsQueries/_graphql"

export const fetchBlameFileData = async(ownername, reponame, branch, filepath) => {
        const res = await axiosGitHubGraphQL.post("", {
            query: lastChangeQuery(ownername, reponame, branch, filepath)
        })
}