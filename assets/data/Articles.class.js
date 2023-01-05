import Author from "./Author.class";
import Categories from "./Categories.class";

export default class Articles {
    constructor (id , slug, title, image , categories , date , article , sub_title ,read_calculation, is_like , is_wish , total_views, total_likes , total_comment , author ) {
      this.slug = slug ?? '';
      this.title = title ?? '';
      this.image = image ?? '';
      this.categories = categories;// new Categories(categories?.topic_name)
      this.date = date ?? '';
      this.article = article ?? '';
      this.short_description = sub_title ?? ''
      this.read_calculation = read_calculation ?? '';
      this.is_like = is_like ?? false;
      this.is_wish = is_wish ?? false;
      this.total_views = total_views ?? '0';
      this.total_likes = total_likes ?? '0';
      this.total_comment = total_comment ?? '0';
      this.author =  new Author(author?.username, author?.avatar , author?.occupation , author?.first_name , author?.last_name)

      return {
        slug : this.slug,
        title : this.title,
        image : this.image,
        categories : this.categories,
        date : this.date,
        article : this.article,
        read_calculation : this.read_calculation,
        is_like : this.is_like,
        is_wish : this.is_wish,
        total_views : this.total_views,
        total_comment : this.total_comment ,
        total_likes : this.total_likes,
        author : this.author,
        short_description : this.short_description
      }

    }

}
