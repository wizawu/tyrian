declare namespace java {
    namespace util {
        namespace concurrent {
class ConcurrentLinkedQueue<E> extends java.util.AbstractQueue<E> implements java.util.Queue<E> , java.io.Serializable {
    public constructor()
    public constructor(arg0: java.util.Collection<E>)
    public add(arg0: E): boolean
    public offer(arg0: E): boolean
    public poll(): E
    public peek(): E
    public isEmpty(): boolean
    public size(): int
    public contains(arg0: java.lang.Object): boolean
    public remove(arg0: java.lang.Object): boolean
    public addAll(arg0: java.util.Collection<E>): boolean
    public toArray(): java.lang.Object[]
    public toArray<T>(arg0: T[]): T[]
    public iterator<T>(): java.util.Iterator<E>
    public spliterator<T>(): java.util.Spliterator<E>
    public static class: java.lang.Class<any>
}

        }
    }
}