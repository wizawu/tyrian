declare namespace javax {
    namespace security {
        namespace sasl {
class AuthorizeCallback implements javax.security.auth.callback.Callback , java.io.Serializable {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public getAuthenticationID(): string
    public getAuthorizationID(): string
    public isAuthorized(): boolean
    public setAuthorized(arg0: boolean): void
    public getAuthorizedID(): string
    public setAuthorizedID(arg0: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

        }
    }
}