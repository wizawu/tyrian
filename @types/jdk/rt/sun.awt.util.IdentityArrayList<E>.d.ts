declare namespace sun {
    namespace awt {
        namespace util {
class IdentityArrayList<E> extends java.util.AbstractList<E> implements java.util.List<E> , java.util.RandomAccess {
    public constructor(arg0: int)
    public constructor()
    public constructor(arg0: java.util.Collection<E>)
    public trimToSize(): void
    public ensureCapacity(arg0: int): void
    public size(): int
    public isEmpty(): boolean
    public contains(arg0: java.lang.Object): boolean
    public indexOf(arg0: java.lang.Object): int
    public lastIndexOf(arg0: java.lang.Object): int
    public toArray(): java.lang.Object[]
    public toArray<T>(arg0: T[]): T[]
    public get<T>(arg0: int): E
    public set<T>(arg0: int, arg1: E): E
    public add<T>(arg0: E): boolean
    public add<T>(arg0: int, arg1: E): void
    public remove<T>(arg0: int): E
    public remove<T>(arg0: java.lang.Object): boolean
    public clear<T>(): void
    public addAll<T>(arg0: java.util.Collection<E>): boolean
    public addAll<T>(arg0: int, arg1: java.util.Collection<E>): boolean
    protected removeRange<T>(arg0: int, arg1: int): void
    public static class: java.lang.Class<any>
}

        }
    }
}