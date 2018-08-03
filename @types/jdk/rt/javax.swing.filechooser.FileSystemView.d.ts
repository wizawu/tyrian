declare namespace javax {
    namespace swing {
        namespace filechooser {
            abstract class FileSystemView {
                public static getFileSystemView(): javax.swing.filechooser.FileSystemView
                public constructor()
                public isRoot(arg0: java.io.File): boolean
                public isTraversable(arg0: java.io.File): boolean
                public getSystemDisplayName(arg0: java.io.File): string
                public getSystemTypeDescription(arg0: java.io.File): string
                public getSystemIcon(arg0: java.io.File): javax.swing.Icon
                public isParent(arg0: java.io.File, arg1: java.io.File): boolean
                public getChild(arg0: java.io.File, arg1: java.lang.String | string): java.io.File
                public isFileSystem(arg0: java.io.File): boolean
                public abstract createNewFolder(arg0: java.io.File): java.io.File
                public isHiddenFile(arg0: java.io.File): boolean
                public isFileSystemRoot(arg0: java.io.File): boolean
                public isDrive(arg0: java.io.File): boolean
                public isFloppyDrive(arg0: java.io.File): boolean
                public isComputerNode(arg0: java.io.File): boolean
                public getRoots(): java.io.File[]
                public getHomeDirectory(): java.io.File
                public getDefaultDirectory(): java.io.File
                public createFileObject(arg0: java.io.File, arg1: java.lang.String | string): java.io.File
                public createFileObject(arg0: java.lang.String | string): java.io.File
                public getFiles(arg0: java.io.File, arg1: boolean): java.io.File[]
                public getParentDirectory(arg0: java.io.File): java.io.File
                protected createFileSystemRoot(arg0: java.io.File): java.io.File
                public static class: java.lang.Class<any>
            }
            interface FileSystemView$$Lambda {
                (arg0: java.io.File): java.io.File
            }
        }
    }
}