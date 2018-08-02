declare namespace sun {
    namespace java2d {
        namespace jules {
            class JulesAATileGenerator implements sun.java2d.pipe.AATileGenerator {
                public constructor(arg0: java.awt.Shape, arg1: java.awt.geom.AffineTransform, arg2: sun.java2d.pipe.Region, arg3: java.awt.BasicStroke | java.awt.BasicStroke$$Lambda, arg4: boolean, arg5: boolean, arg6: int[])
                public getAlpha(arg0: byte[], arg1: int, arg2: int): void
                public calculateTypicalAlpha(): void
                protected doTrapsCoverTile(arg0: sun.java2d.xr.GrowableIntArray, arg1: int): boolean
                public getTypicalAlpha(): int
                public dispose(): void
                protected rasterizeTile(arg0: int, arg1: sun.java2d.jules.JulesTile): sun.java2d.jules.JulesTile
                protected getXPos(arg0: int): int
                protected getYPos(arg0: int): int
                public nextTile(): void
                public getTileHeight(): int
                public getTileWidth(): int
                public getTileCount(): int
                public getTrapContainer(arg0: int): sun.java2d.jules.TileTrapContainer
                public static class: java.lang.Class<any>
            }
        }
    }
}