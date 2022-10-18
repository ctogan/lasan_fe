# LAGI SANTAI API SPEC

## Recomedation Author
Request :
- Method : GET
- Endpoint : /api/stories
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - [x] Limit 6
- Body Request
```json
{
    "token" : "string",
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : [
            {
                "name" : "string",
                "occupation" : "string",
                "uuid" : "string",
                "is_followed" : "boolean" 
            },
            {
                "name" : "string",
                "occupation" : "string",
                "uuid" : "string",
                "is_followed" : "boolean" 
            }
        ]
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```

## Follow Author
Request :
- Method : POST
- Endpoint : /api/stories
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - if action is "true" , will be "follow" else "unfollow"
- Body Request
```json
{
    "token" : "string",
    "uuid" : "string",
    "action" : "string"
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : [
            {
                "name" : "string",
                "occupation" : "string",
                "uuid" : "stirng",
                "is_followed" : "boolean" 
            },
            {
                "name" : "string",
                "occupation" : "string",
                "uuid" : "stirng",
                "is_followed" : "boolean" 
            }
        ]
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```


## Selected Topic
Request :
- Method : GET
- Endpoint : /api/selected/topic
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - [x] Limit 9
- Body Request
```json
{
    "token" : "string",
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : [
            {
                "category" : "string"
            },
            {
                "category" : "string"
            }
        ]
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```


## Stories
Request :
- Method : GET
- Endpoint : /api/stories
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - [x] Berdasarkan occupation yang diikuti
    - [x] Jika tidak ada yang di ikuti , pilih random 20
    - [x] Order by id DESC
- Body Request
```json
{
    "token" : "string",
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : [
            {
                "created_at" : "string",
                "article" : {
                    "slug": "string",
                    "title": "string",
                    "categories" : "string",
                    "image" : "string",
                    "short_description" : "string"
                },
                "author" : {
                    "name" : "stirng",
                    "profile_picture" : "string",
                    "occupation" : "string"
                }
            }
        ]
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```




## Articles Trendings
Request :
- Method : GET
- Endpoint : /api/articles/trendings
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - [x] Limit list 4
    - [x] Order by total views
- Body Request
```json
{
    "token" : "string",
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : [
            {
                "slug": "string",
                "title": "string",
                "categories" : "string",
                "date" : "string",
                "image" : "string",
                "read_calculation" : "string",
                "is_like" : "boolean",
                "is_wish" : "boolean",
                "author" : {
                    "name" : "stirng",
                    "profile_picture" : "string",
                    "occupation" : "string"
                }
            },
            {
                "slug": "string",
                "title": "string",
                "categories" : "string",
                "date" : "string",
                "image" : "string",
                "read_calculation" : "string",
                "is_like" : "boolean",
                "is_wish" : "boolean",
                "author" : {
                    "name" : "stirng",
                    "profile_picture" : "string",
                    "occupation" : "string"
                }
            },
        ]
        
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```


## List Articles
Request :
- Method : GET
- Endpoint : /api/articles
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - [x] Limit list 20 per paging
    - [x] Order by recomendation / base on personality users
    - [x] Filter by [semua ,rekomendasi , terpilih , terbaru , terpopuler]
- Body Request
```json
{
    "token" : "string",
    "filter_by" : "string",
    "page" : "integer"
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : [
            {
                "slug": "string",
                "title": "string",
                "categories" : "string",
                "date" : "string",
                "image" : "string",
                "read_calculation" : "string",
                "is_like" : "boolean",
                "is_wish" : "boolean",
                "author" : {
                    "name" : "stirng",
                    "profile_picture" : "string",
                    "occupation" : "string"
                }
            },
            {
                "slug": "string",
                "title": "string",
                "categories" : "string",
                "date" : "string",
                "image" : "string",
                "read_calculation" : "string",
                "is_like" : "boolean",
                "is_wish" : "boolean",
                "author" : {
                    "name" : "stirng",
                    "profile_picture" : "string",
                    "occupation" : "string"
                }
            },
        ]
        
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```


