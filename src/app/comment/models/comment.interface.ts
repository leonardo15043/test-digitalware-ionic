export interface Comment extends Array<Comment> {
    postId: number;
    id:     number;
    name:   string;
    email:  string;
    body:   string;
}
