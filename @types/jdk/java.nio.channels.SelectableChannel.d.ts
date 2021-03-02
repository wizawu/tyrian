declare namespace java {
  namespace nio {
    namespace channels {

      abstract class SelectableChannel extends java.nio.channels.spi.AbstractInterruptibleChannel implements java.nio.channels.Channel {
        protected constructor()
        public abstract provider(): java.nio.channels.spi.SelectorProvider
        public abstract validOps(): number
        public abstract isRegistered(): boolean
        public abstract keyFor(arg0: java.nio.channels.Selector): java.nio.channels.SelectionKey
        public abstract register(arg0: java.nio.channels.Selector, arg1: number | java.lang.Integer, arg2: java.lang.Object | any): java.nio.channels.SelectionKey
        public register(arg0: java.nio.channels.Selector, arg1: number | java.lang.Integer): java.nio.channels.SelectionKey
        public abstract configureBlocking(arg0: boolean | java.lang.Boolean): java.nio.channels.SelectableChannel
        public abstract isBlocking(): boolean
        public abstract blockingLock(): java.lang.Object
      }

    }
  }
}
