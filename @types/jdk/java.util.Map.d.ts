declare namespace java {
  namespace util {

    interface Map<K,V> {
      size(): int
      isEmpty(): boolean
      containsKey(arg0: java.lang.Object): boolean
      containsValue(arg0: java.lang.Object): boolean
      get(arg0: java.lang.Object): V
      put(arg0: K, arg1: V): V
      remove(arg0: java.lang.Object): V
      putAll(arg0: java.util.Map<K,V>): void
      clear(): void
      keySet(): java.util.Set<K>
      values(): java.util.Collection<V>
      entrySet(): java.util.Set<java.util.Map$Entry<K,V>>
      equals(arg0: java.lang.Object): boolean
      hashCode(): int
      getOrDefault(arg0: java.lang.Object, arg1: V): V
      forEach(arg0: java.util.function$.BiConsumer<unknown,unknown>): void
      replaceAll(arg0: java.util.function$.BiFunction<unknown,unknown,V>): void
      putIfAbsent(arg0: K, arg1: V): V
      remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
      replace(arg0: K, arg1: V, arg2: V): boolean
      replace(arg0: K, arg1: V): V
      computeIfAbsent(arg0: K, arg1: java.util.function$.Function<unknown,V>): V
      computeIfPresent(arg0: K, arg1: java.util.function$.BiFunction<unknown,unknown,V>): V
      compute(arg0: K, arg1: java.util.function$.BiFunction<unknown,unknown,V>): V
      merge(arg0: K, arg1: V, arg2: java.util.function$.BiFunction<unknown,unknown,V>): V
      of<K,V>(): java.util.Map<K,V>
      of<K,V>(arg0: K, arg1: V): java.util.Map<K,V>
      of<K,V>(arg0: K, arg1: V, arg2: K, arg3: V): java.util.Map<K,V>
      of<K,V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): java.util.Map<K,V>
      of<K,V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): java.util.Map<K,V>
      of<K,V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): java.util.Map<K,V>
      of<K,V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): java.util.Map<K,V>
      of<K,V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): java.util.Map<K,V>
      of<K,V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): java.util.Map<K,V>
      of<K,V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): java.util.Map<K,V>
      of<K,V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): java.util.Map<K,V>
      ofEntries<K,V>(...arg0: java.util.Map$Entry<K,V>[]): java.util.Map<K,V>
      entry<K,V>(arg0: K, arg1: V): java.util.Map$Entry<K,V>
      copyOf<K,V>(arg0: java.util.Map<K,V>): java.util.Map<K,V>
    }

  }
}
