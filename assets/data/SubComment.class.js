import User from "./User.class";

export default class SubComment {
    constructor (comment_reply_id ,created_at , comment , is_like , total_comment_like , user ) {
      this.comment_reply_id = comment_reply_id ?? '';
      this.created_at = created_at ?? '';
      this.comment = comment ?? '';
      this.is_like = is_like ?? false;
      this.total_comment_like = total_comment_like ?? '';
      this.user = new User(user?.name , user?.profile_picture)
      return {
        comment_reply_id : this.comment_id,
        created_at : this.created_at,
        comment : this.comment,
        is_like : this.is_like ,
        total_comment_like : this.total_comment_like,
        user :this.user
      }
    }
}