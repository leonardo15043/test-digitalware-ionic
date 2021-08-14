export interface Post  extends Array<Post>{
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}