declare namespace sun {
    namespace awt {
        namespace X11 {
            class XSelection {
                public static readonly MAX_LENGTH: long
                public static readonly MAX_PROPERTY_SIZE: int
                public getSelectionAtom(): sun.awt.X11.XAtom
                public getTargets(arg0: long): long[]
                public getData(arg0: long, arg1: long): byte[]
                public reset(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}