declare namespace sun {
    namespace awt {
        namespace X11 {
            class XPropertyCache {
                public constructor()
                public static isCached(arg0: long, arg1: sun.awt.X11.XAtom): boolean
                public static getCacheEntry(arg0: long, arg1: sun.awt.X11.XAtom): sun.awt.X11.XPropertyCache$PropertyCacheEntry
                public static storeCache(arg0: sun.awt.X11.XPropertyCache$PropertyCacheEntry, arg1: long, arg2: sun.awt.X11.XAtom): void
                public static clearCache(arg0: long): void
                public static clearCache(arg0: long, arg1: sun.awt.X11.XAtom): void
                public static isCachingSupported(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}