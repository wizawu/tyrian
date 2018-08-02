declare namespace java {
    namespace util {
        namespace concurrent {
class LinkedTransferQueue<E> extends java.util.AbstractQueue<E> implements java.util.concurrent.TransferQueue<E> , java.io.Serializable {
    public spliterator(): java.util.Spliterator<E>
    public constructor()
    public constructor(arg0: java.util.Collection<E>)
    public put(arg0: E): void
    public offer(arg0: E, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
    public offer(arg0: E): boolean
    public add(arg0: E): boolean
    public tryTransfer(arg0: E): boolean
    public transfer(arg0: E): void
    public tryTransfer(arg0: E, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
    public take(): E
    public poll(arg0: long, arg1: java.util.concurrent.TimeUnit): E
    public poll(): E
    public drainTo(arg0: java.util.Collection<E>): int
    public drainTo(arg0: java.util.Collection<E>, arg1: int): int
    public iterator(): java.util.Iterator<E>
    public peek(): E
    public isEmpty(): boolean
    public hasWaitingConsumer(): boolean
    public size(): int
    public getWaitingConsumerCount(): int
    public remove(arg0: java.lang.Object): boolean
    public contains(arg0: java.lang.Object): boolean
    public remainingCapacity(): int
    public static class: java.lang.Class<any>
}

        }
    }
}