declare namespace javax {
  namespace script {
    interface Bindings extends java.util.Map<java.lang.String, java.lang.Object> {
      put(arg0: java.lang.String | string, arg1: java.lang.Object | any): java.lang.Object
      putAll(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
      containsKey(arg0: java.lang.Object | any): boolean
      get(arg0: java.lang.Object | any): java.lang.Object
      remove(arg0: java.lang.Object | any): java.lang.Object
      put(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
    }
  }
}
