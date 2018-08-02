declare namespace sun {
    namespace awt {
        namespace shell {
            class ShellFolderManager {
                public createShellFolder(arg0: java.io.File): sun.awt.shell.ShellFolder
                public get(arg0: java.lang.String | string): java.lang.Object
                public isComputerNode(arg0: java.io.File): boolean
                public isFileSystemRoot(arg0: java.io.File): boolean
                protected createInvoker(): sun.awt.shell.ShellFolder$Invoker
                public static class: java.lang.Class<any>
            }
        }
    }
}