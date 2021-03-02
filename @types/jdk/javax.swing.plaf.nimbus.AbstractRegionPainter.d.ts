declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace nimbus {

        abstract class AbstractRegionPainter implements javax.swing.Painter<javax.swing.JComponent> {
          protected constructor()
          public paint(arg0: java.awt.Graphics2D, arg1: javax.swing.JComponent, arg2: int, arg3: int): void
          protected getExtendedCacheKeys(arg0: javax.swing.JComponent): java.lang.Object[]
          protected abstract getPaintContext(): javax.swing.plaf.nimbus.AbstractRegionPainter$PaintContext
          protected configureGraphics(arg0: java.awt.Graphics2D): void
          protected abstract doPaint(arg0: java.awt.Graphics2D, arg1: javax.swing.JComponent, arg2: int, arg3: int, arg4: java.lang.Object[]): void
          protected decodeX(arg0: float): float
          protected decodeY(arg0: float): float
          protected decodeAnchorX(arg0: float, arg1: float): float
          protected decodeAnchorY(arg0: float, arg1: float): float
          protected decodeColor(arg0: java.lang.String, arg1: float, arg2: float, arg3: float, arg4: int): java.awt.Color
          protected decodeColor(arg0: java.awt.Color, arg1: java.awt.Color, arg2: float): java.awt.Color
          protected decodeGradient(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float[], arg5: java.awt.Color[]): java.awt.LinearGradientPaint
          protected decodeRadialGradient(arg0: float, arg1: float, arg2: float, arg3: float[], arg4: java.awt.Color[]): java.awt.RadialGradientPaint
          protected getComponentColor(arg0: javax.swing.JComponent, arg1: java.lang.String, arg2: java.awt.Color, arg3: float, arg4: float, arg5: int): java.awt.Color
          public paint(arg0: java.awt.Graphics2D, arg1: java.lang.Object, arg2: int, arg3: int): void
        }

      }
    }
  }
}
