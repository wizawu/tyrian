declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace nimbus {
        abstract class AbstractRegionPainter implements javax.swing.Painter<javax.swing.JComponent> {
          protected constructor()
          public paint(
            arg0: java.awt.Graphics2D,
            arg1: javax.swing.JComponent,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer
          ): void
          protected getExtendedCacheKeys(arg0: javax.swing.JComponent): java.lang.Object[]
          protected abstract getPaintContext(): javax.swing.plaf.nimbus.AbstractRegionPainter$PaintContext
          protected configureGraphics(arg0: java.awt.Graphics2D): void
          protected abstract doPaint(
            arg0: java.awt.Graphics2D,
            arg1: javax.swing.JComponent,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: java.lang.Object[] | any[]
          ): void
          protected decodeX(arg0: number | java.lang.Float): number
          protected decodeY(arg0: number | java.lang.Float): number
          protected decodeAnchorX(arg0: number | java.lang.Float, arg1: number | java.lang.Float): number
          protected decodeAnchorY(arg0: number | java.lang.Float, arg1: number | java.lang.Float): number
          protected decodeColor(
            arg0: java.lang.String | string,
            arg1: number | java.lang.Float,
            arg2: number | java.lang.Float,
            arg3: number | java.lang.Float,
            arg4: number | java.lang.Integer
          ): java.awt.Color
          protected decodeColor(
            arg0: java.awt.Color,
            arg1: java.awt.Color,
            arg2: number | java.lang.Float
          ): java.awt.Color
          protected decodeGradient(
            arg0: number | java.lang.Float,
            arg1: number | java.lang.Float,
            arg2: number | java.lang.Float,
            arg3: number | java.lang.Float,
            arg4: number[] | java.lang.Float[],
            arg5: java.awt.Color[]
          ): java.awt.LinearGradientPaint
          protected decodeRadialGradient(
            arg0: number | java.lang.Float,
            arg1: number | java.lang.Float,
            arg2: number | java.lang.Float,
            arg3: number[] | java.lang.Float[],
            arg4: java.awt.Color[]
          ): java.awt.RadialGradientPaint
          protected getComponentColor(
            arg0: javax.swing.JComponent,
            arg1: java.lang.String | string,
            arg2: java.awt.Color,
            arg3: number | java.lang.Float,
            arg4: number | java.lang.Float,
            arg5: number | java.lang.Integer
          ): java.awt.Color
          public paint(
            arg0: java.awt.Graphics2D,
            arg1: java.lang.Object | any,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer
          ): void
        }
      }
    }
  }
}
