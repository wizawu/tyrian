declare namespace javax {
    namespace activation {
        class FileDataSource implements javax.activation.DataSource {
            public constructor(arg0: java.io.File)
            public constructor(arg0: java.lang.String | string)
            public getInputStream(): java.io.InputStream
            public getOutputStream(): java.io.OutputStream
            public getContentType(): string
            public getName(): string
            public getFile(): java.io.File
            public setFileTypeMap(arg0: javax.activation.FileTypeMap): void
            public static class: java.lang.Class<any>
        }
    }
}