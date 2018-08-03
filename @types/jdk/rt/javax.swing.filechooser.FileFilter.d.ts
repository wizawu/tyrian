declare namespace javax {
    namespace swing {
        namespace filechooser {
            abstract class FileFilter {
                public constructor()
                public abstract accept(arg0: java.io.File): boolean
                public abstract getDescription(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}