declare namespace jdk {
  namespace dynalink {

    class NamespaceOperation implements jdk.dynalink.Operation {

      public constructor(arg0: jdk.dynalink.Operation, ...arg1: jdk.dynalink.Namespace[])
      public getBaseOperation(): jdk.dynalink.Operation
      public getNamespaces(): jdk.dynalink.Namespace[]
      public getNamespaceCount(): int
      public getNamespace(arg0: int): jdk.dynalink.Namespace
      public contains(arg0: jdk.dynalink.Namespace): boolean
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
      public static getBaseOperation(arg0: jdk.dynalink.Operation): jdk.dynalink.Operation
      public static getNamespaces(arg0: jdk.dynalink.Operation): jdk.dynalink.Namespace[]
      public static contains(arg0: jdk.dynalink.Operation, arg1: jdk.dynalink.Operation, arg2: jdk.dynalink.Namespace): boolean
    }

  }
}
