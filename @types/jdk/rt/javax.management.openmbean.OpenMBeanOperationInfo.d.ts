declare namespace javax {
    namespace management {
        namespace openmbean {
interface OpenMBeanOperationInfo {
    getDescription(): string
    getName(): string
    getSignature(): javax.management.MBeanParameterInfo[]
    getImpact(): int
    getReturnType(): string
    getReturnOpenType(): javax.management.openmbean.OpenType<any>
    equals(arg0: java.lang.Object): boolean
    hashCode(): int
    toString(): string
}

        }
    }
}