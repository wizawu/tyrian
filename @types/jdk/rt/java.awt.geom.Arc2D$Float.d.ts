declare namespace java {
    namespace awt {
        namespace geom {
            class Arc2D$Float extends java.awt.geom.Arc2D implements java.io.Serializable {
                public x: float
                public y: float
                public width: float
                public height: float
                public start: float
                public extent: float
                public constructor()
                public constructor(arg0: int)
                public constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: int)
                public constructor(arg0: java.awt.geom.Rectangle2D, arg1: float, arg2: float, arg3: int)
                public getX(): double
                public getY(): double
                public getWidth(): double
                public getHeight(): double
                public getAngleStart(): double
                public getAngleExtent(): double
                public isEmpty(): boolean
                public setArc(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: int): void
                public setAngleStart(arg0: double): void
                public setAngleExtent(arg0: double): void
                protected makeBounds(arg0: double, arg1: double, arg2: double, arg3: double): java.awt.geom.Rectangle2D
                public static class: java.lang.Class<any>
            }
        }
    }
}