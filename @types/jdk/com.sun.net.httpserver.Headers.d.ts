declare namespace com {
  namespace sun {
    namespace net {
      namespace httpserver {

        class Headers implements java.util.Map<java.lang.String,java.util.List<java.lang.String>> {
          map: java.util.HashMap<java.lang.String,java.util.List<java.lang.String>>
          public constructor()
          public size(): int
          public isEmpty(): boolean
          public containsKey(arg0: java.lang.Object): boolean
          public containsValue(arg0: java.lang.Object): boolean
          public get(arg0: java.lang.Object): java.util.List<java.lang.String>
          public getFirst(arg0: java.lang.String): java.lang.String
          public put(arg0: java.lang.String, arg1: java.util.List<java.lang.String>): java.util.List<java.lang.String>
          public add(arg0: java.lang.String, arg1: java.lang.String): void
          public set(arg0: java.lang.String, arg1: java.lang.String): void
          public remove(arg0: java.lang.Object): java.util.List<java.lang.String>
          public putAll(arg0: java.util.Map<java.lang.String,java.util.List<java.lang.String>>): void
          public clear(): void
          public keySet(): java.util.Set<java.lang.String>
          public values(): java.util.Collection<java.util.List<java.lang.String>>
          public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.String,java.util.List<java.lang.String>>>
          public equals(arg0: java.lang.Object): boolean
          public hashCode(): int
          public remove(arg0: java.lang.Object): java.lang.Object
          public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
          public get(arg0: java.lang.Object): java.lang.Object
        }

      }
    }
  }
}
