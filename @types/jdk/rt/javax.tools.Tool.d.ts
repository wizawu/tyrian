declare namespace javax {
    namespace tools {
        interface Tool {
            run(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda, ...arg3: java.lang.String[]): int
            getSourceVersions(): java.util.Set<javax.lang.model.SourceVersion>
        }
    }
}