declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicProgressBarUI extends javax.swing.plaf.ProgressBarUI {
          protected progressBar: javax.swing.JProgressBar
          protected changeListener: javax.swing.event.ChangeListener
          protected boxRect: java.awt.Rectangle
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installDefaults(): void
          protected uninstallDefaults(): void
          protected installListeners(): void
          protected startAnimationTimer(): void
          protected stopAnimationTimer(): void
          protected uninstallListeners(): void
          public getBaseline(
            arg0: javax.swing.JComponent,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): number
          public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
          protected getPreferredInnerHorizontal(): java.awt.Dimension
          protected getPreferredInnerVertical(): java.awt.Dimension
          protected getSelectionForeground(): java.awt.Color
          protected getSelectionBackground(): java.awt.Color
          protected getCellLength(): number
          protected setCellLength(arg0: number | java.lang.Integer): void
          protected getCellSpacing(): number
          protected setCellSpacing(arg0: number | java.lang.Integer): void
          protected getAmountFull(
            arg0: java.awt.Insets,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): number
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected getBox(arg0: java.awt.Rectangle): java.awt.Rectangle
          protected getBoxLength(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
          protected paintIndeterminate(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paintDeterminate(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paintString(
            arg0: java.awt.Graphics,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: java.awt.Insets
          ): void
          protected getStringPlacement(
            arg0: java.awt.Graphics,
            arg1: java.lang.String | string,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer
          ): java.awt.Point
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected getAnimationIndex(): number
          protected getFrameCount(): number
          protected setAnimationIndex(arg0: number | java.lang.Integer): void
          protected incrementAnimationIndex(): void
        }
      }
    }
  }
}
