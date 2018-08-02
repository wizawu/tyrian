declare namespace javax {
    namespace security {
        namespace auth {
            namespace x500 {
                class X500Principal implements java.security.Principal , java.io.Serializable {
                    public static RFC1779: string
                    public static RFC2253: string
                    public static CANONICAL: string
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.lang.String>)
                    public constructor(arg0: byte[])
                    public constructor(arg0: java.io.InputStream)
                    public getName(): string
                    public getName(arg0: java.lang.String | string): string
                    public getName(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.lang.String>): string
                    public getEncoded(): byte[]
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}