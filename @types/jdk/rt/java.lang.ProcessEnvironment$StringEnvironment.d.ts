declare namespace java {
    namespace lang {
class ProcessEnvironment$StringEnvironment extends java.util.AbstractMap<java.lang.String, java.lang.String> {
    public constructor(arg0: java.util.Map<java.lang.ProcessEnvironment$Variable, java.lang.ProcessEnvironment$Value>)
    public size(): int
    public isEmpty(): boolean
    public clear(): void
    public containsKey(arg0: java.lang.Object): boolean
    public containsValue(arg0: java.lang.Object): boolean
    public get(arg0: java.lang.Object): string
    public put(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public remove(arg0: java.lang.Object): string
    public keySet(): java.util.Set<java.lang.String>
    public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.String, java.lang.String>>
    public values(): java.util.Collection<java.lang.String>
    public toEnvironmentBlock(arg0: int[]): byte[]
    public remove(arg0: java.lang.Object): java.lang.Object
    public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public get(arg0: java.lang.Object): java.lang.Object
    public static class: java.lang.Class<any>
}

    }
}