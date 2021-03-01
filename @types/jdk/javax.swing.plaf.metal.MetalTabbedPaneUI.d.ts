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
          protected paintTabBorder(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: boolean): void
          protected paintTopTabBorder(arg0: int, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: boolean): void
          protected shouldFillGap(arg0: int, arg1: int, arg2: int, arg3: int): boolean
          protected getColorForGap(arg0: int, arg1: int, arg2: int): java.awt.Color
          protected paintLeftTabBorder(arg0: int, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: boolean): void
          protected paintBottomTabBorder(arg0: int, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: boolean): void
          protected paintRightTabBorder(arg0: int, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: boolean): void
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paintTabBackground(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: boolean): void
          protected getTabLabelShiftX(arg0: int, arg1: int, arg2: boolean): int
          protected getTabLabelShiftY(arg0: int, arg1: int, arg2: boolean): int
          protected getBaselineOffset(): int
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paintHighlightBelowTab(): void
          protected paintFocusIndicator(arg0: java.awt.Graphics, arg1: int, arg2: java.awt.Rectangle[], arg3: int, arg4: java.awt.Rectangle, arg5: java.awt.Rectangle, arg6: boolean): void
          protected paintContentBorderTopEdge(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
          protected paintContentBorderBottomEdge(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
          protected paintContentBorderLeftEdge(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
          protected paintContentBorderRightEdge(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
          protected calculateMaxTabHeight(arg0: int): int
          protected getTabRunOverlay(arg0: int): int
          protected shouldRotateTabRuns(arg0: int, arg1: int): boolean
          protected shouldPadTabRun(arg0: int, arg1: int): boolean
          getRolloverTabIndex(): int
        }

      }
    }
  }
}
