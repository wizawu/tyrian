declare namespace javax {
    namespace tools {
        class ForwardingFileObject<F extends javax.tools.FileObject> implements javax.tools.FileObject {
            protected readonly fileObject: F
            protected constructor(arg0: F)
            public toUri(): java.net.URI
            public getName(): string
            public openInputStream(): java.io.InputStream
            public openOutputStream(): java.io.OutputStream
            public openReader(arg0: boolean): java.io.Reader
            public getCharContent(arg0: boolean): java.lang.CharSequence
            public openWriter(): java.io.Writer
            public getLastModified(): long
            public delete(): boolean
            public static class: java.lang.Class<any>
        }
    }
}