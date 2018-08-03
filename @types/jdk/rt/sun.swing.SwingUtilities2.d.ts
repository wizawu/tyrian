declare namespace sun {
    namespace swing {
        class SwingUtilities2 {
            public static readonly LAF_STATE_KEY: java.lang.Object
            public static readonly MENU_SELECTION_MANAGER_LISTENER_KEY: java.lang.Object
            public static readonly DEFAULT_FRC: java.awt.font.FontRenderContext
            public static readonly AA_TEXT_PROPERTY_KEY: java.lang.Object
            public static readonly IMPLIED_CR: string
            public static readonly COMPONENT_UI_PROPERTY_KEY: java.lang.Object
            public static readonly BASICMENUITEMUI_MAX_TEXT_OFFSET: sun.swing.StringUIClientPropertyKey
            public constructor()
            public static isComplexLayout(arg0: char[], arg1: int, arg2: int): boolean
            public static drawTextAntialiased(arg0: javax.swing.JComponent): sun.swing.SwingUtilities2$AATextInfo
            public static getLeftSideBearing(arg0: javax.swing.JComponent, arg1: java.awt.FontMetrics, arg2: java.lang.String | string): int
            public static getLeftSideBearing(arg0: javax.swing.JComponent, arg1: java.awt.FontMetrics, arg2: char): int
            public static getFontMetrics(arg0: javax.swing.JComponent, arg1: java.awt.Graphics): java.awt.FontMetrics
            public static getFontMetrics(arg0: javax.swing.JComponent, arg1: java.awt.Graphics, arg2: java.awt.Font): java.awt.FontMetrics
            public static stringWidth(arg0: javax.swing.JComponent, arg1: java.awt.FontMetrics, arg2: java.lang.String | string): int
            public static clipStringIfNecessary(arg0: javax.swing.JComponent, arg1: java.awt.FontMetrics, arg2: java.lang.String | string, arg3: int): string
            public static clipString(arg0: javax.swing.JComponent, arg1: java.awt.FontMetrics, arg2: java.lang.String | string, arg3: int): string
            public static drawString(arg0: javax.swing.JComponent, arg1: java.awt.Graphics, arg2: java.lang.String | string, arg3: int, arg4: int): void
            public static drawStringUnderlineCharAt(arg0: javax.swing.JComponent, arg1: java.awt.Graphics, arg2: java.lang.String | string, arg3: int, arg4: int, arg5: int): void
            public static loc2IndexFileList(arg0: javax.swing.JList, arg1: java.awt.Point): int
            public static pointOutsidePrefSize(arg0: javax.swing.JTable, arg1: int, arg2: int, arg3: java.awt.Point): boolean
            public static setLeadAnchorWithoutSelection(arg0: javax.swing.ListSelectionModel, arg1: int, arg2: int): void
            public static shouldIgnore(arg0: java.awt.event.MouseEvent, arg1: javax.swing.JComponent): boolean
            public static adjustFocus(arg0: javax.swing.JComponent): void
            public static drawChars(arg0: javax.swing.JComponent, arg1: java.awt.Graphics, arg2: char[], arg3: int, arg4: int, arg5: int, arg6: int): int
            public static drawString(arg0: javax.swing.JComponent, arg1: java.awt.Graphics, arg2: java.text.AttributedCharacterIterator, arg3: int, arg4: int): float
            public static drawVLine(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int): void
            public static drawHLine(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int): void
            public static drawRect(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int): void
            public static getGraphics2D(arg0: java.awt.Graphics): java.awt.Graphics2D
            public static getFontRenderContext(arg0: java.awt.Component): java.awt.font.FontRenderContext
            public static getFontMetrics(arg0: javax.swing.JComponent, arg1: java.awt.Font): java.awt.FontMetrics
            public static useSelectedTextColor(arg0: javax.swing.text.Highlighter$Highlight, arg1: javax.swing.text.JTextComponent): boolean
            public static canAccessSystemClipboard(): boolean
            public static canCurrentEventAccessSystemClipboard(): boolean
            public static canEventAccessSystemClipboard(arg0: java.awt.AWTEvent): boolean
            public static checkAccess(arg0: int): void
            public static displayPropertiesToCSS(arg0: java.awt.Font, arg1: java.awt.Color): string
            public static makeIcon(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.String | string): java.lang.Object
            public static isLocalDisplay(): boolean
            public static getUIDefaultsInt(arg0: java.lang.Object): int
            public static getUIDefaultsInt(arg0: java.lang.Object, arg1: java.util.Locale): int
            public static getUIDefaultsInt(arg0: java.lang.Object, arg1: int): int
            public static getUIDefaultsInt(arg0: java.lang.Object, arg1: java.util.Locale, arg2: int): int
            public static compositeRequestFocus(arg0: java.awt.Component): java.awt.Component
            public static tabbedPaneChangeFocusTo(arg0: java.awt.Component): boolean
            public static submit<V>(arg0: java.util.concurrent.Callable<V> | java.util.concurrent.Callable$$Lambda<V>): java.util.concurrent.Future<V>
            public static submit<V>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: V): java.util.concurrent.Future<V>
            public static setSkipClickCount<V>(arg0: java.awt.Component, arg1: int): void
            public static getAdjustedClickCount<V>(arg0: javax.swing.text.JTextComponent, arg1: java.awt.event.MouseEvent): int
            public static liesInHorizontal<V>(arg0: java.awt.Rectangle, arg1: java.awt.Point, arg2: boolean, arg3: boolean): sun.swing.SwingUtilities2$Section
            public static liesInVertical<V>(arg0: java.awt.Rectangle, arg1: java.awt.Point, arg2: boolean): sun.swing.SwingUtilities2$Section
            public static convertColumnIndexToModel<V>(arg0: javax.swing.table.TableColumnModel, arg1: int): int
            public static convertColumnIndexToView<V>(arg0: javax.swing.table.TableColumnModel, arg1: int): int
            public static getSystemMnemonicKeyMask<V>(): int
            public static getTreePath<V>(arg0: javax.swing.event.TreeModelEvent, arg1: javax.swing.tree.TreeModel): javax.swing.tree.TreePath
            public static class: java.lang.Class<any>
        }
    }
}