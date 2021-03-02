declare namespace javax {
  namespace management {
    namespace openmbean {

      interface OpenMBeanConstructorInfo {
        getDescription(): java.lang.String
        getName(): java.lang.String
        getSignature(): javax.management.MBeanParameterInfo[]
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
        toString(): java.lang.String
      }

    }
  }
}
