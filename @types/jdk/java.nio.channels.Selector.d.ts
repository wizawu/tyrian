declare namespace java {
  namespace nio {
    namespace channels {
      abstract class Selector implements java.io.Closeable {
        static readonly $assertionsDisabled: boolean
        protected constructor()
        public static open(): java.nio.channels.Selector
        public abstract isOpen(): boolean
        public abstract provider(): java.nio.channels.spi.SelectorProvider
        public abstract keys(): java.util.Set<java.nio.channels.SelectionKey>
        public abstract selectedKeys(): java.util.Set<java.nio.channels.SelectionKey>
        public abstract selectNow(): number
        public abstract select(arg0: number | java.lang.Long): number
        public abstract select(): number
        public select(
          arg0:
            | java.util.function$.Consumer<java.nio.channels.SelectionKey>
            | java.util.function$.Consumer$$lambda<java.nio.channels.SelectionKey>,
          arg1: number | java.lang.Long
        ): number
        public select(
          arg0:
            | java.util.function$.Consumer<java.nio.channels.SelectionKey>
            | java.util.function$.Consumer$$lambda<java.nio.channels.SelectionKey>
        ): number
        public selectNow(
          arg0:
            | java.util.function$.Consumer<java.nio.channels.SelectionKey>
            | java.util.function$.Consumer$$lambda<java.nio.channels.SelectionKey>
        ): number
        public abstract wakeup(): java.nio.channels.Selector
        public abstract close(): void
      }
    }
  }
}
