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
          protected createScrollButton(arg0: number | java.lang.Integer): javax.swing.JButton
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
          getInputMap(arg0: number | java.lang.Integer): javax.swing.InputMap
          protected uninstallKeyboardActions(): void
          protected setRolloverTab(arg0: number | java.lang.Integer): void
          protected getRolloverTab(): number
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getBaseline(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
          public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
          protected getBaseline(arg0: number | java.lang.Integer): number
          protected getBaselineOffset(): number
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paintTabArea(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
          protected paintTab(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: java.awt.Rectangle[], arg3: number | java.lang.Integer, arg4: java.awt.Rectangle, arg5: java.awt.Rectangle): void
          protected layoutLabel(arg0: number | java.lang.Integer, arg1: java.awt.FontMetrics, arg2: number | java.lang.Integer, arg3: java.lang.String | string, arg4: javax.swing.Icon, arg5: java.awt.Rectangle, arg6: java.awt.Rectangle, arg7: java.awt.Rectangle, arg8: boolean | java.lang.Boolean): void
          protected paintIcon(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: javax.swing.Icon, arg4: java.awt.Rectangle, arg5: boolean | java.lang.Boolean): void
          protected paintText(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: java.awt.Font, arg3: java.awt.FontMetrics, arg4: number | java.lang.Integer, arg5: java.lang.String | string, arg6: java.awt.Rectangle, arg7: boolean | java.lang.Boolean): void
          protected getTabLabelShiftX(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): number
          protected getTabLabelShiftY(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): number
          protected paintFocusIndicator(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: java.awt.Rectangle[], arg3: number | java.lang.Integer, arg4: java.awt.Rectangle, arg5: java.awt.Rectangle, arg6: boolean | java.lang.Boolean): void
          protected paintTabBorder(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: boolean | java.lang.Boolean): void
          protected paintTabBackground(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: boolean | java.lang.Boolean): void
          protected paintContentBorder(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
          protected paintContentBorderTopEdge(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer): void
          protected paintContentBorderLeftEdge(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer): void
          protected paintContentBorderBottomEdge(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer): void
          protected paintContentBorderRightEdge(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer): void
          public getTabBounds(arg0: javax.swing.JTabbedPane, arg1: number | java.lang.Integer): java.awt.Rectangle
          public getTabRunCount(arg0: javax.swing.JTabbedPane): number
          public tabForCoordinate(arg0: javax.swing.JTabbedPane, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
          protected getTabBounds(arg0: number | java.lang.Integer, arg1: java.awt.Rectangle): java.awt.Rectangle
          protected getVisibleComponent(): java.awt.Component
          protected setVisibleComponent(arg0: java.awt.Component): void
          protected assureRectsCreated(arg0: number | java.lang.Integer): void
          protected expandTabRunsArray(): void
          protected getRunForTab(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
          protected lastTabInRun(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
          protected getTabRunOverlay(arg0: number | java.lang.Integer): number
          protected getTabRunIndent(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
          protected shouldPadTabRun(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
          protected shouldRotateTabRuns(arg0: number | java.lang.Integer): boolean
          protected getIconForTab(arg0: number | java.lang.Integer): javax.swing.Icon
          protected getTextViewForTab(arg0: number | java.lang.Integer): javax.swing.text.View
          protected calculateTabHeight(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
          protected calculateMaxTabHeight(arg0: number | java.lang.Integer): number
          protected calculateTabWidth(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.awt.FontMetrics): number
          protected calculateMaxTabWidth(arg0: number | java.lang.Integer): number
          protected calculateTabAreaHeight(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
          protected calculateTabAreaWidth(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
          protected getTabInsets(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.Insets
          protected getSelectedTabPadInsets(arg0: number | java.lang.Integer): java.awt.Insets
          protected getTabAreaInsets(arg0: number | java.lang.Integer): java.awt.Insets
          protected getContentBorderInsets(arg0: number | java.lang.Integer): java.awt.Insets
          protected getFontMetrics(): java.awt.FontMetrics
          protected navigateSelectedTab(arg0: number | java.lang.Integer): void
          protected selectNextTabInRun(arg0: number | java.lang.Integer): void
          protected selectPreviousTabInRun(arg0: number | java.lang.Integer): void
          protected selectNextTab(arg0: number | java.lang.Integer): void
          protected selectPreviousTab(arg0: number | java.lang.Integer): void
          protected selectAdjacentRunTab(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
          setFocusIndex(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
          protected getFocusIndex(): number
          protected getTabRunOffset(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: boolean | java.lang.Boolean): number
          protected getPreviousTabIndex(arg0: number | java.lang.Integer): number
          protected getNextTabIndex(arg0: number | java.lang.Integer): number
          protected getNextTabIndexInRun(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
          protected getPreviousTabIndexInRun(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
          protected getPreviousTabRun(arg0: number | java.lang.Integer): number
          protected getNextTabRun(arg0: number | java.lang.Integer): number
          protected static rotateInsets(arg0: java.awt.Insets, arg1: java.awt.Insets, arg2: number | java.lang.Integer): void
          requestFocusForVisibleComponent(): boolean
        }

      }
    }
  }
}
