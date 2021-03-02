declare namespace com {
  namespace sun {
    namespace net {
      namespace httpserver {

        class Headers implements java.util.Map<java.lang.String,java.util.List<java.lang.String>> {
          map: java.util.HashMap<java.lang.String,java.util.List<java.lang.String>>
          public constructor()
          public size(): number
          public isEmpty(): boolean
          public containsKey(arg0: java.lang.Object | any): boolean
          public containsValue(arg0: java.lang.Object | any): boolean
          public get(arg0: java.lang.Object | any): java.util.List<java.lang.String>
          public getFirst(arg0: java.lang.String | string): java.lang.String
          public put(arg0: java.lang.String | string, arg1: java.util.List<java.lang.String>): java.util.List<java.lang.String>
          public add(arg0: java.lang.String | string, arg1: java.lang.String | string): void
          public set(arg0: java.lang.String | string, arg1: java.lang.String | string): void
          public remove(arg0: java.lang.Object | any): java.util.List<java.lang.String>
          public putAll(arg0: java.util.Map<java.lang.String,java.util.List<java.lang.String>>): void
          public clear(): void
          public keySet(): java.util.Set<java.lang.String>
          public values(): java.util.Collection<java.util.List<java.lang.String>>
          public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.String,java.util.List<java.lang.String>>>
          public equals(arg0: java.lang.Object | any): boolean
          public hashCode(): number
          public remove(arg0: java.lang.Object | any): java.lang.Object
          public put(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
          public get(arg0: java.lang.Object | any): java.lang.Object
        }

      }
    }
  }
}
