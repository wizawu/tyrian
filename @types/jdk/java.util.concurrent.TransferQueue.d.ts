declare namespace java {
  namespace util {
    namespace concurrent {

      interface TransferQueue<E> extends java.util.concurrent.BlockingQueue<E> {
        tryTransfer(arg0: E): boolean
        transfer(arg0: E): void
        tryTransfer(arg0: E, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
        hasWaitingConsumer(): boolean
        getWaitingConsumerCount(): int
      }

    }
  }
}
