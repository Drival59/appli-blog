export class Post {
    title: string;
    content: string;
    loveIts: number;
    create_at: Date;

    constructor(titre: string) {
        this.title = titre;
        this.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas iaculis quam eget finibus. Quisque malesuada enim nec condimentum congue. Etiam iaculis pretium purus, ac rutrum metus egestas pretium. Quisque quis placerat metus, vel fringilla lectus. Mauris vitae metus vitae augue pulvinar facilisis.";
        this.loveIts = 0;
        this.create_at = new Date();
    }
}
