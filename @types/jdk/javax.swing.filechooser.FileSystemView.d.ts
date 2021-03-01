declare namespace javax {
  namespace swing {
    namespace filechooser {

      abstract class FileSystemView {

        static windowsFileSystemView: javax.swing.filechooser.FileSystemView
        static unixFileSystemView: javax.swing.filechooser.FileSystemView
        static genericFileSystemView: javax.swing.filechooser.FileSystemView
        public static getFileSystemView(): javax.swing.filechooser.FileSystemView
        public constructor()
        public isRoot(arg0: java.io.File): boolean
        public isTraversable(arg0: java.io.File): java.lang.Boolean
        public getSystemDisplayName(arg0: java.io.File): java.lang.String
        public getSystemTypeDescription(arg0: java.io.File): java.lang.String
        public getSystemIcon(arg0: java.io.File): javax.swing.Icon
        public isParent(arg0: java.io.File, arg1: java.io.File): boolean
        public getChild(arg0: java.io.File, arg1: java.lang.String): java.io.File
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
        public createFileObject(arg0: java.io.File, arg1: java.lang.String): java.io.File
        public createFileObject(arg0: java.lang.String): java.io.File
        public getFiles(arg0: java.io.File, arg1: boolean): java.io.File[]
        public getParentDirectory(arg0: java.io.File): java.io.File
        public getChooserComboBoxFiles(): java.io.File[]
        public isLink(arg0: java.io.File): boolean
        public getLinkLocation(arg0: java.io.File): java.io.File
        getShellFolder(arg0: java.io.File): sun.awt.shell.ShellFolder
        protected createFileSystemRoot(arg0: java.io.File): java.io.File
      }

    }
  }
}
