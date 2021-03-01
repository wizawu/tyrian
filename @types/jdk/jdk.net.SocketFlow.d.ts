declare namespace jdk {
  namespace net {

    class SocketFlow {

      public static readonly UNSET: int
      public static readonly NORMAL_PRIORITY: int
      public static readonly HIGH_PRIORITY: int
      public static create(): jdk.net.SocketFlow
      public priority(arg0: int): jdk.net.SocketFlow
      public bandwidth(arg0: long): jdk.net.SocketFlow
      public priority(): int
      public bandwidth(): long
      public status(): jdk.net.SocketFlow$Status
      status(arg0: int): void
      public toString(): java.lang.String
    }

  }
}
