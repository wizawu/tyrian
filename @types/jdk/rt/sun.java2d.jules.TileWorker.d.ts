declare namespace sun {
    namespace java2d {
        namespace jules {
            class TileWorker implements java.lang.Runnable {
                public constructor(arg0: sun.java2d.jules.JulesAATileGenerator, arg1: int, arg2: sun.java2d.jules.IdleTileCache)
                public run(): void
                public getPreRasterizedTile(arg0: int): sun.java2d.jules.JulesTile
                public disposeConsumerResources(): void
                public static class: java.lang.Class<any>
            }
            class TileWorker$$Lambda implements java.lang.Runnable {
                public constructor(arg0: sun.java2d.jules.JulesAATileGenerator, arg1: int, arg2: sun.java2d.jules.IdleTileCache)
            }
        }
    }
}