declare namespace javax {
    namespace tools {
        interface StandardJavaFileManager extends javax.tools.JavaFileManager {
            isSameFile(arg0: javax.tools.FileObject, arg1: javax.tools.FileObject): boolean
            getJavaFileObjectsFromFiles(arg0: java.lang.Iterable<java.io.File>): java.lang.Iterable<javax.tools.JavaFileObject>
            getJavaFileObjects(...arg0: java.io.File[]): java.lang.Iterable<javax.tools.JavaFileObject>
            getJavaFileObjectsFromStrings(arg0: java.lang.Iterable<java.lang.String>): java.lang.Iterable<javax.tools.JavaFileObject>
            getJavaFileObjects(...arg0: java.lang.String[]): java.lang.Iterable<javax.tools.JavaFileObject>
            setLocation(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.Iterable<java.io.File>): void
            getLocation(arg0: javax.tools.JavaFileManager$Location): java.lang.Iterable<java.io.File>
        }
    }
}