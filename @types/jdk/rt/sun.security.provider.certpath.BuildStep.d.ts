declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                class BuildStep {
                    public static readonly POSSIBLE: int
                    public static readonly BACK: int
                    public static readonly FOLLOW: int
                    public static readonly FAIL: int
                    public static readonly SUCCEED: int
                    public constructor(arg0: sun.security.provider.certpath.Vertex, arg1: int)
                    public getVertex(): sun.security.provider.certpath.Vertex
                    public getCertificate(): java.security.cert.X509Certificate
                    public getIssuerName(): string
                    public getIssuerName(arg0: java.lang.String | string): string
                    public getSubjectName(): string
                    public getSubjectName(arg0: java.lang.String | string): string
                    public getThrowable(): java.lang.Throwable
                    public getResult(): int
                    public resultToString(arg0: int): string
                    public toString(): string
                    public verboseToString(): string
                    public fullToString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}