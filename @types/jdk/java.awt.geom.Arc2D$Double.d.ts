declare namespace java {
  namespace awt {
    namespace geom {
      class Arc2D$Double extends java.awt.geom.Arc2D implements java.io.Serializable {
        public x: double
        public y: double
        public width: double
        public height: double
        public start: double
        public extent: double
        public constructor()
        public constructor(arg0: number | java.lang.Integer)
        public constructor(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double,
          arg6: number | java.lang.Integer
        )
        public constructor(
          arg0: java.awt.geom.Rectangle2D,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Integer
        )
        public getX(): number
        public getY(): number
        public getWidth(): number
        public getHeight(): number
        public getAngleStart(): number
        public getAngleExtent(): number
        public isEmpty(): boolean
        public setArc(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double,
          arg6: number | java.lang.Integer
        ): void
        public setAngleStart(arg0: number | java.lang.Double): void
        public setAngleExtent(arg0: number | java.lang.Double): void
        protected makeBounds(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): java.awt.geom.Rectangle2D
      }
    }
  }
}
