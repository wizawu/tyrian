declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                class ResponderId {
                    public constructor(arg0: javax.security.auth.x500.X500Principal)
                    public constructor(arg0: java.security.PublicKey)
                    public constructor(arg0: byte[])
                    public getEncoded(): byte[]
                    public getType(): sun.security.provider.certpath.ResponderId$Type
                    public length(): int
                    public getResponderName(): javax.security.auth.x500.X500Principal
                    public getKeyIdentifier(): sun.security.x509.KeyIdentifier
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}