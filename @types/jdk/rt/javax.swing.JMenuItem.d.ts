declare namespace javax {
    namespace swing {
class JMenuItem extends javax.swing.AbstractButton implements javax.accessibility.Accessible , javax.swing.MenuElement {
    public constructor()
    public constructor(arg0: javax.swing.Icon)
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: javax.swing.Action)
    public constructor(arg0: java.lang.String | string, arg1: javax.swing.Icon)
    public constructor(arg0: java.lang.String | string, arg1: int)
    public setModel(arg0: javax.swing.ButtonModel): void
    protected init(arg0: java.lang.String | string, arg1: javax.swing.Icon): void
    public setUI(arg0: javax.swing.plaf.MenuItemUI): void
    public updateUI(): void
    public getUIClassID(): string
    public setArmed(arg0: boolean): void
    public isArmed(): boolean
    public setEnabled(arg0: boolean): void
    public setAccelerator(arg0: javax.swing.KeyStroke): void
    public getAccelerator(): javax.swing.KeyStroke
    protected configurePropertiesFromAction(arg0: javax.swing.Action): void
    protected actionPropertyChanged(arg0: javax.swing.Action, arg1: java.lang.String | string): void
    public processMouseEvent(arg0: java.awt.event.MouseEvent, arg1: javax.swing.MenuElement[], arg2: javax.swing.MenuSelectionManager): void
    public processKeyEvent(arg0: java.awt.event.KeyEvent, arg1: javax.swing.MenuElement[], arg2: javax.swing.MenuSelectionManager): void
    public processMenuDragMouseEvent(arg0: javax.swing.event.MenuDragMouseEvent): void
    public processMenuKeyEvent(arg0: javax.swing.event.MenuKeyEvent): void
    protected fireMenuDragMouseEntered(arg0: javax.swing.event.MenuDragMouseEvent): void
    protected fireMenuDragMouseExited(arg0: javax.swing.event.MenuDragMouseEvent): void
    protected fireMenuDragMouseDragged(arg0: javax.swing.event.MenuDragMouseEvent): void
    protected fireMenuDragMouseReleased(arg0: javax.swing.event.MenuDragMouseEvent): void
    protected fireMenuKeyPressed(arg0: javax.swing.event.MenuKeyEvent): void
    protected fireMenuKeyReleased(arg0: javax.swing.event.MenuKeyEvent): void
    protected fireMenuKeyTyped(arg0: javax.swing.event.MenuKeyEvent): void
    public menuSelectionChanged(arg0: boolean): void
    public getSubElements(): javax.swing.MenuElement[]
    public getComponent(): java.awt.Component
    public addMenuDragMouseListener(arg0: javax.swing.event.MenuDragMouseListener): void
    public removeMenuDragMouseListener(arg0: javax.swing.event.MenuDragMouseListener): void
    public getMenuDragMouseListeners(): javax.swing.event.MenuDragMouseListener[]
    public addMenuKeyListener(arg0: javax.swing.event.MenuKeyListener): void
    public removeMenuKeyListener(arg0: javax.swing.event.MenuKeyListener): void
    public getMenuKeyListeners(): javax.swing.event.MenuKeyListener[]
    protected paramString(): string
    public getAccessibleContext(): javax.accessibility.AccessibleContext
    public static class: java.lang.Class<any>
}

    }
}