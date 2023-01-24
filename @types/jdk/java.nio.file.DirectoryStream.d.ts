declare namespace java {
  namespace nio {
    namespace file {
      interface DirectoryStream<T> extends java.io.Closeable, java.lang.Iterable<T> {
        iterator(): java.util.Iterator<T>
      }
    }
  }
}
