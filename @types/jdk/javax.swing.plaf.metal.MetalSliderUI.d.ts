declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {
        class MetalSliderUI extends javax.swing.plaf.basic.BasicSliderUI {
          protected readonly TICK_BUFFER: int
          protected filledSlider: boolean
          protected static thumbColor: java.awt.Color
          protected static highlightColor: java.awt.Color
          protected static darkShadowColor: java.awt.Color
          protected static trackWidth: int
          protected static tickLength: int
          protected static horizThumbIcon: javax.swing.Icon
          protected static vertThumbIcon: javax.swing.Icon
          protected readonly SLIDER_FILL: java.lang.String
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor()
          public installUI(arg0: javax.swing.JComponent): void
          protected createPropertyChangeListener(arg0: javax.swing.JSlider): java.beans.PropertyChangeListener
          public paintThumb(arg0: java.awt.Graphics): void
          public paintTrack(arg0: java.awt.Graphics): void
          public paintFocus(arg0: java.awt.Graphics): void
          protected getThumbSize(): java.awt.Dimension
          public getTickLength(): number
          protected getTrackWidth(): number
          protected getTrackLength(): number
          protected getThumbOverhang(): number
          protected scrollDueToClickInTrack(arg0: number | java.lang.Integer): void
          protected paintMinorTickForHorizSlider(
            arg0: java.awt.Graphics,
            arg1: java.awt.Rectangle,
            arg2: number | java.lang.Integer
          ): void
          protected paintMajorTickForHorizSlider(
            arg0: java.awt.Graphics,
            arg1: java.awt.Rectangle,
            arg2: number | java.lang.Integer
          ): void
          protected paintMinorTickForVertSlider(
            arg0: java.awt.Graphics,
            arg1: java.awt.Rectangle,
            arg2: number | java.lang.Integer
          ): void
          protected paintMajorTickForVertSlider(
            arg0: java.awt.Graphics,
            arg1: java.awt.Rectangle,
            arg2: number | java.lang.Integer
          ): void
        }
      }
    }
  }
}
