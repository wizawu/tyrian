declare namespace javax {
  namespace script {
    class SimpleBindings implements javax.script.Bindings {
      public constructor(arg0: java.util.Map<java.lang.String, java.lang.Object>)
      public constructor()
      public put(arg0: java.lang.String | string, arg1: java.lang.Object | any): java.lang.Object
      public putAll(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
      public clear(): void
      public containsKey(arg0: java.lang.Object | any): boolean
      public containsValue(arg0: java.lang.Object | any): boolean
      public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.String, java.lang.Object>>
      public get(arg0: java.lang.Object | any): java.lang.Object
      public isEmpty(): boolean
      public keySet(): java.util.Set<java.lang.String>
      public remove(arg0: java.lang.Object | any): java.lang.Object
      public size(): number
      public values(): java.util.Collection<java.lang.Object>
      public put(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
    }
  }
}
