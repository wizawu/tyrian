declare namespace sun {
    namespace awt {
        namespace X11 {
            class XDropTargetRegistry$EmbeddedDropSiteEntry {
                public constructor(arg0: long, arg1: long, arg2: java.util.List<sun.awt.X11.XDropTargetProtocol>)
                public getRoot(): long
                public getEventMask(): long
                public hasNonXEmbedClientSites(): boolean
                public addSite(arg0: long, arg1: boolean): void
                public removeSite(arg0: long): void
                public setSupportedProtocols(arg0: java.util.List<sun.awt.X11.XDropTargetProtocol>): void
                public getSupportedProtocols(): java.util.List<sun.awt.X11.XDropTargetProtocol>
                public hasSites(): boolean
                public getSites(): long[]
                public getSite(arg0: int, arg1: int): long
                public static class: java.lang.Class<any>
            }
        }
    }
}