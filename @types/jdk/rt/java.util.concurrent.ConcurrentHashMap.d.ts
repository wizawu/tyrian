declare namespace java {
    namespace util {
        namespace concurrent {
            class ConcurrentHashMap<K, V> extends java.util.AbstractMap<K, V> implements java.util.concurrent.ConcurrentMap<K, V> , java.io.Serializable {
                public constructor()
                public constructor(arg0: int)
                public constructor(arg0: java.util.Map<K, V>)
                public constructor(arg0: int, arg1: float)
                public constructor(arg0: int, arg1: float, arg2: int)
                public size(): int
                public isEmpty(): boolean
                public get(arg0: java.lang.Object): V
                public containsKey(arg0: java.lang.Object): boolean
                public containsValue(arg0: java.lang.Object): boolean
                public put(arg0: K, arg1: V): V
                public putAll(arg0: java.util.Map<K, V>): void
                public remove(arg0: java.lang.Object): V
                public clear(): void
                public keySet(): java.util.concurrent.ConcurrentHashMap$KeySetView<K, V>
                public values(): java.util.Collection<V>
                public entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
                public hashCode(): int
                public toString(): string
                public equals(arg0: java.lang.Object): boolean
                public putIfAbsent(arg0: K, arg1: V): V
                public remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                public replace(arg0: K, arg1: V, arg2: V): boolean
                public replace(arg0: K, arg1: V): V
                public getOrDefault(arg0: java.lang.Object, arg1: V): V
                public forEach(arg0: java.util.function$.BiConsumer<K, V>): void
                public replaceAll(arg0: java.util.function$.BiFunction<K, V, V>): void
                public computeIfAbsent(arg0: K, arg1: java.util.function$.Function<K, V>): V
                public computeIfPresent(arg0: K, arg1: java.util.function$.BiFunction<K, V, V>): V
                public compute(arg0: K, arg1: java.util.function$.BiFunction<K, V, V>): V
                public merge(arg0: K, arg1: V, arg2: java.util.function$.BiFunction<V, V, V>): V
                public contains(arg0: java.lang.Object): boolean
                public keys(): java.util.Enumeration<K>
                public elements(): java.util.Enumeration<V>
                public mappingCount(): long
                public static newKeySet<K>(): java.util.concurrent.ConcurrentHashMap$KeySetView<K, java.lang.Boolean>
                public static newKeySet<K>(arg0: int): java.util.concurrent.ConcurrentHashMap$KeySetView<K, java.lang.Boolean>
                public keySet(arg0: V): java.util.concurrent.ConcurrentHashMap$KeySetView<K, V>
                public forEach(arg0: long, arg1: java.util.function$.BiConsumer<K, V>): void
                public forEach<U>(arg0: long, arg1: java.util.function$.BiFunction<K, V, U>, arg2: java.util.function$.Consumer$$TypeScript<U>): void
                public search<U>(arg0: long, arg1: java.util.function$.BiFunction<K, V, U>): U
                public reduce<U>(arg0: long, arg1: java.util.function$.BiFunction<K, V, U>, arg2: java.util.function$.BiFunction<U, U, U>): U
                public reduceToDouble<U>(arg0: long, arg1: java.util.function$.ToDoubleBiFunction<K, V> | java.util.function$.ToDoubleBiFunction$$Lambda<K, V>, arg2: double, arg3: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$Lambda): double
                public reduceToLong<U>(arg0: long, arg1: java.util.function$.ToLongBiFunction<K, V> | java.util.function$.ToLongBiFunction$$Lambda<K, V>, arg2: long, arg3: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
                public reduceToInt<U>(arg0: long, arg1: java.util.function$.ToIntBiFunction<K, V> | java.util.function$.ToIntBiFunction$$Lambda<K, V>, arg2: int, arg3: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
                public forEachKey<U>(arg0: long, arg1: java.util.function$.Consumer$$TypeScript<K>): void
                public forEachKey<U>(arg0: long, arg1: java.util.function$.Function<K, U>, arg2: java.util.function$.Consumer$$TypeScript<U>): void
                public searchKeys<U>(arg0: long, arg1: java.util.function$.Function<K, U>): U
                public reduceKeys<U>(arg0: long, arg1: java.util.function$.BiFunction<K, K, K>): K
                public reduceKeys<U>(arg0: long, arg1: java.util.function$.Function<K, U>, arg2: java.util.function$.BiFunction<U, U, U>): U
                public reduceKeysToDouble<U>(arg0: long, arg1: java.util.function$.ToDoubleFunction<K> | java.util.function$.ToDoubleFunction$$Lambda<K>, arg2: double, arg3: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$Lambda): double
                public reduceKeysToLong<U>(arg0: long, arg1: java.util.function$.ToLongFunction<K> | java.util.function$.ToLongFunction$$Lambda<K>, arg2: long, arg3: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
                public reduceKeysToInt<U>(arg0: long, arg1: java.util.function$.ToIntFunction<K> | java.util.function$.ToIntFunction$$Lambda<K>, arg2: int, arg3: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
                public forEachValue<U>(arg0: long, arg1: java.util.function$.Consumer$$TypeScript<V>): void
                public forEachValue<U>(arg0: long, arg1: java.util.function$.Function<V, U>, arg2: java.util.function$.Consumer$$TypeScript<U>): void
                public searchValues<U>(arg0: long, arg1: java.util.function$.Function<V, U>): U
                public reduceValues<U>(arg0: long, arg1: java.util.function$.BiFunction<V, V, V>): V
                public reduceValues<U>(arg0: long, arg1: java.util.function$.Function<V, U>, arg2: java.util.function$.BiFunction<U, U, U>): U
                public reduceValuesToDouble<U>(arg0: long, arg1: java.util.function$.ToDoubleFunction<V> | java.util.function$.ToDoubleFunction$$Lambda<V>, arg2: double, arg3: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$Lambda): double
                public reduceValuesToLong<U>(arg0: long, arg1: java.util.function$.ToLongFunction<V> | java.util.function$.ToLongFunction$$Lambda<V>, arg2: long, arg3: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
                public reduceValuesToInt<U>(arg0: long, arg1: java.util.function$.ToIntFunction<V> | java.util.function$.ToIntFunction$$Lambda<V>, arg2: int, arg3: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
                public forEachEntry<U>(arg0: long, arg1: java.util.function$.Consumer<java.util.Map$Entry<K, V>>): void
                public forEachEntry<U>(arg0: long, arg1: java.util.function$.Function<java.util.Map$Entry<K, V>, U>, arg2: java.util.function$.Consumer$$TypeScript<U>): void
                public searchEntries<U>(arg0: long, arg1: java.util.function$.Function<java.util.Map$Entry<K, V>, U>): U
                public reduceEntries<U>(arg0: long, arg1: java.util.function$.BiFunction<java.util.Map$Entry<K, V>, java.util.Map$Entry<K, V>, java.util.Map$Entry<K, V>>): java.util.Map$Entry<K, V>
                public reduceEntries<U>(arg0: long, arg1: java.util.function$.Function<java.util.Map$Entry<K, V>, U>, arg2: java.util.function$.BiFunction<U, U, U>): U
                public reduceEntriesToDouble<U>(arg0: long, arg1: java.util.function$.ToDoubleFunction<java.util.Map$Entry<K, V>> | java.util.function$.ToDoubleFunction$$Lambda<java.util.Map$Entry<K, V>>, arg2: double, arg3: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$Lambda): double
                public reduceEntriesToLong<U>(arg0: long, arg1: java.util.function$.ToLongFunction<java.util.Map$Entry<K, V>> | java.util.function$.ToLongFunction$$Lambda<java.util.Map$Entry<K, V>>, arg2: long, arg3: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
                public reduceEntriesToInt<U>(arg0: long, arg1: java.util.function$.ToIntFunction<java.util.Map$Entry<K, V>> | java.util.function$.ToIntFunction$$Lambda<java.util.Map$Entry<K, V>>, arg2: int, arg3: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
                public keySet<U>(): java.util.Set
                public static class: java.lang.Class<any>
            }
        }
    }
}