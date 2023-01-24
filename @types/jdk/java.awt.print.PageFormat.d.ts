declare namespace java {
  namespace awt {
    namespace print {
      class PageFormat implements java.lang.Cloneable {
        public static readonly LANDSCAPE: int
        public static readonly PORTRAIT: int
        public static readonly REVERSE_LANDSCAPE: int
        public constructor()
        public clone(): java.lang.Object
        public getWidth(): number
        public getHeight(): number
        public getImageableX(): number
        public getImageableY(): number
        public getImageableWidth(): number
        public getImageableHeight(): number
        public getPaper(): java.awt.print.Paper
        public setPaper(arg0: java.awt.print.Paper): void
        public setOrientation(arg0: number | java.lang.Integer): void
        public getOrientation(): number
        public getMatrix(): number[]
      }
    }
  }
}
