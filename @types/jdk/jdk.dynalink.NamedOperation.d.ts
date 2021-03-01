declare namespace jdk {
  namespace dynalink {

    class NamedOperation implements jdk.dynalink.Operation {

      public constructor(arg0: jdk.dynalink.Operation, arg1: java.lang.Object)
      public getBaseOperation(): jdk.dynalink.Operation
      public getName(): java.lang.Object
      public readonly changeName(arg0: java.lang.String): jdk.dynalink.NamedOperation
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
      public static getBaseOperation(arg0: jdk.dynalink.Operation): jdk.dynalink.Operation
      public static getName(arg0: jdk.dynalink.Operation): java.lang.Object
    }

  }
}
