declare namespace java {
  namespace util {
    namespace concurrent {
      class LinkedTransferQueue<E>
        extends java.util.AbstractQueue<E>
        implements java.util.concurrent.TransferQueue<E>, java.io.Serializable
      {
        static readonly SWEEP_THRESHOLD: int
        head: java.util.concurrent.LinkedTransferQueue$Node
        static readonly ITEM: java.lang.invoke.VarHandle
        static readonly NEXT: java.lang.invoke.VarHandle
        static readonly WAITER: java.lang.invoke.VarHandle
        firstDataNode(): java.util.concurrent.LinkedTransferQueue$Node
        public toString(): java.lang.String
        public toArray(): java.lang.Object[]
        public toArray<T>(arg0: T[]): T[]
        public spliterator(): java.util.Spliterator<E>
        unsplice(
          arg0: java.util.concurrent.LinkedTransferQueue$Node,
          arg1: java.util.concurrent.LinkedTransferQueue$Node
        ): void
        public constructor()
        public constructor(arg0: java.util.Collection<E>)
        public put(arg0: E): void
        public offer(arg0: E, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): boolean
        public offer(arg0: E): boolean
        public add(arg0: E): boolean
        public tryTransfer(arg0: E): boolean
        public transfer(arg0: E): void
        public tryTransfer(arg0: E, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): boolean
        public take(): E
        public poll(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): E
        public poll(): E
        public drainTo(arg0: java.util.Collection<unknown>): number
        public drainTo(arg0: java.util.Collection<unknown>, arg1: number | java.lang.Integer): number
        public iterator(): java.util.Iterator<E>
        public peek(): E
        public isEmpty(): boolean
        public hasWaitingConsumer(): boolean
        public size(): number
        public getWaitingConsumerCount(): number
        public remove(arg0: java.lang.Object | any): boolean
        public contains(arg0: java.lang.Object | any): boolean
        public remainingCapacity(): number
        public removeIf(arg0: java.util.function$.Predicate<unknown>): boolean
        public removeAll(arg0: java.util.Collection<unknown>): boolean
        public retainAll(arg0: java.util.Collection<unknown>): boolean
        public clear(): void
        forEachFrom(
          arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>,
          arg1: java.util.concurrent.LinkedTransferQueue$Node
        ): void
        public forEach(
          arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>
        ): void
      }
    }
  }
}
