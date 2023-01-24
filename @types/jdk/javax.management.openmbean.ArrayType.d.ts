declare namespace javax {
  namespace management {
    namespace openmbean {
      class ArrayType<T> extends javax.management.openmbean.OpenType<T> {
        static readonly serialVersionUID: long
        static isPrimitiveContentType(arg0: java.lang.String | string): boolean
        static getPrimitiveTypeKey(arg0: java.lang.String | string): java.lang.String
        static getPrimitiveTypeName(arg0: java.lang.String | string): java.lang.String
        static getPrimitiveOpenType(arg0: java.lang.String | string): javax.management.openmbean.SimpleType<unknown>
        public constructor(arg0: number | java.lang.Integer, arg1: javax.management.openmbean.OpenType<unknown>)
        public constructor(arg0: javax.management.openmbean.SimpleType<unknown>, arg1: boolean | java.lang.Boolean)
        constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: number | java.lang.Integer,
          arg4: javax.management.openmbean.OpenType<unknown>,
          arg5: boolean | java.lang.Boolean
        )
        public getDimension(): number
        public getElementOpenType(): javax.management.openmbean.OpenType<unknown>
        public isPrimitiveArray(): boolean
        public isValue(arg0: java.lang.Object | any): boolean
        isAssignableFrom(arg0: javax.management.openmbean.OpenType<unknown>): boolean
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
        public static getArrayType<E>(
          arg0: javax.management.openmbean.OpenType<E>
        ): javax.management.openmbean.ArrayType<E[]>
        public static getPrimitiveArrayType<T>(arg0: java.lang.Class<T>): javax.management.openmbean.ArrayType<T>
      }
    }
  }
}
