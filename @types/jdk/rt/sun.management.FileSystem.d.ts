declare namespace sun {
    namespace management {
        abstract class FileSystem {
            protected constructor()
            public static open(): sun.management.FileSystem
            public supportsFileSecurity(arg0: java.io.File): boolean
            public isAccessUserOnly(arg0: java.io.File): boolean
            public static class: java.lang.Class<any>
        }
    }
}