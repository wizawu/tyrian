declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                class MetalToggleButtonUI extends javax.swing.plaf.basic.BasicToggleButtonUI {
                    protected focusColor: java.awt.Color
                    protected selectColor: java.awt.Color
                    protected disabledTextColor: java.awt.Color
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    public installDefaults(arg0: javax.swing.AbstractButton): void
                    protected uninstallDefaults(arg0: javax.swing.AbstractButton): void
                    protected getSelectColor(): java.awt.Color
                    protected getDisabledTextColor(): java.awt.Color
                    protected getFocusColor(): java.awt.Color
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected paintButtonPressed(arg0: java.awt.Graphics, arg1: javax.swing.AbstractButton): void
                    protected paintText(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg2: java.awt.Rectangle, arg3: java.lang.String | string): void
                    protected paintFocus(arg0: java.awt.Graphics, arg1: javax.swing.AbstractButton, arg2: java.awt.Rectangle, arg3: java.awt.Rectangle, arg4: java.awt.Rectangle): void
                    protected paintIcon(arg0: java.awt.Graphics, arg1: javax.swing.AbstractButton, arg2: java.awt.Rectangle): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}