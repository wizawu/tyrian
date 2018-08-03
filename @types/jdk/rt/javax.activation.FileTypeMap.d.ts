declare namespace javax {
    namespace activation {
        abstract class FileTypeMap {
            public constructor()
            public abstract getContentType(arg0: java.io.File): string
            public abstract getContentType(arg0: java.lang.String | string): string
            public static setDefaultFileTypeMap(arg0: javax.activation.FileTypeMap): void
            public static getDefaultFileTypeMap(): javax.activation.FileTypeMap
            public static class: java.lang.Class<any>
        }
    }
}