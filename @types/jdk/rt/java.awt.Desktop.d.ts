declare namespace java {
    namespace awt {
class Desktop {
    public static getDesktop(): java.awt.Desktop
    public static isDesktopSupported(): boolean
    public isSupported(arg0: java.awt.Desktop$Action): boolean
    public open(arg0: java.io.File): void
    public edit(arg0: java.io.File): void
    public print(arg0: java.io.File): void
    public browse(arg0: java.net.URI): void
    public mail(): void
    public mail(arg0: java.net.URI): void
    public static class: java.lang.Class<any>
}

    }
}