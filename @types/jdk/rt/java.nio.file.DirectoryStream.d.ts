declare namespace java {
    namespace nio {
        namespace file {
            interface DirectoryStream<T> extends java.io.Closeable , java.lang.Iterable<T> {
                iterator(): java.util.Iterator<T>
            }
            interface DirectoryStream$$Lambda<T> extends java.io.Closeable , java.lang.Iterable<T> {
                (): java.util.Iterator<T>
            }
        }
    }
}