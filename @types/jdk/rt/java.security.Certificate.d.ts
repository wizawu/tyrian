declare namespace java {
    namespace security {
        interface Certificate {
            getGuarantor(): java.security.Principal
            getPrincipal(): java.security.Principal
            getPublicKey(): java.security.PublicKey
            encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
            decode(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
            getFormat(): string
            toString(arg0: boolean): string
        }
    }
}