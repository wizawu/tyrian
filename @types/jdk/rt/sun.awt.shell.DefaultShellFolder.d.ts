declare namespace sun {
    namespace awt {
        namespace shell {
            class DefaultShellFolder extends sun.awt.shell.ShellFolder {
                protected writeReplace(): java.lang.Object
                public listFiles(): java.io.File[]
                public isLink(): boolean
                public isHidden(): boolean
                public getLinkLocation(): sun.awt.shell.ShellFolder
                public getDisplayName(): string
                public getFolderType(): string
                public getExecutableType(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}