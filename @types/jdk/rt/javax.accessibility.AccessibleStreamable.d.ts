declare namespace javax {
    namespace accessibility {
        interface AccessibleStreamable {
            getMimeTypes(): java.awt.datatransfer.DataFlavor[]
            getStream(arg0: java.awt.datatransfer.DataFlavor): java.io.InputStream
        }
    }
}