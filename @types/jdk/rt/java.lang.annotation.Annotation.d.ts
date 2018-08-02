declare namespace java {
    namespace lang {
        namespace annotation {
            interface Annotation {
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
                toString(): string
                annotationType(): java.lang.Class<java.lang.annotation.Annotation>
            }
        }
    }
}