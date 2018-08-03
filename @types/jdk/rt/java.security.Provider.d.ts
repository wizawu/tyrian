declare namespace java {
    namespace security {
        abstract class Provider extends java.util.Properties {
            protected constructor(arg0: java.lang.String | string, arg1: double, arg2: java.lang.String | string)
            public getName(): string
            public getVersion(): double
            public getInfo(): string
            public toString(): string
            public clear(): void
            public load(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
            public putAll(arg0: java.util.Map<any, any>): void
            public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.Object, java.lang.Object>>
            public keySet(): java.util.Set<java.lang.Object>
            public values(): java.util.Collection<java.lang.Object>
            public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
            public putIfAbsent(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
            public remove(arg0: java.lang.Object): java.lang.Object
            public remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
            public replace(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): boolean
            public replace(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
            public replaceAll(arg0: java.util.function$.BiFunction<java.lang.Object, java.lang.Object, java.lang.Object>): void
            public compute(arg0: java.lang.Object, arg1: java.util.function$.BiFunction<java.lang.Object, java.lang.Object, java.lang.Object>): java.lang.Object
            public computeIfAbsent(arg0: java.lang.Object, arg1: java.util.function$.Function<java.lang.Object, java.lang.Object>): java.lang.Object
            public computeIfPresent(arg0: java.lang.Object, arg1: java.util.function$.BiFunction<java.lang.Object, java.lang.Object, java.lang.Object>): java.lang.Object
            public merge(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.util.function$.BiFunction<java.lang.Object, java.lang.Object, java.lang.Object>): java.lang.Object
            public get(arg0: java.lang.Object): java.lang.Object
            public getOrDefault(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
            public forEach(arg0: java.util.function$.BiConsumer<java.lang.Object, java.lang.Object>): void
            public keys(): java.util.Enumeration<java.lang.Object>
            public elements(): java.util.Enumeration<java.lang.Object>
            public getProperty(arg0: java.lang.String | string): string
            public getService(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.Provider$Service
            public getServices(): java.util.Set<java.security.Provider$Service>
            protected putService(arg0: java.security.Provider$Service): void
            protected removeService(arg0: java.security.Provider$Service): void
            public static class: java.lang.Class<any>
        }
    }
}