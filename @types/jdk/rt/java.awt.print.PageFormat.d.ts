declare namespace java {
    namespace awt {
        namespace print {
            class PageFormat implements java.lang.Cloneable {
                public static LANDSCAPE: int
                public static PORTRAIT: int
                public static REVERSE_LANDSCAPE: int
                public constructor()
                public clone(): java.lang.Object
                public getWidth(): double
                public getHeight(): double
                public getImageableX(): double
                public getImageableY(): double
                public getImageableWidth(): double
                public getImageableHeight(): double
                public getPaper(): java.awt.print.Paper
                public setPaper(arg0: java.awt.print.Paper): void
                public setOrientation(arg0: int): void
                public getOrientation(): int
                public getMatrix(): double[]
                public static class: java.lang.Class<any>
            }
        }
    }
}