declare namespace java {
    namespace lang {
        namespace reflect {
interface Member {
    PUBLIC: int
    DECLARED: int
    getDeclaringClass(): java.lang.Class<any>
    getName(): string
    getModifiers(): int
    isSynthetic(): boolean
}

        }
    }
}