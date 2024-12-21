export interface PostI {
type_of: any

    id: null,
    title: string,
    description: string,
    published_timestamp: string | Date,
    cover_image: string,
    social_image: string,
    slug: string,
    path: string,
    url: string,
    comments_count: 0,
    user: AuthorI

}

export interface AuthorI {

    name: string,
    username: string,
    twitter_username: string,
    github_username: string,
    user_id: number,
    website_url: string,
    profile_image: string,
    profile_image_90: string

} 