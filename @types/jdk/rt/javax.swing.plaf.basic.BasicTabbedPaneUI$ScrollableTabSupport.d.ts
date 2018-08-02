declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
class BasicTabbedPaneUI$ScrollableTabSupport implements java.awt.event.ActionListener , javax.swing.event.ChangeListener {
    public viewport: javax.swing.plaf.basic.BasicTabbedPaneUI$ScrollableTabViewport
    public tabPanel: javax.swing.plaf.basic.BasicTabbedPaneUI$ScrollableTabPanel
    public scrollForwardButton: javax.swing.JButton
    public scrollBackwardButton: javax.swing.JButton
    public croppedEdge: javax.swing.plaf.basic.BasicTabbedPaneUI$CroppedEdge
    public leadingTabIndex: int
    public scrollForward(arg0: int): void
    public scrollBackward(arg0: int): void
    public setLeadingTabIndex(arg0: int, arg1: int): void
    public stateChanged(arg0: javax.swing.event.ChangeEvent): void
    public actionPerformed(arg0: java.awt.event.ActionEvent): void
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}