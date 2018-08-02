declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
class ForwardState implements sun.security.provider.certpath.State {
    public isInitial(): boolean
    public keyParamsNeeded(): boolean
    public toString(): string
    public initState(arg0: java.util.List<java.security.cert.PKIXCertPathChecker>): void
    public updateState(arg0: java.security.cert.X509Certificate): void
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

            }
        }
    }
}