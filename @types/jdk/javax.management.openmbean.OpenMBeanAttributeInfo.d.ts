declare namespace javax {
  namespace management {
    namespace openmbean {

      interface OpenMBeanAttributeInfo extends javax.management.openmbean.OpenMBeanParameterInfo {
        isReadable(): boolean
        isWritable(): boolean
        isIs(): boolean
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
        toString(): java.lang.String
      }

    }
  }
}
