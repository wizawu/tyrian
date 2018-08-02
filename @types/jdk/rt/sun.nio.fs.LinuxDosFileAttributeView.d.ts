declare namespace sun {
    namespace nio {
        namespace fs {
            class LinuxDosFileAttributeView extends sun.nio.fs.UnixFileAttributeViews$Basic implements java.nio.file.attribute.DosFileAttributeView {
                public name(): string
                public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public readAttributes(arg0: java.lang.String[]): java.util.Map<java.lang.String, java.lang.Object>
                public readAttributes(): java.nio.file.attribute.DosFileAttributes
                public setReadOnly(arg0: boolean): void
                public setHidden(arg0: boolean): void
                public setArchive(arg0: boolean): void
                public setSystem(arg0: boolean): void
                public readAttributes(): java.nio.file.attribute.BasicFileAttributes
                public static class: java.lang.Class<any>
            }
        }
    }
}