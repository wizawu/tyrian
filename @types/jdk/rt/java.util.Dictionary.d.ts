declare namespace java {
    namespace util {
abstract class Dictionary<K, V> {
    public constructor()
    public size(): int
    public isEmpty(): boolean
    public keys(): java.util.Enumeration<K>
    public elements(): java.util.Enumeration<V>
    public get(arg0: java.lang.Object): V
    public put(arg0: K, arg1: V): V
    public remove(arg0: java.lang.Object): V
    public static class: java.lang.Class<any>
}

    }
}