declare namespace java {
  namespace util {

    class Properties extends java.util.Hashtable<java.lang.Object,java.lang.Object> {
      protected defaults: java.util.Properties
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: java.util.Properties)
      public setProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
      public load(arg0: java.io.Reader): void
      public load(arg0: java.io.InputStream): void
      public save(arg0: java.io.OutputStream, arg1: java.lang.String | string): void
      public store(arg0: java.io.Writer, arg1: java.lang.String | string): void
      public store(arg0: java.io.OutputStream, arg1: java.lang.String | string): void
      public loadFromXML(arg0: java.io.InputStream): void
      public storeToXML(arg0: java.io.OutputStream, arg1: java.lang.String | string): void
      public storeToXML(arg0: java.io.OutputStream, arg1: java.lang.String | string, arg2: java.lang.String | string): void
      public storeToXML(arg0: java.io.OutputStream, arg1: java.lang.String | string, arg2: java.nio.charset.Charset): void
      public getProperty(arg0: java.lang.String | string): java.lang.String
      public getProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
      public propertyNames(): java.util.Enumeration<unknown>
      public stringPropertyNames(): java.util.Set<java.lang.String>
      public list(arg0: java.io.PrintStream): void
      public list(arg0: java.io.PrintWriter): void
      public size(): number
      public isEmpty(): boolean
      public keys(): java.util.Enumeration<java.lang.Object>
      public elements(): java.util.Enumeration<java.lang.Object>
      public contains(arg0: java.lang.Object | any): boolean
      public containsValue(arg0: java.lang.Object | any): boolean
      public containsKey(arg0: java.lang.Object | any): boolean
      public get(arg0: java.lang.Object | any): java.lang.Object
      public put(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
      public remove(arg0: java.lang.Object | any): java.lang.Object
      public putAll(arg0: java.util.Map<unknown,unknown>): void
      public clear(): void
      public toString(): java.lang.String
      public keySet(): java.util.Set<java.lang.Object>
      public values(): java.util.Collection<java.lang.Object>
      public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.Object,java.lang.Object>>
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public getOrDefault(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
      public forEach(arg0: java.util.function$.BiConsumer<unknown,unknown>): void
      public replaceAll(arg0: java.util.function$.BiFunction<unknown,unknown,unknown>): void
      public putIfAbsent(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
      public remove(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
      public replace(arg0: java.lang.Object | any, arg1: java.lang.Object | any, arg2: java.lang.Object | any): boolean
      public replace(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
      public computeIfAbsent(arg0: java.lang.Object | any, arg1: java.util.function$.Function<unknown,unknown>): java.lang.Object
      public computeIfPresent(arg0: java.lang.Object | any, arg1: java.util.function$.BiFunction<unknown,unknown,unknown>): java.lang.Object
      public compute(arg0: java.lang.Object | any, arg1: java.util.function$.BiFunction<unknown,unknown,unknown>): java.lang.Object
      public merge(arg0: java.lang.Object | any, arg1: java.lang.Object | any, arg2: java.util.function$.BiFunction<unknown,unknown,unknown>): java.lang.Object
      protected rehash(): void
      public clone(): java.lang.Object
      writeHashtable(arg0: java.io.ObjectOutputStream): void
      readHashtable(arg0: java.io.ObjectInputStream): void
    }

  }
}
