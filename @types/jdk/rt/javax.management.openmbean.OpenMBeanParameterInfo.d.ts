declare namespace javax {
    namespace management {
        namespace openmbean {
            interface OpenMBeanParameterInfo {
                getDescription(): string
                getName(): string
                getOpenType(): javax.management.openmbean.OpenType<any>
                getDefaultValue(): java.lang.Object
                getLegalValues(): java.util.Set<any>
                getMinValue(): java.lang.Comparable<any>
                getMaxValue(): java.lang.Comparable<any>
                hasDefaultValue(): boolean
                hasLegalValues(): boolean
                hasMinValue(): boolean
                hasMaxValue(): boolean
                isValue(arg0: java.lang.Object): boolean
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
                toString(): string
            }
        }
    }
}