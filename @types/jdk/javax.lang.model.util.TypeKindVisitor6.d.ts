declare namespace javax {
  namespace lang {
    namespace model {
      namespace util {
        class TypeKindVisitor6<R, P> extends javax.lang.model.util.SimpleTypeVisitor6<R, P> {
          protected constructor()
          protected constructor(arg0: R)
          public visitPrimitive(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
          public visitPrimitiveAsBoolean(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
          public visitPrimitiveAsByte(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
          public visitPrimitiveAsShort(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
          public visitPrimitiveAsInt(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
          public visitPrimitiveAsLong(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
          public visitPrimitiveAsChar(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
          public visitPrimitiveAsFloat(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
          public visitPrimitiveAsDouble(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
          public visitNoType(arg0: javax.lang.model.type.NoType, arg1: P): R
          public visitNoTypeAsVoid(arg0: javax.lang.model.type.NoType, arg1: P): R
          public visitNoTypeAsPackage(arg0: javax.lang.model.type.NoType, arg1: P): R
          public visitNoTypeAsModule(arg0: javax.lang.model.type.NoType, arg1: P): R
          public visitNoTypeAsNone(arg0: javax.lang.model.type.NoType, arg1: P): R
        }
      }
    }
  }
}
