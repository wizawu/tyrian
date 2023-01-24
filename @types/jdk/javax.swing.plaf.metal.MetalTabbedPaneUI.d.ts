declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {
        class MetalTabbedPaneUI extends javax.swing.plaf.basic.BasicTabbedPaneUI {
          protected minTabWidth: int
          protected tabAreaBackground: java.awt.Color
          protected selectColor: java.awt.Color
          protected selectHighlight: java.awt.Color
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected createLayoutManager(): java.awt.LayoutManager
          protected installDefaults(): void
          protected paintTabBorder(
            arg0: java.awt.Graphics,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer,
            arg7: boolean | java.lang.Boolean
          ): void
          protected paintTopTabBorder(
            arg0: number | java.lang.Integer,
            arg1: java.awt.Graphics,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer,
            arg7: number | java.lang.Integer,
            arg8: boolean | java.lang.Boolean
          ): void
          protected shouldFillGap(
            arg0: number | java.lang.Integer,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer
          ): boolean
          protected getColorForGap(
            arg0: number | java.lang.Integer,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): java.awt.Color
          protected paintLeftTabBorder(
            arg0: number | java.lang.Integer,
            arg1: java.awt.Graphics,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer,
            arg7: number | java.lang.Integer,
            arg8: boolean | java.lang.Boolean
          ): void
          protected paintBottomTabBorder(
            arg0: number | java.lang.Integer,
            arg1: java.awt.Graphics,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer,
            arg7: number | java.lang.Integer,
            arg8: boolean | java.lang.Boolean
          ): void
          protected paintRightTabBorder(
            arg0: number | java.lang.Integer,
            arg1: java.awt.Graphics,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer,
            arg7: number | java.lang.Integer,
            arg8: boolean | java.lang.Boolean
          ): void
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paintTabBackground(
            arg0: java.awt.Graphics,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer,
            arg7: boolean | java.lang.Boolean
          ): void
          protected getTabLabelShiftX(
            arg0: number | java.lang.Integer,
            arg1: number | java.lang.Integer,
            arg2: boolean | java.lang.Boolean
          ): number
          protected getTabLabelShiftY(
            arg0: number | java.lang.Integer,
            arg1: number | java.lang.Integer,
            arg2: boolean | java.lang.Boolean
          ): number
          protected getBaselineOffset(): number
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paintHighlightBelowTab(): void
          protected paintFocusIndicator(
            arg0: java.awt.Graphics,
            arg1: number | java.lang.Integer,
            arg2: java.awt.Rectangle[],
            arg3: number | java.lang.Integer,
            arg4: java.awt.Rectangle,
            arg5: java.awt.Rectangle,
            arg6: boolean | java.lang.Boolean
          ): void
          protected paintContentBorderTopEdge(
            arg0: java.awt.Graphics,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer
          ): void
          protected paintContentBorderBottomEdge(
            arg0: java.awt.Graphics,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer
          ): void
          protected paintContentBorderLeftEdge(
            arg0: java.awt.Graphics,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer
          ): void
          protected paintContentBorderRightEdge(
            arg0: java.awt.Graphics,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer
          ): void
          protected calculateMaxTabHeight(arg0: number | java.lang.Integer): number
          protected getTabRunOverlay(arg0: number | java.lang.Integer): number
          protected shouldRotateTabRuns(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
          protected shouldPadTabRun(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
          getRolloverTabIndex(): number
        }
      }
    }
  }
}
