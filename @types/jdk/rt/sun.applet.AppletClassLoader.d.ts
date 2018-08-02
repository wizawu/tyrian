declare namespace sun {
    namespace applet {
class AppletClassLoader extends java.net.URLClassLoader {
    protected constructor(arg0: java.net.URL)
    public disableRecursiveDirectoryRead(): void
    public getURLs(): java.net.URL[]
    protected addJar(arg0: java.lang.String | string): void
    public loadClass(arg0: java.lang.String | string, arg1: boolean): java.lang.Class
    protected findClass(arg0: java.lang.String | string): java.lang.Class
    protected getPermissions(arg0: java.security.CodeSource): java.security.PermissionCollection
    public getResourceAsStream(arg0: java.lang.String | string): java.io.InputStream
    public getResourceAsStreamFromJar(arg0: java.lang.String | string): java.io.InputStream
    public findResource(arg0: java.lang.String | string): java.net.URL
    public findResources(arg0: java.lang.String | string): java.util.Enumeration
    public getThreadGroup(): java.lang.ThreadGroup
    public getAppContext(): sun.awt.AppContext
    public grab(): void
    protected setExceptionStatus(): void
    public getExceptionStatus(): boolean
    protected release(): void
    protected resetAppContext(): sun.awt.AppContext
    public static class: java.lang.Class<any>
}

    }
}