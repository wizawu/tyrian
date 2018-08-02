declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicTreeUI$ComponentHandler extends java.awt.event.ComponentAdapter implements java.awt.event.ActionListener {
                    protected timer: javax.swing.Timer
                    protected scrollBar: javax.swing.JScrollBar
                    public constructor(arg0: javax.swing.plaf.basic.BasicTreeUI)
                    public componentMoved(arg0: java.awt.event.ComponentEvent): void
                    protected startTimer(): void
                    protected getScrollPane(): javax.swing.JScrollPane
                    public actionPerformed(arg0: java.awt.event.ActionEvent): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}