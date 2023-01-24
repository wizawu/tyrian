declare namespace javax {
  namespace management {
    namespace openmbean {
      interface OpenMBeanOperationInfo {
        getDescription(): java.lang.String
        getName(): java.lang.String
        getSignature(): javax.management.MBeanParameterInfo[]
        getImpact(): number
        getReturnType(): java.lang.String
        getReturnOpenType(): javax.management.openmbean.OpenType<unknown>
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
        toString(): java.lang.String
      }
    }
  }
}
