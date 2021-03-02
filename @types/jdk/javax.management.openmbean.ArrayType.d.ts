declare namespace javax {
  namespace management {
    namespace openmbean {

      class ArrayType<T> extends javax.management.openmbean.OpenType<T> {
        static readonly serialVersionUID: long
        static isPrimitiveContentType(arg0: java.lang.String): boolean
        static getPrimitiveTypeKey(arg0: java.lang.String): java.lang.String
        static getPrimitiveTypeName(arg0: java.lang.String): java.lang.String
        static getPrimitiveOpenType(arg0: java.lang.String): javax.management.openmbean.SimpleType<unknown>
        public constructor(arg0: int, arg1: javax.management.openmbean.OpenType<unknown>)
        public constructor(arg0: javax.management.openmbean.SimpleType<unknown>, arg1: boolean)
        constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: int, arg4: javax.management.openmbean.OpenType<unknown>, arg5: boolean)
        public getDimension(): int
        public getElementOpenType(): javax.management.openmbean.OpenType<unknown>
        public isPrimitiveArray(): boolean
        public isValue(arg0: java.lang.Object): boolean
        isAssignableFrom(arg0: javax.management.openmbean.OpenType<unknown>): boolean
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
        public static getArrayType<E>(arg0: javax.management.openmbean.OpenType<E>): javax.management.openmbean.ArrayType<E[]>
        public static getPrimitiveArrayType<T>(arg0: java.lang.Class<T>): javax.management.openmbean.ArrayType<T>
      }

    }
  }
}
