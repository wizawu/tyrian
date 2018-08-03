declare namespace sun {
    namespace awt {
        abstract class DesktopBrowse {
            public constructor()
            public static setInstance(arg0: sun.awt.DesktopBrowse | sun.awt.DesktopBrowse$$Lambda): void
            public static getInstance(): sun.awt.DesktopBrowse
            public abstract browse(arg0: java.net.URL): void
            public static class: java.lang.Class<any>
        }
        interface DesktopBrowse$$Lambda {
            (arg0: java.net.URL): void
        }
    }
}