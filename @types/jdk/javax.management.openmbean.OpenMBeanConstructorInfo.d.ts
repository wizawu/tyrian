declare namespace javax {
  namespace management {
    namespace openmbean {

      interface OpenMBeanConstructorInfo {

        getDescription(): java.lang.String
        getName(): java.lang.String
        getSignature(): javax.management.MBeanParameterInfo[]
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
        toString(): java.lang.String
      }

    }
  }
}
