import SubComment from "./SubComment.class";
import User from "./User.class";

export default class Comment {
    constructor (id , created_at, comment, is_like , total_comment_like , total_comment_reply , comment_replies , user ) {
      this.comment_id = id ?? '';
      this.created_at = created_at ?? '';
      this.comment = comment ?? '';
      this.is_like = is_like ?? false;// new Categories(categories?.topic_name)
      this.total_comment_like = total_comment_like ?? '';
      this.total_comment_reply = total_comment_reply ?? '';
      this.comment_replies = comment_replies ? commentReplies(comment_replies) : []
      this.user = new User(user?.name , user?.profile_picture)

      return {
        comment_id : this.comment_id,
        created_at : this.created_at,
        comment : this.comment,
        is_like : this.is_like ,
        total_comment_like : this.total_comment_like,
        total_comment_reply : total_comment_reply,
        comment_replies : this.comment_replies,
        user :this.user
      }
      
      function commentReplies (comment_replies) {
        const list = [];
        comment_replies.forEach((replies) => {  
          list.push(new SubComment(replies.comment_reply_id ,replies.created_at , replies.comment , replies.is_like , replies.total_comment_like , replies.user))
        })
        return list
      }
    }

    

}