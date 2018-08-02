declare namespace sun {
    namespace nio {
        namespace fs {
            abstract class AbstractBasicFileAttributeView implements java.nio.file.attribute.BasicFileAttributeView , sun.nio.fs.DynamicFileAttributeView {
                protected constructor()
                public name(): string
                public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public readAttributes(arg0: java.lang.String[]): java.util.Map<java.lang.String, java.lang.Object>
                public static class: java.lang.Class<any>
            }
        }
    }
}