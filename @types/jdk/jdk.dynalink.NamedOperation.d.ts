declare namespace jdk {
  namespace dynalink {

    class NamedOperation implements jdk.dynalink.Operation {
      public constructor(arg0: jdk.dynalink.Operation, arg1: java.lang.Object | any)
      public getBaseOperation(): jdk.dynalink.Operation
      public getName(): java.lang.Object
      public changeName(arg0: java.lang.String | string): jdk.dynalink.NamedOperation
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
      public static getBaseOperation(arg0: jdk.dynalink.Operation): jdk.dynalink.Operation
      public static getName(arg0: jdk.dynalink.Operation): java.lang.Object
    }

  }
}
