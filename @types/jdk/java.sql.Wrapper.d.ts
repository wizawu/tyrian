declare namespace java {
  namespace sql {

    interface Wrapper {
      unwrap<T>(arg0: java.lang.Class<T>): T
      isWrapperFor(arg0: java.lang.Class<unknown>): boolean
    }

  }
}
