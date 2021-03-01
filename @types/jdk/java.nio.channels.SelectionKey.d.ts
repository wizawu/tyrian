declare namespace java {
  namespace nio {
    namespace channels {

      abstract class SelectionKey {

        public static readonly OP_READ: int
        public static readonly OP_WRITE: int
        public static readonly OP_CONNECT: int
        public static readonly OP_ACCEPT: int
        protected constructor()
        public abstract channel(): java.nio.channels.SelectableChannel
        public abstract selector(): java.nio.channels.Selector
        public abstract isValid(): boolean
        public abstract cancel(): void
        public abstract interestOps(): int
        public abstract interestOps(arg0: int): java.nio.channels.SelectionKey
        public interestOpsOr(arg0: int): int
        public interestOpsAnd(arg0: int): int
        public abstract readyOps(): int
        public readonly isReadable(): boolean
        public readonly isWritable(): boolean
        public readonly isConnectable(): boolean
        public readonly isAcceptable(): boolean
        public readonly attach(arg0: java.lang.Object): java.lang.Object
        public readonly attachment(): java.lang.Object
      }

    }
  }
}
