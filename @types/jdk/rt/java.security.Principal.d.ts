declare namespace java {
    namespace security {
interface Principal {
    equals(arg0: java.lang.Object): boolean
    toString(): string
    hashCode(): int
    getName(): string
    implies(arg0: javax.security.auth.Subject): boolean
}

    }
}