declare namespace sun {
    namespace net {
        namespace httpserver {
class UnmodifiableHeaders extends com.sun.net.httpserver.Headers {
    public size(): int
    public isEmpty(): boolean
    public containsKey(arg0: java.lang.Object): boolean
    public containsValue(arg0: java.lang.Object): boolean
    public get(arg0: java.lang.Object): java.util.List<java.lang.String>
    public getFirst(arg0: java.lang.String | string): string
    public put(arg0: java.lang.String | string, arg1: java.util.List<java.lang.String>): java.util.List<java.lang.String>
    public add(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public set(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public remove(arg0: java.lang.Object): java.util.List<java.lang.String>
    public putAll(arg0: java.util.Map<java.lang.String, java.util.List<java.lang.String>>): void
    public clear(): void
    public keySet(): java.util.Set<java.lang.String>
    public values(): java.util.Collection<java.util.List<java.lang.String>>
    public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.String, java.util.List<java.lang.String>>>
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public remove(arg0: java.lang.Object): java.lang.Object
    public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public get(arg0: java.lang.Object): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}