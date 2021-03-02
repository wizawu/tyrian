declare namespace java {
  namespace util {

    class LinkedHashMap<K,V> extends java.util.HashMap<K,V> implements java.util.Map<K,V> {
      head: java.util.LinkedHashMap$Entry<K,V>
      tail: java.util.LinkedHashMap$Entry<K,V>
      readonly accessOrder: boolean
      reinitialize(): void
      newNode(arg0: number | java.lang.Integer, arg1: K, arg2: V, arg3: java.util.HashMap$Node<K,V>): java.util.HashMap$Node<K,V>
      replacementNode(arg0: java.util.HashMap$Node<K,V>, arg1: java.util.HashMap$Node<K,V>): java.util.HashMap$Node<K,V>
      newTreeNode(arg0: number | java.lang.Integer, arg1: K, arg2: V, arg3: java.util.HashMap$Node<K,V>): java.util.HashMap$TreeNode<K,V>
      replacementTreeNode(arg0: java.util.HashMap$Node<K,V>, arg1: java.util.HashMap$Node<K,V>): java.util.HashMap$TreeNode<K,V>
      afterNodeRemoval(arg0: java.util.HashMap$Node<K,V>): void
      afterNodeInsertion(arg0: boolean | java.lang.Boolean): void
      afterNodeAccess(arg0: java.util.HashMap$Node<K,V>): void
      internalWriteEntries(arg0: java.io.ObjectOutputStream): void
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Float)
      public constructor(arg0: number | java.lang.Integer)
      public constructor()
      public constructor(arg0: java.util.Map<K,V>)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Float, arg2: boolean | java.lang.Boolean)
      public containsValue(arg0: java.lang.Object | any): boolean
      public get(arg0: java.lang.Object | any): V
      public getOrDefault(arg0: java.lang.Object | any, arg1: V): V
      public clear(): void
      protected removeEldestEntry(arg0: java.util.Map$Entry<K,V>): boolean
      public keySet(): java.util.Set<K>
      public values(): java.util.Collection<V>
      public entrySet(): java.util.Set<java.util.Map$Entry<K,V>>
      public forEach(arg0: java.util.function$.BiConsumer<unknown,unknown>): void
      public replaceAll(arg0: java.util.function$.BiFunction<unknown,unknown,V>): void
    }

  }
}
