declare namespace javax {
  namespace tools {

    interface Tool {
      name(): java.lang.String
      run(arg0: java.io.InputStream, arg1: java.io.OutputStream, arg2: java.io.OutputStream, ...arg3: java.lang.String[]): int
      getSourceVersions(): java.util.Set<javax.lang.model.SourceVersion>
    }

  }
}
