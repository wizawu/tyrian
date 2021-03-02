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
        public abstract selectNow(): int
        public abstract select(arg0: long): int
        public abstract select(): int
        public select(arg0: java.util.function$.Consumer<java.nio.channels.SelectionKey>, arg1: long): int
        public select(arg0: java.util.function$.Consumer<java.nio.channels.SelectionKey>): int
        public selectNow(arg0: java.util.function$.Consumer<java.nio.channels.SelectionKey>): int
        public abstract wakeup(): java.nio.channels.Selector
        public abstract close(): void
      }

    }
  }
}
