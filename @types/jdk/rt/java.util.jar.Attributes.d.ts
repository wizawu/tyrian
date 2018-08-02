declare namespace java {
    namespace util {
        namespace jar {
            class Attributes implements java.util.Map<java.lang.Object, java.lang.Object> , java.lang.Cloneable {
                protected map: java.util.Map<java.lang.Object, java.lang.Object>
                public constructor()
                public constructor(arg0: int)
                public constructor(arg0: java.util.jar.Attributes)
                public get(arg0: java.lang.Object): java.lang.Object
                public getValue(arg0: java.lang.String | string): string
                public getValue(arg0: java.util.jar.Attributes$Name): string
                public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                public putValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                public remove(arg0: java.lang.Object): java.lang.Object
                public containsValue(arg0: java.lang.Object): boolean
                public containsKey(arg0: java.lang.Object): boolean
                public putAll(arg0: java.util.Map<any, any>): void
                public clear(): void
                public size(): int
                public isEmpty(): boolean
                public keySet(): java.util.Set<java.lang.Object>
                public values(): java.util.Collection<java.lang.Object>
                public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.Object, java.lang.Object>>
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}