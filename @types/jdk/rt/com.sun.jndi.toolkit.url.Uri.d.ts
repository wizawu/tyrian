declare namespace com {
    namespace sun {
        namespace jndi {
            namespace toolkit {
                namespace url {
class Uri {
    protected uri: string
    protected scheme: string
    protected host: string
    protected port: int
    protected hasAuthority: boolean
    protected path: string
    protected query: string
    public constructor(arg0: java.lang.String | string)
    protected constructor()
    protected init(arg0: java.lang.String | string): void
    public getScheme(): string
    public getHost(): string
    public getPort(): int
    public getPath(): string
    public getQuery(): string
    public toString(): string
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}