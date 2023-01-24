declare namespace javax {
  namespace tools {
    interface StandardJavaFileManager extends javax.tools.JavaFileManager {
      isSameFile(arg0: javax.tools.FileObject, arg1: javax.tools.FileObject): boolean
      getJavaFileObjectsFromFiles(
        arg0: java.lang.Iterable<java.io.File>
      ): java.lang.Iterable<javax.tools.JavaFileObject>
      getJavaFileObjectsFromPaths(
        arg0: java.lang.Iterable<java.nio.file.Path>
      ): java.lang.Iterable<javax.tools.JavaFileObject>
      getJavaFileObjects(...vargs: java.io.File[]): java.lang.Iterable<javax.tools.JavaFileObject>
      getJavaFileObjects(...vargs: java.nio.file.Path[]): java.lang.Iterable<javax.tools.JavaFileObject>
      getJavaFileObjectsFromStrings(
        arg0: java.lang.Iterable<java.lang.String>
      ): java.lang.Iterable<javax.tools.JavaFileObject>
      getJavaFileObjects(...vargs: (java.lang.String | string)[]): java.lang.Iterable<javax.tools.JavaFileObject>
      setLocation(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.Iterable<java.io.File>): void
      setLocationFromPaths(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.util.Collection<java.nio.file.Path>
      ): void
      setLocationForModule(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.String | string,
        arg2: java.util.Collection<java.nio.file.Path>
      ): void
      getLocation(arg0: javax.tools.JavaFileManager$Location): java.lang.Iterable<java.io.File>
      getLocationAsPaths(arg0: javax.tools.JavaFileManager$Location): java.lang.Iterable<java.nio.file.Path>
      asPath(arg0: javax.tools.FileObject): java.nio.file.Path
      setPathFactory(
        arg0: javax.tools.StandardJavaFileManager$PathFactory | javax.tools.StandardJavaFileManager$PathFactory$$lambda
      ): void
    }
  }
}
