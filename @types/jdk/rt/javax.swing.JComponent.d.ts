declare namespace javax {
    namespace swing {
        abstract class JComponent extends java.awt.Container implements java.io.Serializable , javax.swing.TransferHandler$HasGetTransferHandler {
            protected ui: javax.swing.plaf.ComponentUI
            protected listenerList: javax.swing.event.EventListenerList
            public static readonly WHEN_FOCUSED: int
            public static readonly WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: int
            public static readonly WHEN_IN_FOCUSED_WINDOW: int
            public static readonly UNDEFINED_CONDITION: int
            public static readonly TOOL_TIP_TEXT_KEY: string
            public setInheritsPopupMenu(arg0: boolean): void
            public getInheritsPopupMenu(): boolean
            public setComponentPopupMenu(arg0: javax.swing.JPopupMenu): void
            public getComponentPopupMenu(): javax.swing.JPopupMenu
            public constructor()
            public updateUI(): void
            protected setUI(arg0: javax.swing.plaf.ComponentUI): void
            public getUIClassID(): string
            protected getComponentGraphics(arg0: java.awt.Graphics): java.awt.Graphics
            protected paintComponent(arg0: java.awt.Graphics): void
            protected paintChildren(arg0: java.awt.Graphics): void
            protected paintBorder(arg0: java.awt.Graphics): void
            public update(arg0: java.awt.Graphics): void
            public paint(arg0: java.awt.Graphics): void
            public printAll(arg0: java.awt.Graphics): void
            public print(arg0: java.awt.Graphics): void
            protected printComponent(arg0: java.awt.Graphics): void
            protected printChildren(arg0: java.awt.Graphics): void
            protected printBorder(arg0: java.awt.Graphics): void
            public isPaintingTile(): boolean
            public isPaintingForPrint(): boolean
            public isManagingFocus(): boolean
            public setNextFocusableComponent(arg0: java.awt.Component): void
            public getNextFocusableComponent(): java.awt.Component
            public setRequestFocusEnabled(arg0: boolean): void
            public isRequestFocusEnabled(): boolean
            public requestFocus(): void
            public requestFocus(arg0: boolean): boolean
            public requestFocusInWindow(): boolean
            protected requestFocusInWindow(arg0: boolean): boolean
            public grabFocus(): void
            public setVerifyInputWhenFocusTarget(arg0: boolean): void
            public getVerifyInputWhenFocusTarget(): boolean
            public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
            public setPreferredSize(arg0: java.awt.Dimension): void
            public getPreferredSize(): java.awt.Dimension
            public setMaximumSize(arg0: java.awt.Dimension): void
            public getMaximumSize(): java.awt.Dimension
            public setMinimumSize(arg0: java.awt.Dimension): void
            public getMinimumSize(): java.awt.Dimension
            public contains(arg0: int, arg1: int): boolean
            public setBorder(arg0: javax.swing.border.Border): void
            public getBorder(): javax.swing.border.Border
            public getInsets(): java.awt.Insets
            public getInsets(arg0: java.awt.Insets): java.awt.Insets
            public getAlignmentY(): float
            public setAlignmentY(arg0: float): void
            public getAlignmentX(): float
            public setAlignmentX(arg0: float): void
            public setInputVerifier(arg0: javax.swing.InputVerifier | javax.swing.InputVerifier$$Lambda): void
            public getInputVerifier(): javax.swing.InputVerifier
            public getGraphics(): java.awt.Graphics
            public setDebugGraphicsOptions(arg0: int): void
            public getDebugGraphicsOptions(): int
            public registerKeyboardAction(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$Lambda, arg1: java.lang.String | string, arg2: javax.swing.KeyStroke, arg3: int): void
            public registerKeyboardAction(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$Lambda, arg1: javax.swing.KeyStroke, arg2: int): void
            public unregisterKeyboardAction(arg0: javax.swing.KeyStroke): void
            public getRegisteredKeyStrokes(): javax.swing.KeyStroke[]
            public getConditionForKeyStroke(arg0: javax.swing.KeyStroke): int
            public getActionForKeyStroke(arg0: javax.swing.KeyStroke): java.awt.event.ActionListener
            public resetKeyboardActions(): void
            public setInputMap(arg0: int, arg1: javax.swing.InputMap): void
            public getInputMap(arg0: int): javax.swing.InputMap
            public getInputMap(): javax.swing.InputMap
            public setActionMap(arg0: javax.swing.ActionMap): void
            public getActionMap(): javax.swing.ActionMap
            public getBaseline(arg0: int, arg1: int): int
            public getBaselineResizeBehavior(): java.awt.Component$BaselineResizeBehavior
            public requestDefaultFocus(): boolean
            public setVisible(arg0: boolean): void
            public setEnabled(arg0: boolean): void
            public setForeground(arg0: java.awt.Color): void
            public setBackground(arg0: java.awt.Color): void
            public setFont(arg0: java.awt.Font): void
            public static getDefaultLocale(): java.util.Locale
            public static setDefaultLocale(arg0: java.util.Locale): void
            protected processComponentKeyEvent(arg0: java.awt.event.KeyEvent): void
            protected processKeyEvent(arg0: java.awt.event.KeyEvent): void
            protected processKeyBinding(arg0: javax.swing.KeyStroke, arg1: java.awt.event.KeyEvent, arg2: int, arg3: boolean): boolean
            public setToolTipText(arg0: java.lang.String | string): void
            public getToolTipText(): string
            public getToolTipText(arg0: java.awt.event.MouseEvent): string
            public getToolTipLocation(arg0: java.awt.event.MouseEvent): java.awt.Point
            public getPopupLocation(arg0: java.awt.event.MouseEvent): java.awt.Point
            public createToolTip(): javax.swing.JToolTip
            public scrollRectToVisible(arg0: java.awt.Rectangle): void
            public setAutoscrolls(arg0: boolean): void
            public getAutoscrolls(): boolean
            public setTransferHandler(arg0: javax.swing.TransferHandler): void
            public getTransferHandler(): javax.swing.TransferHandler
            protected processMouseEvent(arg0: java.awt.event.MouseEvent): void
            protected processMouseMotionEvent(arg0: java.awt.event.MouseEvent): void
            public enable(): void
            public disable(): void
            public getClientProperty(arg0: java.lang.Object): java.lang.Object
            public putClientProperty(arg0: java.lang.Object, arg1: java.lang.Object): void
            public setFocusTraversalKeys(arg0: int, arg1: java.util.Set<java.awt.AWTKeyStroke>): void
            public static isLightweightComponent(arg0: java.awt.Component): boolean
            public reshape(arg0: int, arg1: int, arg2: int, arg3: int): void
            public getBounds(arg0: java.awt.Rectangle): java.awt.Rectangle
            public getSize(arg0: java.awt.Dimension): java.awt.Dimension
            public getLocation(arg0: java.awt.Point): java.awt.Point
            public getX(): int
            public getY(): int
            public getWidth(): int
            public getHeight(): int
            public isOpaque(): boolean
            public setOpaque(arg0: boolean): void
            public computeVisibleRect(arg0: java.awt.Rectangle): void
            public getVisibleRect(): java.awt.Rectangle
            public firePropertyChange(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): void
            public firePropertyChange(arg0: java.lang.String | string, arg1: int, arg2: int): void
            public firePropertyChange(arg0: java.lang.String | string, arg1: char, arg2: char): void
            protected fireVetoableChange(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.Object): void
            public addVetoableChangeListener(arg0: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$Lambda): void
            public removeVetoableChangeListener(arg0: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$Lambda): void
            public getVetoableChangeListeners(): java.beans.VetoableChangeListener[]
            public getTopLevelAncestor(): java.awt.Container
            public addAncestorListener(arg0: javax.swing.event.AncestorListener): void
            public removeAncestorListener(arg0: javax.swing.event.AncestorListener): void
            public getAncestorListeners(): javax.swing.event.AncestorListener[]
            public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
            public addNotify<T extends java.util.EventListener>(): void
            public removeNotify<T extends java.util.EventListener>(): void
            public repaint<T extends java.util.EventListener>(arg0: long, arg1: int, arg2: int, arg3: int, arg4: int): void
            public repaint<T extends java.util.EventListener>(arg0: java.awt.Rectangle): void
            public revalidate<T extends java.util.EventListener>(): void
            public isValidateRoot<T extends java.util.EventListener>(): boolean
            public isOptimizedDrawingEnabled<T extends java.util.EventListener>(): boolean
            protected isPaintingOrigin<T extends java.util.EventListener>(): boolean
            public paintImmediately<T extends java.util.EventListener>(arg0: int, arg1: int, arg2: int, arg3: int): void
            public paintImmediately<T extends java.util.EventListener>(arg0: java.awt.Rectangle): void
            public setDoubleBuffered<T extends java.util.EventListener>(arg0: boolean): void
            public isDoubleBuffered<T extends java.util.EventListener>(): boolean
            public getRootPane<T extends java.util.EventListener>(): javax.swing.JRootPane
            protected paramString<T extends java.util.EventListener>(): string
            public hide<T extends java.util.EventListener>(): void
            public static class: java.lang.Class<any>
        }
    }
}