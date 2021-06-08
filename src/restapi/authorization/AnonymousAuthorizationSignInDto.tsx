export type AnonymousAuthorizationSignInDto = {
    AuthorizationToken: {
        Token: string;
        TokenExpires: string;
    },
    User: {
        FullName: string;
        Id: number;
        UserName: string;
    }
}