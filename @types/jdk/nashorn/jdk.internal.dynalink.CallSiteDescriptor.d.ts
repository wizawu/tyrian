declare namespace jdk {
    namespace internal {
        namespace dynalink {
interface CallSiteDescriptor {
    SCHEME: int
    OPERATOR: int
    NAME_OPERAND: int
    TOKEN_DELIMITER: string
    OPERATOR_DELIMITER: string
    getNameTokenCount(): int
    getNameToken(arg0: int): string
    getName(): string
    getMethodType(): java.lang.invoke.MethodType
    getLookup(): java.lang.invoke.MethodHandles$Lookup
    changeMethodType(arg0: java.lang.invoke.MethodType): jdk.internal.dynalink.CallSiteDescriptor
}

        }
    }
}