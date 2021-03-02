declare namespace java {
  namespace awt {
    namespace geom {

      abstract class Dimension2D implements java.lang.Cloneable {
        protected constructor()
        public abstract getWidth(): number
        public abstract getHeight(): number
        public abstract setSize(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public setSize(arg0: java.awt.geom.Dimension2D): void
        public clone(): java.lang.Object
      }

    }
  }
}
