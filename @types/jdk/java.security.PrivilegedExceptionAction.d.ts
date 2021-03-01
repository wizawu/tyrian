declare namespace java {
  namespace security {

    interface PrivilegedExceptionAction<T> {

      run(): T
    }

  }
}
