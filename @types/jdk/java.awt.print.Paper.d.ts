declare namespace java {
  namespace awt {
    namespace print {
      class Paper implements java.lang.Cloneable {
        public constructor()
        public clone(): java.lang.Object
        public getHeight(): number
        public setSize(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public getWidth(): number
        public setImageableArea(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): void
        public getImageableX(): number
        public getImageableY(): number
        public getImageableWidth(): number
        public getImageableHeight(): number
      }
    }
  }
}
