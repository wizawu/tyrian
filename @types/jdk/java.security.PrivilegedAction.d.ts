declare namespace java {
  namespace security {

    interface PrivilegedAction<T> {

      run(): T
    }

  }
}
