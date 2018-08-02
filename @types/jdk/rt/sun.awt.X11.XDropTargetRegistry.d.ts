declare namespace sun {
    namespace awt {
        namespace X11 {
            class XDropTargetRegistry {
                public updateEmbedderDropSite(arg0: long): void
                public getEmbeddedDropSite(arg0: long, arg1: int, arg2: int): long
                public registerDropSite(arg0: long): void
                public unregisterDropSite(arg0: long): void
                public registerXEmbedClient(arg0: long, arg1: long): void
                public unregisterXEmbedClient(arg0: long, arg1: long): void
                public static class: java.lang.Class<any>
            }
        }
    }
}