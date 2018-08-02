declare namespace sun {
    namespace swing {
        class MenuItemLayoutHelper {
            public static MAX_ARROW_WIDTH: sun.swing.StringUIClientPropertyKey
            public static MAX_CHECK_WIDTH: sun.swing.StringUIClientPropertyKey
            public static MAX_ICON_WIDTH: sun.swing.StringUIClientPropertyKey
            public static MAX_TEXT_WIDTH: sun.swing.StringUIClientPropertyKey
            public static MAX_ACC_WIDTH: sun.swing.StringUIClientPropertyKey
            public static MAX_LABEL_WIDTH: sun.swing.StringUIClientPropertyKey
            protected constructor()
            public constructor(arg0: javax.swing.JMenuItem, arg1: javax.swing.Icon, arg2: javax.swing.Icon, arg3: java.awt.Rectangle, arg4: int, arg5: java.lang.String | string, arg6: boolean, arg7: java.awt.Font, arg8: java.awt.Font, arg9: boolean, arg10: java.lang.String | string)
            protected reset(arg0: javax.swing.JMenuItem, arg1: javax.swing.Icon, arg2: javax.swing.Icon, arg3: java.awt.Rectangle, arg4: int, arg5: java.lang.String | string, arg6: boolean, arg7: java.awt.Font, arg8: java.awt.Font, arg9: boolean, arg10: java.lang.String | string): void
            protected calcWidthsAndHeights(): void
            protected calcMaxWidths(): void
            protected calcMaxWidth(arg0: sun.swing.MenuItemLayoutHelper$RectSize, arg1: java.lang.Object): void
            protected calcMaxValue(arg0: java.lang.Object, arg1: int): int
            protected getParentIntProperty(arg0: java.lang.Object): int
            public static isColumnLayout(arg0: boolean, arg1: javax.swing.JMenuItem): boolean
            public static isColumnLayout(arg0: boolean, arg1: int, arg2: int, arg3: int): boolean
            public layoutMenuItem(): sun.swing.MenuItemLayoutHelper$LayoutResult
            public getLTRColumnAlignment(): sun.swing.MenuItemLayoutHelper$ColumnAlignment
            public getRTLColumnAlignment(): sun.swing.MenuItemLayoutHelper$ColumnAlignment
            protected prepareForLayout(arg0: sun.swing.MenuItemLayoutHelper$LayoutResult): void
            protected layoutIconAndTextInLabelRect(arg0: sun.swing.MenuItemLayoutHelper$LayoutResult): void
            public static getMenuItemParent(arg0: javax.swing.JMenuItem): javax.swing.JComponent
            public static clearUsedParentClientProperties(arg0: javax.swing.JMenuItem): void
            public static clearUsedClientProperties(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
            public static max(...arg0: int[]): int
            public static createMaxRect(): java.awt.Rectangle
            public static addMaxWidth(arg0: sun.swing.MenuItemLayoutHelper$RectSize, arg1: int, arg2: java.awt.Dimension): void
            public static addWidth(arg0: int, arg1: int, arg2: java.awt.Dimension): void
            public getMenuItem(): javax.swing.JMenuItem
            public getMenuItemParent(): javax.swing.JComponent
            public getFont(): java.awt.Font
            public getAccFont(): java.awt.Font
            public getFontMetrics(): java.awt.FontMetrics
            public getAccFontMetrics(): java.awt.FontMetrics
            public getIcon(): javax.swing.Icon
            public getCheckIcon(): javax.swing.Icon
            public getArrowIcon(): javax.swing.Icon
            public getText(): string
            public getAccText(): string
            public isColumnLayout(): boolean
            public useCheckAndArrow(): boolean
            public isLeftToRight(): boolean
            public isTopLevelMenu(): boolean
            public getHtmlView(): javax.swing.text.View
            public getVerticalAlignment(): int
            public getHorizontalAlignment(): int
            public getVerticalTextPosition(): int
            public getHorizontalTextPosition(): int
            public getGap(): int
            public getLeadingGap(): int
            public getAfterCheckIconGap(): int
            public getMinTextOffset(): int
            public getViewRect(): java.awt.Rectangle
            public getIconSize(): sun.swing.MenuItemLayoutHelper$RectSize
            public getTextSize(): sun.swing.MenuItemLayoutHelper$RectSize
            public getAccSize(): sun.swing.MenuItemLayoutHelper$RectSize
            public getCheckSize(): sun.swing.MenuItemLayoutHelper$RectSize
            public getArrowSize(): sun.swing.MenuItemLayoutHelper$RectSize
            public getLabelSize(): sun.swing.MenuItemLayoutHelper$RectSize
            protected setMenuItem(arg0: javax.swing.JMenuItem): void
            protected setMenuItemParent(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
            protected setFont(arg0: java.awt.Font): void
            protected setAccFont(arg0: java.awt.Font): void
            protected setFontMetrics(arg0: java.awt.FontMetrics): void
            protected setAccFontMetrics(arg0: java.awt.FontMetrics): void
            protected setIcon(arg0: javax.swing.Icon): void
            protected setCheckIcon(arg0: javax.swing.Icon): void
            protected setArrowIcon(arg0: javax.swing.Icon): void
            protected setText(arg0: java.lang.String | string): void
            protected setAccText(arg0: java.lang.String | string): void
            protected setColumnLayout(arg0: boolean): void
            protected setUseCheckAndArrow(arg0: boolean): void
            protected setLeftToRight(arg0: boolean): void
            protected setTopLevelMenu(arg0: boolean): void
            protected setHtmlView(arg0: javax.swing.text.View): void
            protected setVerticalAlignment(arg0: int): void
            protected setHorizontalAlignment(arg0: int): void
            protected setVerticalTextPosition(arg0: int): void
            protected setHorizontalTextPosition(arg0: int): void
            protected setGap(arg0: int): void
            protected setLeadingGap(arg0: int): void
            protected setAfterCheckIconGap(arg0: int): void
            protected setMinTextOffset(arg0: int): void
            protected setViewRect(arg0: java.awt.Rectangle): void
            protected setIconSize(arg0: sun.swing.MenuItemLayoutHelper$RectSize): void
            protected setTextSize(arg0: sun.swing.MenuItemLayoutHelper$RectSize): void
            protected setAccSize(arg0: sun.swing.MenuItemLayoutHelper$RectSize): void
            protected setCheckSize(arg0: sun.swing.MenuItemLayoutHelper$RectSize): void
            protected setArrowSize(arg0: sun.swing.MenuItemLayoutHelper$RectSize): void
            protected setLabelSize(arg0: sun.swing.MenuItemLayoutHelper$RectSize): void
            public getLeftTextExtraWidth(): int
            public static useCheckAndArrow(arg0: javax.swing.JMenuItem): boolean
            public static class: java.lang.Class<any>
        }
    }
}