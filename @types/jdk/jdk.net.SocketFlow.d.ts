declare namespace jdk {
  namespace net {

    class SocketFlow {
      public static readonly UNSET: int
      public static readonly NORMAL_PRIORITY: int
      public static readonly HIGH_PRIORITY: int
      public static create(): jdk.net.SocketFlow
      public priority(arg0: number | java.lang.Integer): jdk.net.SocketFlow
      public bandwidth(arg0: number | java.lang.Long): jdk.net.SocketFlow
      public priority(): number
      public bandwidth(): number
      public status(): jdk.net.SocketFlow$Status
      status(arg0: number | java.lang.Integer): void
      public toString(): java.lang.String
    }

  }
}