## Detail Post
Request :
- Method : GET
- Endpoint : /api/article/:slug
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - -
- Body Request
```json
{
    "token" : "string",
}
```
- Response Success
```json
    {
        "code" : "integer",
        "message" : "string",
        "data" : 
                {
                    "slug": "string",
                    "title": "string",
                    "categories" : "string",
                    "date" : "string",
                    "image" : "string",
                    "article" : "string",
                    "read_calculation" : "string",
                    "is_like" : "boolean",
                    "is_wish" : "boolean",
                    "total_views" : "stirng",
                    "total_like" : "string",
                    "total_comment" : "string",
                    "author" : {
                        "name" : "stirng",
                        "profile_picture" : "string",
                        "occupation" : "string"
                    }
                }
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```

## Related Post by Category
Request :
- Method : POST
- Endpoint : /api/article/related/category
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - [x] Cek kategori berdasarkan artikel yang sedang dibaca (slug)
    - [x] limit per paging 5
- Body Request
```json
{
    "token" : "string",
    "slug" : "string",
    "page" : "integer"
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : [
            {
                "slug": "string",
                "title": "string",
                "categories" : "string",
                "date" : "string",
                "image" : "string",
                "read_calculation" : "string",
                "is_like" : "boolean",
                "is_wish" : "boolean",
                "author" : {
                    "name" : "stirng",
                    "profile_picture" : "string",
                    "occupation" : "string"
                }
            },
            {
                "slug": "string",
                "title": "string",
                "categories" : "string",
                "date" : "string",
                "image" : "string",
                "read_calculation" : "string",
                "is_like" : "boolean",
                "is_wish" : "boolean",
                "author" : {
                    "name" : "stirng",
                    "profile_picture" : "string",
                    "occupation" : "string"
                }
            }
        ]
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```

## GET Comment of Post
Request :
- Method : POST
- Endpoint : /api/article/comments
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - [x] List komentar dari artikel yang sedang dibaca
    - [x] limit per paging 10
    - [x] Filter berdasarkan [Terbaru , Like , Komentarmu]
    - [x] Komentar yang dibalas paging di limit 5
- Body Request
```json
{
    "token" : "string",
    "slug" : "string",
    "page" : "integer",
    "filter_by" : "integer"
}
```
- Response Success
```json
    {
        "code" : "integer",
        "message" : "string",
        "status" : "string",
        "data" : [
            {
                "user": {
                    "name" : "stirng",
                    "profile_picture" : "string"
                },
                "comment_id" : "integer",
                "created_at" : "string",
                "comment": "string",
                "is_like" : "boolean",
                "total_comment_like" : "string",
                "total_comment_reply" : "string",
                "comment_replies" : [
                    {
                        "user": {
                            "name" : "stirng",
                            "profile_picture" : "string"
                        },
                        "comment_reply_id" : "integer",
                        "is_like" : "boolean",
                        "total_comment_like" : "string",
                        "comment" : "string",
                        "created_at" : "string"
                    }
                ]
            },
            {
                "user": {
                    "name" : "string",
                    "profile_picture" : "string"
                },
                "comment_id" : "integer",
                "created_at" : "string",
                "comment": "string",
                "is_like" : "boolean",
                "total_comment_like" : "string",
                "total_comment_reply" : "string",
                "comment_replies" : [
                    {
                        "user": {
                            "name" : "stirng",
                            "profile_picture" : "string"
                        },
                        "created_at" : "string",
                        "comment_reply_id" : "integer",
                        "is_like" : "boolean",
                        "total_comment_like" : "string",
                        "comment" : "string",
                    }
                ]
            }
        ]
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "message" : "string",
        "status" : "string",
        "data" : []
    }
```


## Reply of Comment
Request :
- Method : POST
- Endpoint : /api/article/comment/bycommentid
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - [x] List komentar dari artikel yang sedang dibaca
    - [x] limit per paging 5
    - [x] order by created_at desc
