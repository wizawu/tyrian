declare namespace java {
  namespace util {

    class HashMap<K,V> extends java.util.AbstractMap<K,V> implements java.util.Map<K,V>, java.lang.Cloneable, java.io.Serializable {
      static readonly DEFAULT_INITIAL_CAPACITY: int
      static readonly MAXIMUM_CAPACITY: int
      static readonly DEFAULT_LOAD_FACTOR: float
      static readonly TREEIFY_THRESHOLD: int
      static readonly UNTREEIFY_THRESHOLD: int
      static readonly MIN_TREEIFY_CAPACITY: int
      table: java.util.HashMap$Node<K,V>[]
      entrySet: java.util.Set<java.util.Map$Entry<K,V>>
      size: int
      modCount: int
      threshold: int
      readonly loadFactor: float
      static hash(arg0: java.lang.Object): int
      static comparableClassFor(arg0: java.lang.Object): java.lang.Class<unknown>
      static compareComparables(arg0: java.lang.Class<unknown>, arg1: java.lang.Object, arg2: java.lang.Object): int
      static tableSizeFor(arg0: int): int
      public constructor(arg0: int, arg1: float)
      public constructor(arg0: int)
      public constructor()
      public constructor(arg0: java.util.Map<K,V>)
      putMapEntries(arg0: java.util.Map<K,V>, arg1: boolean): void
      public size(): int
      public isEmpty(): boolean
      public get(arg0: java.lang.Object): V
      getNode(arg0: int, arg1: java.lang.Object): java.util.HashMap$Node<K,V>
      public containsKey(arg0: java.lang.Object): boolean
      public put(arg0: K, arg1: V): V
      putVal(arg0: int, arg1: K, arg2: V, arg3: boolean, arg4: boolean): V
      resize(): java.util.HashMap$Node<K,V>[]
      treeifyBin(arg0: java.util.HashMap$Node<K,V>[], arg1: int): void
      public putAll(arg0: java.util.Map<K,V>): void
      public remove(arg0: java.lang.Object): V
      removeNode(arg0: int, arg1: java.lang.Object, arg2: java.lang.Object, arg3: boolean, arg4: boolean): java.util.HashMap$Node<K,V>
      public clear(): void
      public containsValue(arg0: java.lang.Object): boolean
      public keySet(): java.util.Set<K>
      public values(): java.util.Collection<V>
      public entrySet(): java.util.Set<java.util.Map$Entry<K,V>>
      public getOrDefault(arg0: java.lang.Object, arg1: V): V
      public putIfAbsent(arg0: K, arg1: V): V
      public remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
      public replace(arg0: K, arg1: V, arg2: V): boolean
      public replace(arg0: K, arg1: V): V
      public computeIfAbsent(arg0: K, arg1: java.util.function$.Function<unknown,V>): V
      public computeIfPresent(arg0: K, arg1: java.util.function$.BiFunction<unknown,unknown,V>): V
      public compute(arg0: K, arg1: java.util.function$.BiFunction<unknown,unknown,V>): V
      public merge(arg0: K, arg1: V, arg2: java.util.function$.BiFunction<unknown,unknown,V>): V
      public forEach(arg0: java.util.function$.BiConsumer<unknown,unknown>): void
      public replaceAll(arg0: java.util.function$.BiFunction<unknown,unknown,V>): void
      public clone(): java.lang.Object
      loadFactor(): float
      capacity(): int
      newNode(arg0: int, arg1: K, arg2: V, arg3: java.util.HashMap$Node<K,V>): java.util.HashMap$Node<K,V>
      replacementNode(arg0: java.util.HashMap$Node<K,V>, arg1: java.util.HashMap$Node<K,V>): java.util.HashMap$Node<K,V>
      newTreeNode(arg0: int, arg1: K, arg2: V, arg3: java.util.HashMap$Node<K,V>): java.util.HashMap$TreeNode<K,V>
      replacementTreeNode(arg0: java.util.HashMap$Node<K,V>, arg1: java.util.HashMap$Node<K,V>): java.util.HashMap$TreeNode<K,V>
      reinitialize(): void
      afterNodeAccess(arg0: java.util.HashMap$Node<K,V>): void
      afterNodeInsertion(arg0: boolean): void
      afterNodeRemoval(arg0: java.util.HashMap$Node<K,V>): void
      internalWriteEntries(arg0: java.io.ObjectOutputStream): void
    }

  }
}
