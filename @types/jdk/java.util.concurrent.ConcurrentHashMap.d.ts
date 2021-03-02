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
        static spread(arg0: number | java.lang.Integer): number
        static comparableClassFor(arg0: java.lang.Object | any): java.lang.Class<unknown>
        static compareComparables(arg0: java.lang.Class<unknown>, arg1: java.lang.Object | any, arg2: java.lang.Object | any): number
        static tabAt<K,V>(arg0: java.util.concurrent.ConcurrentHashMap$Node<K,V>[], arg1: number | java.lang.Integer): java.util.concurrent.ConcurrentHashMap$Node<K,V>
        static casTabAt<K,V>(arg0: java.util.concurrent.ConcurrentHashMap$Node<K,V>[], arg1: number | java.lang.Integer, arg2: java.util.concurrent.ConcurrentHashMap$Node<K,V>, arg3: java.util.concurrent.ConcurrentHashMap$Node<K,V>): boolean
        static setTabAt<K,V>(arg0: java.util.concurrent.ConcurrentHashMap$Node<K,V>[], arg1: number | java.lang.Integer, arg2: java.util.concurrent.ConcurrentHashMap$Node<K,V>): void
        public constructor()
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: java.util.Map<K,V>)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Float)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Float, arg2: number | java.lang.Integer)
        public size(): number
        public isEmpty(): boolean
        public get(arg0: java.lang.Object | any): V
        public containsKey(arg0: java.lang.Object | any): boolean
        public containsValue(arg0: java.lang.Object | any): boolean
        public put(arg0: K, arg1: V): V
        putVal(arg0: K, arg1: V, arg2: boolean | java.lang.Boolean): V
        public putAll(arg0: java.util.Map<K,V>): void
        public remove(arg0: java.lang.Object | any): V
        replaceNode(arg0: java.lang.Object | any, arg1: V, arg2: java.lang.Object | any): V
        public clear(): void
        public keySet(): java.util.concurrent.ConcurrentHashMap$KeySetView<K,V>
        public values(): java.util.Collection<V>
        public entrySet(): java.util.Set<java.util.Map$Entry<K,V>>
        public hashCode(): number
        public toString(): java.lang.String
        public equals(arg0: java.lang.Object | any): boolean
        public putIfAbsent(arg0: K, arg1: V): V
        public remove(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
        public replace(arg0: K, arg1: V, arg2: V): boolean
        public replace(arg0: K, arg1: V): V
        public getOrDefault(arg0: java.lang.Object | any, arg1: V): V
        public forEach(arg0: java.util.function$.BiConsumer<unknown,unknown>): void
        public replaceAll(arg0: java.util.function$.BiFunction<unknown,unknown,V>): void
        removeEntryIf(arg0: java.util.function$.Predicate<unknown>): boolean
        removeValueIf(arg0: java.util.function$.Predicate<unknown>): boolean
        public computeIfAbsent(arg0: K, arg1: java.util.function$.Function<unknown,V>): V
        public computeIfPresent(arg0: K, arg1: java.util.function$.BiFunction<unknown,unknown,V>): V
        public compute(arg0: K, arg1: java.util.function$.BiFunction<unknown,unknown,V>): V
        public merge(arg0: K, arg1: V, arg2: java.util.function$.BiFunction<unknown,unknown,V>): V
        public contains(arg0: java.lang.Object | any): boolean
        public keys(): java.util.Enumeration<K>
        public elements(): java.util.Enumeration<V>
        public mappingCount(): number
        public static newKeySet<K>(): java.util.concurrent.ConcurrentHashMap$KeySetView<K,java.lang.Boolean>
        public static newKeySet<K>(arg0: number | java.lang.Integer): java.util.concurrent.ConcurrentHashMap$KeySetView<K,java.lang.Boolean>
        public keySet(arg0: V): java.util.concurrent.ConcurrentHashMap$KeySetView<K,V>
        static resizeStamp(arg0: number | java.lang.Integer): number
        helpTransfer(arg0: java.util.concurrent.ConcurrentHashMap$Node<K,V>[], arg1: java.util.concurrent.ConcurrentHashMap$Node<K,V>): java.util.concurrent.ConcurrentHashMap$Node<K,V>[]
        sumCount(): number
        static untreeify<K,V>(arg0: java.util.concurrent.ConcurrentHashMap$Node<K,V>): java.util.concurrent.ConcurrentHashMap$Node<K,V>
        batchFor(arg0: number | java.lang.Long): number
        public forEach(arg0: number | java.lang.Long, arg1: java.util.function$.BiConsumer<unknown,unknown>): void
        public forEach<U>(arg0: number | java.lang.Long, arg1: java.util.function$.BiFunction<unknown,unknown,U>, arg2: java.util.function$.Consumer<unknown>): void
        public search<U>(arg0: number | java.lang.Long, arg1: java.util.function$.BiFunction<unknown,unknown,U>): U
        public reduce<U>(arg0: number | java.lang.Long, arg1: java.util.function$.BiFunction<unknown,unknown,U>, arg2: java.util.function$.BiFunction<unknown,unknown,U>): U
        public reduceToDouble(arg0: number | java.lang.Long, arg1: java.util.function$.ToDoubleBiFunction<unknown,unknown> | java.util.function$.ToDoubleBiFunction$$lambda<unknown,unknown>, arg2: number | java.lang.Double, arg3: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$lambda): number
        public reduceToLong(arg0: number | java.lang.Long, arg1: java.util.function$.ToLongBiFunction<unknown,unknown> | java.util.function$.ToLongBiFunction$$lambda<unknown,unknown>, arg2: number | java.lang.Long, arg3: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$lambda): number
        public reduceToInt(arg0: number | java.lang.Long, arg1: java.util.function$.ToIntBiFunction<unknown,unknown> | java.util.function$.ToIntBiFunction$$lambda<unknown,unknown>, arg2: number | java.lang.Integer, arg3: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$lambda): number
        public forEachKey(arg0: number | java.lang.Long, arg1: java.util.function$.Consumer<unknown>): void
        public forEachKey<U>(arg0: number | java.lang.Long, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.function$.Consumer<unknown>): void
        public searchKeys<U>(arg0: number | java.lang.Long, arg1: java.util.function$.Function<unknown,U>): U
        public reduceKeys(arg0: number | java.lang.Long, arg1: java.util.function$.BiFunction<unknown,unknown,K>): K
        public reduceKeys<U>(arg0: number | java.lang.Long, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.function$.BiFunction<unknown,unknown,U>): U
        public reduceKeysToDouble(arg0: number | java.lang.Long, arg1: java.util.function$.ToDoubleFunction<unknown> | java.util.function$.ToDoubleFunction$$lambda<unknown>, arg2: number | java.lang.Double, arg3: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$lambda): number
        public reduceKeysToLong(arg0: number | java.lang.Long, arg1: java.util.function$.ToLongFunction<unknown> | java.util.function$.ToLongFunction$$lambda<unknown>, arg2: number | java.lang.Long, arg3: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$lambda): number
        public reduceKeysToInt(arg0: number | java.lang.Long, arg1: java.util.function$.ToIntFunction<unknown> | java.util.function$.ToIntFunction$$lambda<unknown>, arg2: number | java.lang.Integer, arg3: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$lambda): number
        public forEachValue(arg0: number | java.lang.Long, arg1: java.util.function$.Consumer<unknown>): void
        public forEachValue<U>(arg0: number | java.lang.Long, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.function$.Consumer<unknown>): void
        public searchValues<U>(arg0: number | java.lang.Long, arg1: java.util.function$.Function<unknown,U>): U
        public reduceValues(arg0: number | java.lang.Long, arg1: java.util.function$.BiFunction<unknown,unknown,V>): V
        public reduceValues<U>(arg0: number | java.lang.Long, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.function$.BiFunction<unknown,unknown,U>): U
        public reduceValuesToDouble(arg0: number | java.lang.Long, arg1: java.util.function$.ToDoubleFunction<unknown> | java.util.function$.ToDoubleFunction$$lambda<unknown>, arg2: number | java.lang.Double, arg3: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$lambda): number
        public reduceValuesToLong(arg0: number | java.lang.Long, arg1: java.util.function$.ToLongFunction<unknown> | java.util.function$.ToLongFunction$$lambda<unknown>, arg2: number | java.lang.Long, arg3: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$lambda): number
        public reduceValuesToInt(arg0: number | java.lang.Long, arg1: java.util.function$.ToIntFunction<unknown> | java.util.function$.ToIntFunction$$lambda<unknown>, arg2: number | java.lang.Integer, arg3: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$lambda): number
        public forEachEntry(arg0: number | java.lang.Long, arg1: java.util.function$.Consumer<unknown>): void
        public forEachEntry<U>(arg0: number | java.lang.Long, arg1: java.util.function$.Function<java.util.Map$Entry<K,V>,U>, arg2: java.util.function$.Consumer<unknown>): void
        public searchEntries<U>(arg0: number | java.lang.Long, arg1: java.util.function$.Function<java.util.Map$Entry<K,V>,U>): U
        public reduceEntries(arg0: number | java.lang.Long, arg1: java.util.function$.BiFunction<java.util.Map$Entry<K,V>,java.util.Map$Entry<K,V>,java.util.Map$Entry<K,V>>): java.util.Map$Entry<K,V>
        public reduceEntries<U>(arg0: number | java.lang.Long, arg1: java.util.function$.Function<java.util.Map$Entry<K,V>,U>, arg2: java.util.function$.BiFunction<unknown,unknown,U>): U
        public reduceEntriesToDouble(arg0: number | java.lang.Long, arg1: java.util.function$.ToDoubleFunction<java.util.Map$Entry<K,V>> | java.util.function$.ToDoubleFunction$$lambda<java.util.Map$Entry<K,V>>, arg2: number | java.lang.Double, arg3: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$lambda): number
        public reduceEntriesToLong(arg0: number | java.lang.Long, arg1: java.util.function$.ToLongFunction<java.util.Map$Entry<K,V>> | java.util.function$.ToLongFunction$$lambda<java.util.Map$Entry<K,V>>, arg2: number | java.lang.Long, arg3: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$lambda): number
        public reduceEntriesToInt(arg0: number | java.lang.Long, arg1: java.util.function$.ToIntFunction<java.util.Map$Entry<K,V>> | java.util.function$.ToIntFunction$$lambda<java.util.Map$Entry<K,V>>, arg2: number | java.lang.Integer, arg3: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$lambda): number
        public keySet(): java.util.Set
      }

    }
  }
}
