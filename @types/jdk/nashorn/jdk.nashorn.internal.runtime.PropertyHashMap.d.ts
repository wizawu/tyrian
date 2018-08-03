declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class PropertyHashMap implements java.util.Map<java.lang.String, jdk.nashorn.internal.runtime.Property> {
                    public static readonly EMPTY_HASHMAP: jdk.nashorn.internal.runtime.PropertyHashMap
                    public immutableReplace(arg0: jdk.nashorn.internal.runtime.Property, arg1: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.PropertyHashMap
                    public immutableAdd(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.PropertyHashMap
                    public immutableAdd(...arg0: jdk.nashorn.internal.runtime.Property[]): jdk.nashorn.internal.runtime.PropertyHashMap
                    public immutableAdd(arg0: java.util.Collection<jdk.nashorn.internal.runtime.Property>): jdk.nashorn.internal.runtime.PropertyHashMap
                    public immutableRemove(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.PropertyHashMap
                    public immutableRemove(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.PropertyHashMap
                    public find(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.Property
                    public size(): int
                    public isEmpty(): boolean
                    public containsKey(arg0: java.lang.Object): boolean
                    public containsKey(arg0: java.lang.String | string): boolean
                    public containsValue(arg0: java.lang.Object): boolean
                    public get(arg0: java.lang.Object): jdk.nashorn.internal.runtime.Property
                    public get(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.Property
                    public put(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.Property
                    public remove(arg0: java.lang.Object): jdk.nashorn.internal.runtime.Property
                    public putAll(arg0: java.util.Map<java.lang.String, jdk.nashorn.internal.runtime.Property>): void
                    public clear(): void
                    public keySet(): java.util.Set<java.lang.String>
                    public values(): java.util.Collection<jdk.nashorn.internal.runtime.Property>
                    public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.String, jdk.nashorn.internal.runtime.Property>>
                    public remove(arg0: java.lang.Object): java.lang.Object
                    public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public get(arg0: java.lang.Object): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}