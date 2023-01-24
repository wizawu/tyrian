declare namespace javax {
  namespace management {
    namespace openmbean {
      interface OpenMBeanAttributeInfo extends javax.management.openmbean.OpenMBeanParameterInfo {
        isReadable(): boolean
        isWritable(): boolean
        isIs(): boolean
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
        toString(): java.lang.String
      }
    }
  }
}
