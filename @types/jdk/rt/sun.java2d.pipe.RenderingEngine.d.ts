declare namespace sun {
    namespace java2d {
        namespace pipe {
            abstract class RenderingEngine {
                public constructor()
                public static getInstance(): sun.java2d.pipe.RenderingEngine
                public createStrokedShape(arg0: java.awt.Shape, arg1: float, arg2: int, arg3: int, arg4: float, arg5: float[], arg6: float): java.awt.Shape
                public strokeTo(arg0: java.awt.Shape, arg1: java.awt.geom.AffineTransform, arg2: java.awt.BasicStroke, arg3: boolean, arg4: boolean, arg5: boolean, arg6: sun.awt.geom.PathConsumer2D): void
                public getAATileGenerator(arg0: java.awt.Shape, arg1: java.awt.geom.AffineTransform, arg2: sun.java2d.pipe.Region, arg3: java.awt.BasicStroke, arg4: boolean, arg5: boolean, arg6: int[]): sun.java2d.pipe.AATileGenerator
                public getAATileGenerator(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: sun.java2d.pipe.Region, arg9: int[]): sun.java2d.pipe.AATileGenerator
                public getMinimumAAPenSize(): float
                public static feedConsumer(arg0: java.awt.geom.PathIterator, arg1: sun.awt.geom.PathConsumer2D): void
                public static class: java.lang.Class<any>
            }
        }
    }
}