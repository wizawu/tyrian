declare namespace javax {
  namespace management {
    namespace openmbean {

      interface OpenMBeanOperationInfo {
        getDescription(): java.lang.String
        getName(): java.lang.String
        getSignature(): javax.management.MBeanParameterInfo[]
        getImpact(): int
        getReturnType(): java.lang.String
        getReturnOpenType(): javax.management.openmbean.OpenType<unknown>
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
        toString(): java.lang.String
      }

    }
  }
}
