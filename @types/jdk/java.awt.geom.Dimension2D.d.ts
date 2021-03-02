declare namespace java {
  namespace awt {
    namespace geom {

      abstract class Dimension2D implements java.lang.Cloneable {
        protected constructor()
        public abstract getWidth(): double
        public abstract getHeight(): double
        public abstract setSize(arg0: double, arg1: double): void
        public setSize(arg0: java.awt.geom.Dimension2D): void
        public clone(): java.lang.Object
      }

    }
  }
}
