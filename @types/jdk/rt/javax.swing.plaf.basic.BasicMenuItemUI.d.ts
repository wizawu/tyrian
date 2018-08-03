declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicMenuItemUI extends javax.swing.plaf.MenuItemUI {
                    protected menuItem: javax.swing.JMenuItem
                    protected selectionBackground: java.awt.Color
                    protected selectionForeground: java.awt.Color
                    protected disabledForeground: java.awt.Color
                    protected acceleratorForeground: java.awt.Color
                    protected acceleratorSelectionForeground: java.awt.Color
                    protected acceleratorDelimiter: string
                    protected defaultTextIconGap: int
                    protected acceleratorFont: java.awt.Font
                    protected mouseInputListener: javax.swing.event.MouseInputListener
                    protected menuDragMouseListener: javax.swing.event.MenuDragMouseListener
                    protected menuKeyListener: javax.swing.event.MenuKeyListener
                    protected propertyChangeListener: java.beans.PropertyChangeListener
                    protected arrowIcon: javax.swing.Icon
                    protected checkIcon: javax.swing.Icon
                    protected oldBorderPainted: boolean
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    public installUI(arg0: javax.swing.JComponent): void
                    protected installDefaults(): void
                    protected installComponents(arg0: javax.swing.JMenuItem): void
                    protected getPropertyPrefix(): string
                    protected installListeners(): void
                    protected installKeyboardActions(): void
                    public uninstallUI(arg0: javax.swing.JComponent): void
                    protected uninstallDefaults(): void
                    protected uninstallComponents(arg0: javax.swing.JMenuItem): void
                    protected uninstallListeners(): void
                    protected uninstallKeyboardActions(): void
                    protected createMouseInputListener(arg0: javax.swing.JComponent): javax.swing.event.MouseInputListener
                    protected createMenuDragMouseListener(arg0: javax.swing.JComponent): javax.swing.event.MenuDragMouseListener
                    protected createMenuKeyListener(arg0: javax.swing.JComponent): javax.swing.event.MenuKeyListener
                    protected createPropertyChangeListener(arg0: javax.swing.JComponent): java.beans.PropertyChangeListener
                    public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    protected getPreferredMenuItemSize(arg0: javax.swing.JComponent, arg1: javax.swing.Icon, arg2: javax.swing.Icon, arg3: int): java.awt.Dimension
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    protected paintMenuItem(arg0: java.awt.Graphics, arg1: javax.swing.JComponent, arg2: javax.swing.Icon, arg3: javax.swing.Icon, arg4: java.awt.Color, arg5: java.awt.Color, arg6: int): void
                    protected paintBackground(arg0: java.awt.Graphics, arg1: javax.swing.JMenuItem, arg2: java.awt.Color): void
                    protected paintText(arg0: java.awt.Graphics, arg1: javax.swing.JMenuItem, arg2: java.awt.Rectangle, arg3: java.lang.String | string): void
                    public getPath(): javax.swing.MenuElement[]
                    protected doClick(arg0: javax.swing.MenuSelectionManager): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}