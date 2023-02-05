declare namespace javax {
  namespace tools {
    class ForwardingJavaFileManager<M extends javax.tools.JavaFileManager> implements javax.tools.JavaFileManager {
      protected readonly fileManager: M
      protected constructor(arg0: M)
      public getClassLoader(arg0: javax.tools.JavaFileManager$Location): java.lang.ClassLoader
      public list(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.String | string,
        arg2: java.util.Set<javax.tools.JavaFileObject$Kind>,
        arg3: boolean | java.lang.Boolean
      ): java.lang.Iterable<javax.tools.JavaFileObject>
      public inferBinaryName(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: javax.tools.JavaFileObject
      ): java.lang.String
      public isSameFile(arg0: javax.tools.FileObject, arg1: javax.tools.FileObject): boolean
      public handleOption(arg0: java.lang.String | string, arg1: java.util.Iterator<java.lang.String>): boolean
      public hasLocation(arg0: javax.tools.JavaFileManager$Location): boolean
      public isSupportedOption(arg0: java.lang.String | string): number
      public getJavaFileForInput(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.String | string,
        arg2: javax.tools.JavaFileObject$Kind
      ): javax.tools.JavaFileObject
      public getJavaFileForOutput(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.String | string,
        arg2: javax.tools.JavaFileObject$Kind,
        arg3: javax.tools.FileObject
      ): javax.tools.JavaFileObject
      public getFileForInput(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      ): javax.tools.FileObject
      public getFileForOutput(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: javax.tools.FileObject
      ): javax.tools.FileObject
      public flush(): void
      public close(): void
      public getLocationForModule(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.String | string
      ): javax.tools.JavaFileManager$Location
      public getLocationForModule(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: javax.tools.JavaFileObject
      ): javax.tools.JavaFileManager$Location
      public getServiceLoader<S>(
        arg0: javax.tools.JavaFileManager$Location,
        arg1: java.lang.Class<S>
      ): java.util.ServiceLoader<S>
      public inferModuleName(arg0: javax.tools.JavaFileManager$Location): java.lang.String
      public listLocationsForModules(
        arg0: javax.tools.JavaFileManager$Location
      ): java.lang.Iterable<java.util.Set<javax.tools.JavaFileManager$Location>>
      public contains(arg0: javax.tools.JavaFileManager$Location, arg1: javax.tools.FileObject): boolean
    }
  }
}
