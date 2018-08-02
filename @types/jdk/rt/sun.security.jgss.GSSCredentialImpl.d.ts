declare namespace sun {
    namespace security {
        namespace jgss {
            class GSSCredentialImpl implements com.sun.security.jgss.ExtendedGSSCredential {
                public constructor(arg0: sun.security.jgss.GSSManagerImpl, arg1: sun.security.jgss.spi.GSSCredentialSpi)
                public dispose(): void
                public impersonate(arg0: org.ietf.jgss.GSSName): org.ietf.jgss.GSSCredential
                public getName(): org.ietf.jgss.GSSName
                public getName(arg0: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
                public getRemainingLifetime(): int
                public getRemainingInitLifetime(arg0: org.ietf.jgss.Oid): int
                public getRemainingAcceptLifetime(arg0: org.ietf.jgss.Oid): int
                public getUsage(): int
                public getUsage(arg0: org.ietf.jgss.Oid): int
                public getMechs(): org.ietf.jgss.Oid[]
                public add(arg0: org.ietf.jgss.GSSName, arg1: int, arg2: int, arg3: org.ietf.jgss.Oid, arg4: int): void
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public getElement(arg0: org.ietf.jgss.Oid, arg1: boolean): sun.security.jgss.spi.GSSCredentialSpi
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}