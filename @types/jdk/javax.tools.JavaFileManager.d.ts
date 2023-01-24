declare namespace javax {
  namespace tools {
    interface JavaFileManager extends java.io.Closeable, java.io.Flushable, javax.tools.OptionChecker {
      getClassLoader(arg0: javax.tools.JavaFileManager$Location): java.lang.ClassLoader
      list(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.String | string,
        arg2: java.util.Set<javax.tools.JavaFileObject$Kind>,
        arg3: boolean | java.lang.Boolean
      ): java.lang.Iterable<javax.tools.JavaFileObject>
      inferBinaryName(arg0: javax.tools.JavaFileManager$Location, arg1: javax.tools.JavaFileObject): java.lang.String
      isSameFile(arg0: javax.tools.FileObject, arg1: javax.tools.FileObject): boolean
      handleOption(arg0: java.lang.String | string, arg1: java.util.Iterator<java.lang.String>): boolean
      hasLocation(arg0: javax.tools.JavaFileManager$Location): boolean
      getJavaFileForInput(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.String | string,
        arg2: javax.tools.JavaFileObject$Kind
      ): javax.tools.JavaFileObject
      getJavaFileForOutput(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.String | string,
        arg2: javax.tools.JavaFileObject$Kind,
        arg3: javax.tools.FileObject
      ): javax.tools.JavaFileObject
      getFileForInput(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      ): javax.tools.FileObject
      getFileForOutput(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: javax.tools.FileObject
      ): javax.tools.FileObject
      flush(): void
      close(): void
      getLocationForModule(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.String | string
      ): javax.tools.JavaFileManager$Location
      getLocationForModule(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: javax.tools.JavaFileObject
      ): javax.tools.JavaFileManager$Location
      getServiceLoader<S>(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.Class<S>
      ): java.util.ServiceLoader<S>
      inferModuleName(arg0: javax.tools.JavaFileManager$Location): java.lang.String
      listLocationsForModules(
        arg0: javax.tools.JavaFileManager$Location
      ): java.lang.Iterable<java.util.Set<javax.tools.JavaFileManager$Location>>
      contains(arg0: javax.tools.JavaFileManager$Location, arg1: javax.tools.FileObject): boolean
    }
  }
}
