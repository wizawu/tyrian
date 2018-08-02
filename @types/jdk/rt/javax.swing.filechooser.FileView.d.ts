declare namespace javax {
    namespace swing {
        namespace filechooser {
            abstract class FileView {
                public constructor()
                public getName(arg0: java.io.File): string
                public getDescription(arg0: java.io.File): string
                public getTypeDescription(arg0: java.io.File): string
                public getIcon(arg0: java.io.File): javax.swing.Icon
                public isTraversable(arg0: java.io.File): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}