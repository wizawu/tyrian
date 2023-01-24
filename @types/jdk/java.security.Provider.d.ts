declare namespace java {
  namespace security {
    abstract class Provider extends java.util.Properties {
      protected constructor(
        arg0: java.lang.String | string,
        arg1: number | java.lang.Double,
        arg2: java.lang.String | string
      )
      protected constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      )
      public configure(arg0: java.lang.String | string): java.security.Provider
      public isConfigured(): boolean
      public getName(): java.lang.String
      public getVersion(): number
      public getVersionStr(): java.lang.String
      public getInfo(): java.lang.String
      public toString(): java.lang.String
      public clear(): void
      public load(arg0: java.io.InputStream): void
      public putAll(arg0: java.util.Map<unknown, unknown>): void
      public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.Object, java.lang.Object>>
      public keySet(): java.util.Set<java.lang.Object>
      public values(): java.util.Collection<java.lang.Object>
      public put(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
      public putIfAbsent(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
      public remove(arg0: java.lang.Object | any): java.lang.Object
      public remove(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
      public replace(arg0: java.lang.Object | any, arg1: java.lang.Object | any, arg2: java.lang.Object | any): boolean
      public replace(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
      public replaceAll(arg0: java.util.function$.BiFunction<unknown, unknown, java.lang.Object>): void
      public compute(
        arg0: java.lang.Object | any,
        arg1: java.util.function$.BiFunction<unknown, unknown, java.lang.Object>
      ): java.lang.Object
      public computeIfAbsent(
        arg0: java.lang.Object | any,
        arg1: java.util.function$.Function<unknown, java.lang.Object>
      ): java.lang.Object
      public computeIfPresent(
        arg0: java.lang.Object | any,
        arg1: java.util.function$.BiFunction<unknown, unknown, java.lang.Object>
      ): java.lang.Object
      public merge(
        arg0: java.lang.Object | any,
        arg1: java.lang.Object | any,
        arg2: java.util.function$.BiFunction<unknown, unknown, java.lang.Object>
      ): java.lang.Object
      public get(arg0: java.lang.Object | any): java.lang.Object
      public getOrDefault(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
      public forEach(arg0: java.util.function$.BiConsumer<unknown, unknown>): void
      public keys(): java.util.Enumeration<java.lang.Object>
      public elements(): java.util.Enumeration<java.lang.Object>
      public getProperty(arg0: java.lang.String | string): java.lang.String
      public getService(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string
      ): java.security.Provider$Service
      public getServices(): java.util.Set<java.security.Provider$Service>
      protected putService(arg0: java.security.Provider$Service): void
      getDefaultSecureRandomService(): java.security.Provider$Service
      protected removeService(arg0: java.security.Provider$Service): void
    }
  }
}
