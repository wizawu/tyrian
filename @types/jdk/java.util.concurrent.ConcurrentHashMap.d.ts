declare namespace java {
  namespace util {
    namespace concurrent {

      class ConcurrentHashMap<K,V> extends java.util.AbstractMap<K,V> implements java.util.concurrent.ConcurrentMap<K,V>, java.io.Serializable {
        static readonly MAX_ARRAY_SIZE: int
        static readonly TREEIFY_THRESHOLD: int
        static readonly UNTREEIFY_THRESHOLD: int
        static readonly MIN_TREEIFY_CAPACITY: int
        static readonly MOVED: int
        static readonly TREEBIN: int
        static readonly RESERVED: int
        static readonly HASH_BITS: int
        static readonly NCPU: int
        table: java.util.concurrent.ConcurrentHashMap$Node<K,V>[]
        static spread(arg0: int): int
        static comparableClassFor(arg0: java.lang.Object): java.lang.Class<unknown>
        static compareComparables(arg0: java.lang.Class<unknown>, arg1: java.lang.Object, arg2: java.lang.Object): int
        static tabAt<K,V>(arg0: java.util.concurrent.ConcurrentHashMap$Node<K,V>[], arg1: int): java.util.concurrent.ConcurrentHashMap$Node<K,V>
        static casTabAt<K,V>(arg0: java.util.concurrent.ConcurrentHashMap$Node<K,V>[], arg1: int, arg2: java.util.concurrent.ConcurrentHashMap$Node<K,V>, arg3: java.util.concurrent.ConcurrentHashMap$Node<K,V>): boolean
        static setTabAt<K,V>(arg0: java.util.concurrent.ConcurrentHashMap$Node<K,V>[], arg1: int, arg2: java.util.concurrent.ConcurrentHashMap$Node<K,V>): void
        public constructor()
        public constructor(arg0: int)
        public constructor(arg0: java.util.Map<K,V>)
        public constructor(arg0: int, arg1: float)
        public constructor(arg0: int, arg1: float, arg2: int)
        public size(): int
        public isEmpty(): boolean
        public get(arg0: java.lang.Object): V
        public containsKey(arg0: java.lang.Object): boolean
        public containsValue(arg0: java.lang.Object): boolean
        public put(arg0: K, arg1: V): V
        putVal(arg0: K, arg1: V, arg2: boolean): V
        public putAll(arg0: java.util.Map<K,V>): void
        public remove(arg0: java.lang.Object): V
        replaceNode(arg0: java.lang.Object, arg1: V, arg2: java.lang.Object): V
        public clear(): void
        public keySet(): java.util.concurrent.ConcurrentHashMap$KeySetView<K,V>
        public values(): java.util.Collection<V>
        public entrySet(): java.util.Set<java.util.Map$Entry<K,V>>
        public hashCode(): int
        public toString(): java.lang.String
        public equals(arg0: java.lang.Object): boolean
        public putIfAbsent(arg0: K, arg1: V): V
        public remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
        public replace(arg0: K, arg1: V, arg2: V): boolean
        public replace(arg0: K, arg1: V): V
        public getOrDefault(arg0: java.lang.Object, arg1: V): V
        public forEach(arg0: java.util.function$.BiConsumer<unknown,unknown>): void
        public replaceAll(arg0: java.util.function$.BiFunction<unknown,unknown,V>): void
        removeEntryIf(arg0: java.util.function$.Predicate<unknown>): boolean
        removeValueIf(arg0: java.util.function$.Predicate<unknown>): boolean
        public computeIfAbsent(arg0: K, arg1: java.util.function$.Function<unknown,V>): V
        public computeIfPresent(arg0: K, arg1: java.util.function$.BiFunction<unknown,unknown,V>): V
        public compute(arg0: K, arg1: java.util.function$.BiFunction<unknown,unknown,V>): V
        public merge(arg0: K, arg1: V, arg2: java.util.function$.BiFunction<unknown,unknown,V>): V
        public contains(arg0: java.lang.Object): boolean
        public keys(): java.util.Enumeration<K>
        public elements(): java.util.Enumeration<V>
        public mappingCount(): long
        public static newKeySet<K>(): java.util.concurrent.ConcurrentHashMap$KeySetView<K,java.lang.Boolean>
        public static newKeySet<K>(arg0: int): java.util.concurrent.ConcurrentHashMap$KeySetView<K,java.lang.Boolean>
        public keySet(arg0: V): java.util.concurrent.ConcurrentHashMap$KeySetView<K,V>
        static resizeStamp(arg0: int): int
        helpTransfer(arg0: java.util.concurrent.ConcurrentHashMap$Node<K,V>[], arg1: java.util.concurrent.ConcurrentHashMap$Node<K,V>): java.util.concurrent.ConcurrentHashMap$Node<K,V>[]
        sumCount(): long
        static untreeify<K,V>(arg0: java.util.concurrent.ConcurrentHashMap$Node<K,V>): java.util.concurrent.ConcurrentHashMap$Node<K,V>
        batchFor(arg0: long): int
        public forEach(arg0: long, arg1: java.util.function$.BiConsumer<unknown,unknown>): void
        public forEach<U>(arg0: long, arg1: java.util.function$.BiFunction<unknown,unknown,U>, arg2: java.util.function$.Consumer<unknown>): void
        public search<U>(arg0: long, arg1: java.util.function$.BiFunction<unknown,unknown,U>): U
        public reduce<U>(arg0: long, arg1: java.util.function$.BiFunction<unknown,unknown,U>, arg2: java.util.function$.BiFunction<unknown,unknown,U>): U
        public reduceToDouble(arg0: long, arg1: java.util.function$.ToDoubleBiFunction<unknown,unknown>, arg2: double, arg3: java.util.function$.DoubleBinaryOperator): double
        public reduceToLong(arg0: long, arg1: java.util.function$.ToLongBiFunction<unknown,unknown>, arg2: long, arg3: java.util.function$.LongBinaryOperator): long
        public reduceToInt(arg0: long, arg1: java.util.function$.ToIntBiFunction<unknown,unknown>, arg2: int, arg3: java.util.function$.IntBinaryOperator): int
        public forEachKey(arg0: long, arg1: java.util.function$.Consumer<unknown>): void
        public forEachKey<U>(arg0: long, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.function$.Consumer<unknown>): void
        public searchKeys<U>(arg0: long, arg1: java.util.function$.Function<unknown,U>): U
        public reduceKeys(arg0: long, arg1: java.util.function$.BiFunction<unknown,unknown,K>): K
        public reduceKeys<U>(arg0: long, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.function$.BiFunction<unknown,unknown,U>): U
        public reduceKeysToDouble(arg0: long, arg1: java.util.function$.ToDoubleFunction<unknown>, arg2: double, arg3: java.util.function$.DoubleBinaryOperator): double
        public reduceKeysToLong(arg0: long, arg1: java.util.function$.ToLongFunction<unknown>, arg2: long, arg3: java.util.function$.LongBinaryOperator): long
        public reduceKeysToInt(arg0: long, arg1: java.util.function$.ToIntFunction<unknown>, arg2: int, arg3: java.util.function$.IntBinaryOperator): int
        public forEachValue(arg0: long, arg1: java.util.function$.Consumer<unknown>): void
        public forEachValue<U>(arg0: long, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.function$.Consumer<unknown>): void
        public searchValues<U>(arg0: long, arg1: java.util.function$.Function<unknown,U>): U
        public reduceValues(arg0: long, arg1: java.util.function$.BiFunction<unknown,unknown,V>): V
        public reduceValues<U>(arg0: long, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.function$.BiFunction<unknown,unknown,U>): U
        public reduceValuesToDouble(arg0: long, arg1: java.util.function$.ToDoubleFunction<unknown>, arg2: double, arg3: java.util.function$.DoubleBinaryOperator): double
        public reduceValuesToLong(arg0: long, arg1: java.util.function$.ToLongFunction<unknown>, arg2: long, arg3: java.util.function$.LongBinaryOperator): long
        public reduceValuesToInt(arg0: long, arg1: java.util.function$.ToIntFunction<unknown>, arg2: int, arg3: java.util.function$.IntBinaryOperator): int
        public forEachEntry(arg0: long, arg1: java.util.function$.Consumer<unknown>): void
        public forEachEntry<U>(arg0: long, arg1: java.util.function$.Function<java.util.Map$Entry<K,V>,U>, arg2: java.util.function$.Consumer<unknown>): void
        public searchEntries<U>(arg0: long, arg1: java.util.function$.Function<java.util.Map$Entry<K,V>,U>): U
        public reduceEntries(arg0: long, arg1: java.util.function$.BiFunction<java.util.Map$Entry<K,V>,java.util.Map$Entry<K,V>,java.util.Map$Entry<K,V>>): java.util.Map$Entry<K,V>
        public reduceEntries<U>(arg0: long, arg1: java.util.function$.Function<java.util.Map$Entry<K,V>,U>, arg2: java.util.function$.BiFunction<unknown,unknown,U>): U
        public reduceEntriesToDouble(arg0: long, arg1: java.util.function$.ToDoubleFunction<java.util.Map$Entry<K,V>>, arg2: double, arg3: java.util.function$.DoubleBinaryOperator): double
        public reduceEntriesToLong(arg0: long, arg1: java.util.function$.ToLongFunction<java.util.Map$Entry<K,V>>, arg2: long, arg3: java.util.function$.LongBinaryOperator): long
        public reduceEntriesToInt(arg0: long, arg1: java.util.function$.ToIntFunction<java.util.Map$Entry<K,V>>, arg2: int, arg3: java.util.function$.IntBinaryOperator): int
        public keySet(): java.util.Set
      }

    }
  }
}
