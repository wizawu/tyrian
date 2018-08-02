declare namespace javax {
    namespace swing {
class JMenuBar extends javax.swing.JComponent implements javax.accessibility.Accessible , javax.swing.MenuElement {
    public constructor()
    public getUI(): javax.swing.plaf.MenuBarUI
    public setUI(arg0: javax.swing.plaf.MenuBarUI): void
    public updateUI(): void
    public getUIClassID(): string
    public getSelectionModel(): javax.swing.SingleSelectionModel
    public setSelectionModel(arg0: javax.swing.SingleSelectionModel): void
    public add(arg0: javax.swing.JMenu): javax.swing.JMenu
    public getMenu(arg0: int): javax.swing.JMenu
    public getMenuCount(): int
    public setHelpMenu(arg0: javax.swing.JMenu): void
    public getHelpMenu(): javax.swing.JMenu
    public getComponentAtIndex(arg0: int): java.awt.Component
    public getComponentIndex(arg0: java.awt.Component): int
    public setSelected(arg0: java.awt.Component): void
    public isSelected(): boolean
    public isBorderPainted(): boolean
    public setBorderPainted(arg0: boolean): void
    protected paintBorder(arg0: java.awt.Graphics): void
    public setMargin(arg0: java.awt.Insets): void
    public getMargin(): java.awt.Insets
    public processMouseEvent(arg0: java.awt.event.MouseEvent, arg1: javax.swing.MenuElement[], arg2: javax.swing.MenuSelectionManager): void
    public processKeyEvent(arg0: java.awt.event.KeyEvent, arg1: javax.swing.MenuElement[], arg2: javax.swing.MenuSelectionManager): void
    public menuSelectionChanged(arg0: boolean): void
    public getSubElements(): javax.swing.MenuElement[]
    public getComponent(): java.awt.Component
    protected paramString(): string
    public getAccessibleContext(): javax.accessibility.AccessibleContext
    protected processKeyBinding(arg0: javax.swing.KeyStroke, arg1: java.awt.event.KeyEvent, arg2: int, arg3: boolean): boolean
    public addNotify(): void
    public removeNotify(): void
    public static class: java.lang.Class<any>
}

    }
}