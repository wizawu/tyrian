declare namespace javax {
  namespace tools {

    interface Tool {
      name(): java.lang.String
      run(arg0: java.io.InputStream, arg1: java.io.OutputStream, arg2: java.io.OutputStream, ...vargs: (java.lang.String | string)[]): number
      getSourceVersions(): java.util.Set<javax.lang.model.SourceVersion>
    }

  }
}
