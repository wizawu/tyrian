declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
class MetalComboBoxButton extends javax.swing.JButton {
    protected comboBox: javax.swing.JComboBox
    protected listBox: javax.swing.JList
    protected rendererPane: javax.swing.CellRendererPane
    protected comboIcon: javax.swing.Icon
    protected iconOnly: boolean
    public getComboBox(): javax.swing.JComboBox
    public setComboBox(arg0: javax.swing.JComboBox | javax.swing.JComboBox$$Lambda): void
    public getComboIcon(): javax.swing.Icon
    public setComboIcon(arg0: javax.swing.Icon): void
    public isIconOnly(): boolean
    public setIconOnly(arg0: boolean): void
    public constructor(arg0: javax.swing.JComboBox | javax.swing.JComboBox$$Lambda, arg1: javax.swing.Icon, arg2: javax.swing.CellRendererPane | javax.swing.CellRendererPane$$Lambda, arg3: javax.swing.JList | javax.swing.JList$$Lambda)
    public constructor(arg0: javax.swing.JComboBox | javax.swing.JComboBox$$Lambda, arg1: javax.swing.Icon, arg2: boolean, arg3: javax.swing.CellRendererPane | javax.swing.CellRendererPane$$Lambda, arg4: javax.swing.JList | javax.swing.JList$$Lambda)
    public isFocusTraversable(): boolean
    public setEnabled(arg0: boolean): void
    public paintComponent(arg0: java.awt.Graphics): void
    public getMinimumSize(): java.awt.Dimension
    public static class: java.lang.Class<any>
}

            }
        }
    }
}