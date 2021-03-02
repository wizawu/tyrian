declare namespace java {
  namespace io {

    class ObjectStreamField implements java.lang.Comparable<java.lang.Object> {
      public constructor(arg0: java.lang.String, arg1: java.lang.Class<unknown>)
      public constructor(arg0: java.lang.String, arg1: java.lang.Class<unknown>, arg2: boolean)
      constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: boolean)
      static getClassSignature(arg0: java.lang.Class<unknown>): java.lang.String
      static appendClassSignature(arg0: java.lang.StringBuilder, arg1: java.lang.Class<unknown>): java.lang.StringBuilder
      constructor(arg0: java.lang.reflect.Field, arg1: boolean, arg2: boolean)
      public getName(): java.lang.String
      public getType(): java.lang.Class<unknown>
      public getTypeCode(): char
      public getTypeString(): java.lang.String
      public getOffset(): int
      protected setOffset(arg0: int): void
      public isPrimitive(): boolean
      public isUnshared(): boolean
      public compareTo(arg0: java.lang.Object): int
      public toString(): java.lang.String
      getField(): java.lang.reflect.Field
      getSignature(): java.lang.String
    }

  }
}
