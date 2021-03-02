declare namespace java {
  namespace io {

    class ObjectStreamField implements java.lang.Comparable<java.lang.Object> {
      public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<unknown>)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<unknown>, arg2: boolean | java.lang.Boolean)
      constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean | java.lang.Boolean)
      static getClassSignature(arg0: java.lang.Class<unknown>): java.lang.String
      static appendClassSignature(arg0: java.lang.StringBuilder, arg1: java.lang.Class<unknown>): java.lang.StringBuilder
      constructor(arg0: java.lang.reflect.Field, arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean)
      public getName(): java.lang.String
      public getType(): java.lang.Class<unknown>
      public getTypeCode(): string
      public getTypeString(): java.lang.String
      public getOffset(): number
      protected setOffset(arg0: number | java.lang.Integer): void
      public isPrimitive(): boolean
      public isUnshared(): boolean
      public compareTo(arg0: java.lang.Object | any): number
      public toString(): java.lang.String
      getField(): java.lang.reflect.Field
      getSignature(): java.lang.String
    }

  }
}
