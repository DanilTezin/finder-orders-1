
export enum MarkedAsAds{
    YES = 1,
    NO = 0
}

export enum PostType{
    post, copy, reply, postpone, suggest
}

export interface IVkPost{
    id: Number,
    from_id: Number,
    owner_id: Number,
    date: Number,
    marked_as_ads: MarkedAsAds,
    is_favorite : Boolean,
    post_type: PostType,
    text: string
}