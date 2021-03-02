declare namespace com {
  namespace sun {
    namespace jdi {

      interface ArrayType extends com.sun.jdi.ReferenceType {
        newInstance(arg0: int): com.sun.jdi.ArrayReference
        componentSignature(): java.lang.String
        componentTypeName(): java.lang.String
        componentType(): com.sun.jdi.Type
      }

    }
  }
}
