declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicComboBoxUI extends javax.swing.plaf.ComboBoxUI {
                    protected comboBox: javax.swing.JComboBox
                    protected hasFocus: boolean
                    protected listBox: javax.swing.JList
                    protected currentValuePane: javax.swing.CellRendererPane
                    protected popup: javax.swing.plaf.basic.ComboPopup
                    protected editor: java.awt.Component
                    protected arrowButton: javax.swing.JButton
                    protected keyListener: java.awt.event.KeyListener
                    protected focusListener: java.awt.event.FocusListener
                    protected propertyChangeListener: java.beans.PropertyChangeListener
                    protected itemListener: java.awt.event.ItemListener
                    protected popupMouseListener: java.awt.event.MouseListener
                    protected popupMouseMotionListener: java.awt.event.MouseMotionListener
                    protected popupKeyListener: java.awt.event.KeyListener
                    protected listDataListener: javax.swing.event.ListDataListener
                    protected isMinimumSizeDirty: boolean
                    protected cachedMinimumSize: java.awt.Dimension
                    protected squareButton: boolean
                    protected padding: java.awt.Insets
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    public installUI(arg0: javax.swing.JComponent): void
                    public uninstallUI(arg0: javax.swing.JComponent): void
                    protected installDefaults(): void
                    protected installListeners(): void
                    protected uninstallDefaults(): void
                    protected uninstallListeners(): void
                    protected createPopup(): javax.swing.plaf.basic.ComboPopup
                    protected createKeyListener(): java.awt.event.KeyListener
                    protected createFocusListener(): java.awt.event.FocusListener
                    protected createListDataListener(): javax.swing.event.ListDataListener
                    protected createItemListener(): java.awt.event.ItemListener
                    protected createPropertyChangeListener(): java.beans.PropertyChangeListener
                    protected createLayoutManager(): java.awt.LayoutManager
                    protected createRenderer(): javax.swing.ListCellRenderer
                    protected createEditor(): javax.swing.ComboBoxEditor
                    protected installComponents(): void
                    protected uninstallComponents(): void
                    public addEditor(): void
                    public removeEditor(): void
                    protected configureEditor(): void
                    protected unconfigureEditor(): void
                    public configureArrowButton(): void
                    public unconfigureArrowButton(): void
                    protected createArrowButton(): javax.swing.JButton
                    public isPopupVisible(arg0: javax.swing.JComboBox): boolean
                    public setPopupVisible(arg0: javax.swing.JComboBox, arg1: boolean): void
                    public isFocusTraversable(arg0: javax.swing.JComboBox): boolean
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getBaseline(arg0: javax.swing.JComponent, arg1: int, arg2: int): int
                    public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
                    public getAccessibleChildrenCount(arg0: javax.swing.JComponent): int
                    public getAccessibleChild(arg0: javax.swing.JComponent, arg1: int): javax.accessibility.Accessible
                    protected isNavigationKey(arg0: int): boolean
                    protected selectNextPossibleValue(): void
                    protected selectPreviousPossibleValue(): void
                    protected toggleOpenClose(): void
                    protected rectangleForCurrentValue(): java.awt.Rectangle
                    protected getInsets(): java.awt.Insets
                    public paintCurrentValue(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: boolean): void
                    public paintCurrentValueBackground(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: boolean): void
                    protected getDefaultSize(): java.awt.Dimension
                    protected getDisplaySize(): java.awt.Dimension
                    protected getSizeForComponent(arg0: java.awt.Component): java.awt.Dimension
                    protected installKeyboardActions(): void
                    protected uninstallKeyboardActions(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}