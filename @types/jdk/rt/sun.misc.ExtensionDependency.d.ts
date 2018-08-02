declare namespace sun {
    namespace misc {
class ExtensionDependency {
    public constructor()
    public static addExtensionInstallationProvider(arg0: sun.misc.ExtensionInstallationProvider | sun.misc.ExtensionInstallationProvider$$Lambda): void
    public static removeExtensionInstallationProvider(arg0: sun.misc.ExtensionInstallationProvider | sun.misc.ExtensionInstallationProvider$$Lambda): void
    public static checkExtensionsDependencies(arg0: java.util.jar.JarFile): boolean
    protected checkExtensions(arg0: java.util.jar.JarFile): boolean
    protected checkExtension(arg0: java.lang.String | string, arg1: java.util.jar.Attributes): boolean
    protected checkExtensionAgainst(arg0: java.lang.String | string, arg1: java.util.jar.Attributes, arg2: java.io.File): boolean
    protected installExtension(arg0: sun.misc.ExtensionInfo, arg1: sun.misc.ExtensionInfo): boolean
    public static class: java.lang.Class<any>
}

    }
}