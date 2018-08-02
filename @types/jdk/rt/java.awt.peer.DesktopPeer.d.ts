declare namespace java {
    namespace awt {
        namespace peer {
            interface DesktopPeer {
                isSupported(arg0: java.awt.Desktop$Action): boolean
                open(arg0: java.io.File): void
                edit(arg0: java.io.File): void
                print(arg0: java.io.File): void
                mail(arg0: java.net.URI): void
                browse(arg0: java.net.URI): void
            }
        }
    }
}