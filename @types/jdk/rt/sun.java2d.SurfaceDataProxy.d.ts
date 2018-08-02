declare namespace sun {
    namespace java2d {
        abstract class SurfaceDataProxy implements sun.awt.DisplayChangedListener , sun.awt.image.SurfaceManager$FlushableCacheData {
            public static UNCACHED: sun.java2d.SurfaceDataProxy
            public static isCachingAllowed(): boolean
            public isSupportedOperation(arg0: sun.java2d.SurfaceData, arg1: int, arg2: sun.java2d.loops.CompositeType, arg3: java.awt.Color): boolean
            public validateSurfaceData(arg0: sun.java2d.SurfaceData, arg1: sun.java2d.SurfaceData, arg2: int, arg3: int): sun.java2d.SurfaceData
            public getRetryTracker(arg0: sun.java2d.SurfaceData): sun.java2d.StateTracker
            public constructor()
            public constructor(arg0: int)
            public isValid(): boolean
            public invalidate(): void
            public flush(arg0: boolean): boolean
            public flush(): void
            public isAccelerated(): boolean
            protected activateDisplayListener(): void
            public displayChanged(): void
            public paletteChanged(): void
            public replaceData(arg0: sun.java2d.SurfaceData, arg1: int, arg2: sun.java2d.loops.CompositeType, arg3: java.awt.Color): sun.java2d.SurfaceData
            public updateSurfaceData(arg0: sun.java2d.SurfaceData, arg1: sun.java2d.SurfaceData, arg2: int, arg3: int): void
            public updateSurfaceDataBg(arg0: sun.java2d.SurfaceData, arg1: sun.java2d.SurfaceData, arg2: int, arg3: int, arg4: java.awt.Color): void
            public static class: java.lang.Class<any>
        }
        abstract class SurfaceDataProxy$$Lambda implements sun.awt.DisplayChangedListener , sun.awt.image.SurfaceManager$FlushableCacheData {
            public static UNCACHED: sun.java2d.SurfaceDataProxy
        }
    }
}