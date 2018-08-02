declare namespace java {
    namespace awt {
        class FileDialog extends java.awt.Dialog {
            public static LOAD: int
            public static SAVE: int
            public constructor(arg0: java.awt.Frame)
            public constructor(arg0: java.awt.Frame, arg1: java.lang.String | string)
            public constructor(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.awt.Dialog)
            public constructor(arg0: java.awt.Dialog, arg1: java.lang.String | string)
            public constructor(arg0: java.awt.Dialog, arg1: java.lang.String | string, arg2: int)
            public addNotify(): void
            public getMode(): int
            public setMode(arg0: int): void
            public getDirectory(): string
            public setDirectory(arg0: java.lang.String | string): void
            public getFile(): string
            public getFiles(): java.io.File[]
            public setFile(arg0: java.lang.String | string): void
            public setMultipleMode(arg0: boolean): void
            public isMultipleMode(): boolean
            public getFilenameFilter(): java.io.FilenameFilter
            public setFilenameFilter(arg0: java.io.FilenameFilter | java.io.FilenameFilter$$Lambda): void
            protected paramString(): string
            public static class: java.lang.Class<any>
        }
    }
}