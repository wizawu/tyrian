declare namespace sun {
    namespace nio {
        namespace fs {
            class UnixFileAttributeViews$Basic extends sun.nio.fs.AbstractBasicFileAttributeView {
                protected readonly file: sun.nio.fs.UnixPath
                protected readonly followLinks: boolean
                public readAttributes(): java.nio.file.attribute.BasicFileAttributes
                public setTimes(arg0: java.nio.file.attribute.FileTime, arg1: java.nio.file.attribute.FileTime, arg2: java.nio.file.attribute.FileTime): void
                public static class: java.lang.Class<any>
            }
        }
    }
}