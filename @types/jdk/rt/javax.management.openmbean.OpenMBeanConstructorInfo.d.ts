declare namespace javax {
    namespace management {
        namespace openmbean {
            interface OpenMBeanConstructorInfo {
                getDescription(): string
                getName(): string
                getSignature(): javax.management.MBeanParameterInfo[]
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
                toString(): string
            }
        }
    }
}