- Body Request
```json
{
    "token" : "string",
    "comment_id" : "integer",
    "page" : "integer",
}
```
- Response Success
```json
    {
        "code" : "integer",
        "message" : "string",
        "status" : "string",
        "data" : [
            {
                "user": {
                    "name" : "stirng",
                    "profile_picture" : "string"
                },
                "created_at" : "string",
                "comment_reply_id" : "integer",
                "is_like" : "boolean",
                "total_comment_like" : "string",
                "comment" : "string",
                "created_at" : "string"
            },
            {
                "user": {
                    "name" : "stirng",
                    "profile_picture" : "string"
                },
                "created_at" : "string",
                "comment_reply_id" : "integer",
                "is_like" : "boolean",
                "total_comment_like" : "string",
                "comment" : "string",
                "created_at" : "string"
            },
        ]
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```


## Create Comment
Request :
- Method : POST
- Endpoint : /api/article/comment/store
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - Add Comment of article
- Body Request
```json
{
    "token" : "string",
    "slug" : "integer",
    "comment" : "string",
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : {
                "user": {
                    "name" : "stirng",
                    "profile_picture" : "string"
                },
                "comment_id" : "integer",
                "created_at" : "string",
                "comment": "string",
                "is_like" : "boolean",
                "total_comment_like" : "string",
                "total_comment_reply" : "string",
                "comment_replies" : [
                    {
                        "user": {
                            "name" : "stirng",
                            "profile_picture" : "string"
                        },
                        "comment_reply_id" : "integer",
                        "is_like" : "boolean",
                        "total_comment_like" : "string",
                        "comment" : "string",
                        "created_at" : "string"
                    }
                ]
            },
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```

## Edit Comment
Request :
- Method : POST
- Endpoint : /api/article/comment/update
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - Add Comment of article
- Body Request
```json
{
    "token" : "string",
    "slug" : "integer",
    "comment" : "string",
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```

## Reply Comment
Request :
- Method : POST
- Endpoint : /api/article/comment/reply/store
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - Reply of comment
- Body Request
```json
{
    "token" : "string",
    "slug" : "integer",
    "comment_id" : "integer",
    "comment" : "string",
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```


## Edit Reply Comment
Request :
- Method : POST
- Endpoint : /api/article/comment/reply/update
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - Edit Reply of comment
- Body Request
```json
{
    "token" : "string",
    "slug" : "integer",
    "comment_reply_id" : "integer",
    "comment" : "string",
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```

## Like article
Request :
- Method : POST
- Endpoint : /api/article/like
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - [x] Like Articles
    - [x] if action "true" will be "like" else "unlike"
- Body Request
```json
{
    "token" : "string",
    "slug" : "string",
    "action" : "string"
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```

## Like Comment
Request :
- Method : POST
- Endpoint : /api/article/comment/like
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - [x] if action "true" will be "like" else "unlike"
- Body Request
```json
{
    "token" : "string",
    "comment_id" : "integer",
    "action" : "string"
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```

## Like Reply Comment
Request :
- Method : POST
- Endpoint : /api/article/comment/reply/like
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - [x] if action "true" will be "like" else "unlike"
- Body Request
```json
{
    "token" : "string",
    "comment_reply_id" : "integer",
    "action" : "string"
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```

## Wishlist Article
Request :
- Method : POST
- Endpoint : /api/article/wish
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - [ ] if action "true" will be "wish" else "unwish"
- Body Request
```json
{
    "token" : "string",
    "slug" : "string",
    "action" : "string"
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```


## Count View Article
Request :
- Method : POST
- Endpoint : /api/article/count/view
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - - 
- Body Request
```json
{
    "token" : "string",
    "slug" : "string",
    "action" : "string"
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```

## Report Article
Request :
- Method : POST
- Endpoint : /api/article/report
- Header
    - Content-Type : application/json
    - accept : application/json
- Note
    - - 
- Body Request
```json
{
    "token" : "string",
    "slug" : "string"
}
```
- Response Success
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```
- Response Error
```json
    {
        "code" : "integer",
        "status" : "string",
        "message" : "string",
        "data" : []
    }
```

