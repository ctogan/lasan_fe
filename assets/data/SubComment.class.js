import User from "./User.class";

export default class SubComment {
    constructor (id , created_at, comment, is_like , total_comment_like , total_comment_reply , comment_replies , user ) {
      this.comment_id = id ?? '';
      this.created_at = created_at ?? '';
      this.comment = comment ?? '';
      this.is_like = is_like ?? false;// new Categories(categories?.topic_name)
      this.total_comment_like = total_comment_like ?? '';
      this.total_comment_reply = total_comment_reply ?? '';
      this.comment_replies = comment_replies ?? ''
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

    }

}