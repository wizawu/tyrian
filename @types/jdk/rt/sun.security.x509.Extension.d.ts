declare namespace sun {
    namespace security {
        namespace x509 {
            class Extension implements java.security.cert.Extension {
                protected extensionId: sun.security.util.ObjectIdentifier
                protected critical: boolean
                protected extensionValue: byte[]
                public constructor()
                public constructor(arg0: sun.security.util.DerValue)
                public constructor(arg0: sun.security.util.ObjectIdentifier, arg1: boolean, arg2: byte[])
                public constructor(arg0: sun.security.x509.Extension)
                public static newExtension(arg0: sun.security.util.ObjectIdentifier, arg1: boolean, arg2: byte[]): sun.security.x509.Extension
                public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public encode(arg0: sun.security.util.DerOutputStream): void
                public isCritical(): boolean
                public getExtensionId(): sun.security.util.ObjectIdentifier
                public getValue(): byte[]
                public getExtensionValue(): byte[]
                public getId(): string
                public toString(): string
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}