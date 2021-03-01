declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicTabbedPaneUI extends javax.swing.plaf.TabbedPaneUI implements javax.swing.SwingConstants {

          protected tabPane: javax.swing.JTabbedPane
          protected highlight: java.awt.Color
          protected lightHighlight: java.awt.Color
          protected shadow: java.awt.Color
          protected darkShadow: java.awt.Color
          protected focus: java.awt.Color
          protected textIconGap: int
          protected tabRunOverlay: int
          protected tabInsets: java.awt.Insets
          protected selectedTabPadInsets: java.awt.Insets
          protected tabAreaInsets: java.awt.Insets
          protected contentBorderInsets: java.awt.Insets
          protected upKey: javax.swing.KeyStroke
          protected downKey: javax.swing.KeyStroke
          protected leftKey: javax.swing.KeyStroke
          protected rightKey: javax.swing.KeyStroke
          protected tabRuns: int[]
          protected runCount: int
          protected selectedRun: int
          protected rects: java.awt.Rectangle[]
          protected maxTabHeight: int
          protected maxTabWidth: int
          protected tabChangeListener: javax.swing.event.ChangeListener
          protected propertyChangeListener: java.beans.PropertyChangeListener
          protected mouseListener: java.awt.event.MouseListener
          protected focusListener: java.awt.event.FocusListener
          protected calcRect: java.awt.Rectangle
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected createLayoutManager(): java.awt.LayoutManager
          protected installComponents(): void
          protected createScrollButton(arg0: int): javax.swing.JButton
          protected uninstallComponents(): void
          protected installDefaults(): void
          protected uninstallDefaults(): void
          protected installListeners(): void
          protected uninstallListeners(): void
          protected createMouseListener(): java.awt.event.MouseListener
          protected createFocusListener(): java.awt.event.FocusListener
          protected createChangeListener(): javax.swing.event.ChangeListener
          protected createPropertyChangeListener(): java.beans.PropertyChangeListener
          protected installKeyboardActions(): void
          getInputMap(arg0: int): javax.swing.InputMap
          protected uninstallKeyboardActions(): void
          protected setRolloverTab(arg0: int): void
          protected getRolloverTab(): int
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getBaseline(arg0: javax.swing.JComponent, arg1: int, arg2: int): int
          public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
          protected getBaseline(arg0: int): int
          protected getBaselineOffset(): int
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paintTabArea(arg0: java.awt.Graphics, arg1: int, arg2: int): void
          protected paintTab(arg0: java.awt.Graphics, arg1: int, arg2: java.awt.Rectangle[], arg3: int, arg4: java.awt.Rectangle, arg5: java.awt.Rectangle): void
          protected layoutLabel(arg0: int, arg1: java.awt.FontMetrics, arg2: int, arg3: java.lang.String, arg4: javax.swing.Icon, arg5: java.awt.Rectangle, arg6: java.awt.Rectangle, arg7: java.awt.Rectangle, arg8: boolean): void
          protected paintIcon(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: javax.swing.Icon, arg4: java.awt.Rectangle, arg5: boolean): void
          protected paintText(arg0: java.awt.Graphics, arg1: int, arg2: java.awt.Font, arg3: java.awt.FontMetrics, arg4: int, arg5: java.lang.String, arg6: java.awt.Rectangle, arg7: boolean): void
          protected getTabLabelShiftX(arg0: int, arg1: int, arg2: boolean): int
          protected getTabLabelShiftY(arg0: int, arg1: int, arg2: boolean): int
          protected paintFocusIndicator(arg0: java.awt.Graphics, arg1: int, arg2: java.awt.Rectangle[], arg3: int, arg4: java.awt.Rectangle, arg5: java.awt.Rectangle, arg6: boolean): void
          protected paintTabBorder(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: boolean): void
          protected paintTabBackground(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: boolean): void
          protected paintContentBorder(arg0: java.awt.Graphics, arg1: int, arg2: int): void
          protected paintContentBorderTopEdge(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
          protected paintContentBorderLeftEdge(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
          protected paintContentBorderBottomEdge(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
          protected paintContentBorderRightEdge(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
          public getTabBounds(arg0: javax.swing.JTabbedPane, arg1: int): java.awt.Rectangle
          public getTabRunCount(arg0: javax.swing.JTabbedPane): int
          public tabForCoordinate(arg0: javax.swing.JTabbedPane, arg1: int, arg2: int): int
          protected getTabBounds(arg0: int, arg1: java.awt.Rectangle): java.awt.Rectangle
          protected getVisibleComponent(): java.awt.Component
          protected setVisibleComponent(arg0: java.awt.Component): void
          protected assureRectsCreated(arg0: int): void
          protected expandTabRunsArray(): void
          protected getRunForTab(arg0: int, arg1: int): int
          protected lastTabInRun(arg0: int, arg1: int): int
          protected getTabRunOverlay(arg0: int): int
          protected getTabRunIndent(arg0: int, arg1: int): int
          protected shouldPadTabRun(arg0: int, arg1: int): boolean
          protected shouldRotateTabRuns(arg0: int): boolean
          protected getIconForTab(arg0: int): javax.swing.Icon
          protected getTextViewForTab(arg0: int): javax.swing.text.View
          protected calculateTabHeight(arg0: int, arg1: int, arg2: int): int
          protected calculateMaxTabHeight(arg0: int): int
          protected calculateTabWidth(arg0: int, arg1: int, arg2: java.awt.FontMetrics): int
          protected calculateMaxTabWidth(arg0: int): int
          protected calculateTabAreaHeight(arg0: int, arg1: int, arg2: int): int
          protected calculateTabAreaWidth(arg0: int, arg1: int, arg2: int): int
          protected getTabInsets(arg0: int, arg1: int): java.awt.Insets
          protected getSelectedTabPadInsets(arg0: int): java.awt.Insets
          protected getTabAreaInsets(arg0: int): java.awt.Insets
          protected getContentBorderInsets(arg0: int): java.awt.Insets
          protected getFontMetrics(): java.awt.FontMetrics
          protected navigateSelectedTab(arg0: int): void
          protected selectNextTabInRun(arg0: int): void
          protected selectPreviousTabInRun(arg0: int): void
          protected selectNextTab(arg0: int): void
          protected selectPreviousTab(arg0: int): void
          protected selectAdjacentRunTab(arg0: int, arg1: int, arg2: int): void
          setFocusIndex(arg0: int, arg1: boolean): void
          protected getFocusIndex(): int
          protected getTabRunOffset(arg0: int, arg1: int, arg2: int, arg3: boolean): int
          protected getPreviousTabIndex(arg0: int): int
          protected getNextTabIndex(arg0: int): int
          protected getNextTabIndexInRun(arg0: int, arg1: int): int
          protected getPreviousTabIndexInRun(arg0: int, arg1: int): int
          protected getPreviousTabRun(arg0: int): int
          protected getNextTabRun(arg0: int): int
          protected static rotateInsets(arg0: java.awt.Insets, arg1: java.awt.Insets, arg2: int): void
          requestFocusForVisibleComponent(): boolean
        }

      }
    }
  }
}
