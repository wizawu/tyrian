declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
class ListAdapter extends java.util.AbstractList<java.lang.Object> implements java.util.RandomAccess , java.util.Deque<java.lang.Object> {
    public static create(arg0: java.lang.Object): jdk.nashorn.internal.runtime.ListAdapter
    public get(arg0: int): java.lang.Object
    public set(arg0: int, arg1: java.lang.Object): java.lang.Object
    public size(): int
    public push(arg0: java.lang.Object): void
    public add(arg0: java.lang.Object): boolean
    public addFirst(arg0: java.lang.Object): void
    public addLast(arg0: java.lang.Object): void
    public add(arg0: int, arg1: java.lang.Object): void
    public offer(arg0: java.lang.Object): boolean
    public offerFirst(arg0: java.lang.Object): boolean
    public offerLast(arg0: java.lang.Object): boolean
    public pop(): java.lang.Object
    public remove(): java.lang.Object
    public removeFirst(): java.lang.Object
    public removeLast(): java.lang.Object
    public remove(arg0: int): java.lang.Object
    protected removeRange(arg0: int, arg1: int): void
    public poll(): java.lang.Object
    public pollFirst(): java.lang.Object
    public pollLast(): java.lang.Object
    public peek(): java.lang.Object
    public peekFirst(): java.lang.Object
    public peekLast(): java.lang.Object
    public element(): java.lang.Object
    public getFirst(): java.lang.Object
    public getLast(): java.lang.Object
    public descendingIterator(): java.util.Iterator<java.lang.Object>
    public removeFirstOccurrence(arg0: java.lang.Object): boolean
    public removeLastOccurrence(arg0: java.lang.Object): boolean
    public static class: java.lang.Class<any>
}

            }
        }
    }
}