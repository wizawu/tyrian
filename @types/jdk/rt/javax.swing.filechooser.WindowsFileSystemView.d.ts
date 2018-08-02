declare namespace javax {
    namespace swing {
        namespace filechooser {
class WindowsFileSystemView extends javax.swing.filechooser.FileSystemView {
    public isTraversable(arg0: java.io.File): boolean
    public getChild(arg0: java.io.File, arg1: java.lang.String | string): java.io.File
    public getSystemTypeDescription(arg0: java.io.File): string
    public getHomeDirectory(): java.io.File
    public createNewFolder(arg0: java.io.File): java.io.File
    public isDrive(arg0: java.io.File): boolean
    public isFloppyDrive(arg0: java.io.File): boolean
    public createFileObject(arg0: java.lang.String | string): java.io.File
    protected createFileSystemRoot(arg0: java.io.File): java.io.File
    public static class: java.lang.Class<any>
}

        }
    }
}