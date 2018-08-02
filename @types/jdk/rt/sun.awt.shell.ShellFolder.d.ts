declare namespace sun {
    namespace awt {
        namespace shell {
abstract class ShellFolder extends java.io.File {
    protected parent: sun.awt.shell.ShellFolder
    public isFileSystem(): boolean
    protected writeReplace(): java.lang.Object
    public getParent(): string
    public getParentFile(): java.io.File
    public listFiles(): java.io.File[]
    public listFiles(arg0: boolean): java.io.File[]
    public isLink(): boolean
    public getLinkLocation(): sun.awt.shell.ShellFolder
    public getDisplayName(): string
    public getFolderType(): string
    public getExecutableType(): string
    public compareTo(arg0: java.io.File): int
    public getIcon(arg0: boolean): java.awt.Image
    public static getShellFolder(arg0: java.io.File): sun.awt.shell.ShellFolder
    public static get(arg0: java.lang.String | string): java.lang.Object
    public static isComputerNode(arg0: java.io.File): boolean
    public static isFileSystemRoot(arg0: java.io.File): boolean
    public static getNormalizedFile(arg0: java.io.File): java.io.File
    public static sort(arg0: java.util.List<java.io.File>): void
    public sortChildren(arg0: java.util.List<java.io.File>): void
    public isAbsolute(): boolean
    public getAbsoluteFile(): java.io.File
    public canRead(): boolean
    public canWrite(): boolean
    public exists(): boolean
    public isDirectory(): boolean
    public isFile(): boolean
    public lastModified(): long
    public length(): long
    public createNewFile(): boolean
    public delete(): boolean
    public deleteOnExit(): void
    public mkdir(): boolean
    public mkdirs(): boolean
    public renameTo(arg0: java.io.File): boolean
    public setLastModified(arg0: long): boolean
    public setReadOnly(): boolean
    public toString(): string
    public static getFolderColumns(arg0: java.io.File): sun.awt.shell.ShellFolderColumnInfo[]
    public getFolderColumns(): sun.awt.shell.ShellFolderColumnInfo[]
    public static getFolderColumnValue(arg0: java.io.File, arg1: int): java.lang.Object
    public getFolderColumnValue(arg0: int): java.lang.Object
    public static invoke<T>(arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$Lambda<T>): T
    public static invoke<T, E extends java.lang.Throwable>(arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$Lambda<T>, arg1: java.lang.Class<E>): T
    public compareTo(arg0: java.lang.Object): int
    public static class: java.lang.Class<any>
}

        }
    }
}