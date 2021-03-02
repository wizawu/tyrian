declare namespace javax {
  namespace management {
    namespace openmbean {

      interface OpenMBeanParameterInfo {
        getDescription(): java.lang.String
        getName(): java.lang.String
        getOpenType(): javax.management.openmbean.OpenType<unknown>
        getDefaultValue(): java.lang.Object
        getLegalValues(): java.util.Set<unknown>
        getMinValue(): java.lang.Comparable<unknown>
        getMaxValue(): java.lang.Comparable<unknown>
        hasDefaultValue(): boolean
        hasLegalValues(): boolean
        hasMinValue(): boolean
        hasMaxValue(): boolean
        isValue(arg0: java.lang.Object | any): boolean
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
        toString(): java.lang.String
      }

    }
  }
}
