declare namespace java {
    namespace util {
        namespace prefs {
class FileSystemPreferences extends java.util.prefs.AbstractPreferences {
    public isUserNode(): boolean
    protected putSpi(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    protected getSpi(arg0: java.lang.String | string): string
    protected removeSpi(arg0: java.lang.String | string): void
    protected keysSpi(): java.lang.String[]
    protected childrenNamesSpi(): java.lang.String[]
    protected childSpi(arg0: java.lang.String | string): java.util.prefs.AbstractPreferences
    public removeNode(): void
    protected removeNodeSpi(): void
    public sync(): void
    protected syncSpi(): void
    public flush(): void
    protected flushSpi(): void
    public static class: java.lang.Class<any>
}

        }
    }
}