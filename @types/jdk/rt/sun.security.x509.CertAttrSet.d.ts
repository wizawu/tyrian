declare namespace sun {
    namespace security {
        namespace x509 {
            interface CertAttrSet<T> {
                toString(): string
                encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                get(arg0: java.lang.String | string): java.lang.Object
                delete(arg0: java.lang.String | string): void
                getElements(): java.util.Enumeration<T>
                getName(): string
            }
        }
    }
}