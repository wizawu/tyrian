declare namespace java {
    namespace lang {
abstract class ClassLoader {
    protected constructor()
    protected constructor(arg0: java.lang.ClassLoader)
    protected defineClass(arg0: byte[], arg1: int, arg2: int): java.lang.Class<any>
    protected defineClass(arg0: java.lang.String | string, arg1: byte[], arg2: int, arg3: int): java.lang.Class<any>
    protected defineClass(arg0: java.lang.String | string, arg1: byte[], arg2: int, arg3: int, arg4: java.security.ProtectionDomain): java.lang.Class<any>
    protected findClass(arg0: java.lang.String | string): java.lang.Class<any>
    protected findLoadedClass(arg0: java.lang.String | string): java.lang.Class<any>
    protected findSystemClass(arg0: java.lang.String | string): java.lang.Class<any>
    public getParent(): java.lang.ClassLoader
    public getResource(arg0: java.lang.String | string): java.net.URL
    public getResources(arg0: java.lang.String | string): java.util.Enumeration<java.net.URL>
    public getResourceAsStream(arg0: java.lang.String | string): java.io.InputStream
    public static getSystemClassLoader(): java.lang.ClassLoader
    public static getSystemResource(arg0: java.lang.String | string): java.net.URL
    public static getSystemResources(arg0: java.lang.String | string): java.util.Enumeration<java.net.URL>
    public static getSystemResourceAsStream(arg0: java.lang.String | string): java.io.InputStream
    public loadClass(arg0: java.lang.String | string): java.lang.Class<any>
    protected loadClass(arg0: java.lang.String | string, arg1: boolean): java.lang.Class<any>
    protected static registerAsParallelCapable(): boolean
    protected getClassLoadingLock(arg0: java.lang.String | string): java.lang.Object
    protected resolveClass(arg0: java.lang.Class<any>): void
    protected findResource(arg0: java.lang.String | string): java.net.URL
    protected findResources(arg0: java.lang.String | string): java.util.Enumeration<java.net.URL>
    protected findLibrary(arg0: java.lang.String | string): string
    protected getPackage(arg0: java.lang.String | string): java.lang.Package
    protected getPackages(): java.lang.Package[]
    protected definePackage(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: java.net.URL): java.lang.Package
    protected setSigners(arg0: java.lang.Class<any>, arg1: java.lang.Object[]): void
    public setClassAssertionStatus(arg0: java.lang.String | string, arg1: boolean): void
    public setPackageAssertionStatus(arg0: java.lang.String | string, arg1: boolean): void
    public setDefaultAssertionStatus(arg0: boolean): void
    public clearAssertionStatus(): void
    protected defineClass(arg0: java.lang.String | string, arg1: java.nio.ByteBuffer, arg2: java.security.ProtectionDomain): java.lang.Class<any>
    protected clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

    }
}