declare namespace com {
    namespace sun {
        namespace java {
            namespace accessibility {
                namespace util {
                    class AWTEventMonitor$AWTEventsListener implements com.sun.java.accessibility.util.TopLevelWindowListener , java.awt.event.ActionListener , java.awt.event.AdjustmentListener , java.awt.event.ComponentListener , java.awt.event.ContainerListener , java.awt.event.FocusListener , java.awt.event.ItemListener , java.awt.event.KeyListener , java.awt.event.MouseListener , java.awt.event.MouseMotionListener , java.awt.event.TextListener , java.awt.event.WindowListener , javax.swing.event.ChangeListener {
                        public constructor()
                        protected installListeners(): void
                        protected installListeners(arg0: int): void
                        protected installListeners(arg0: java.awt.Component): void
                        public stateChanged(arg0: javax.swing.event.ChangeEvent): void
                        protected installListeners(arg0: java.awt.Component, arg1: int): void
                        protected removeListeners(arg0: int): void
                        protected removeListeners(arg0: java.awt.Component): void
                        protected removeListeners(arg0: java.awt.Component, arg1: int): void
                        public topLevelWindowCreated(arg0: java.awt.Window | java.awt.Window$$Lambda): void
                        public topLevelWindowDestroyed(arg0: java.awt.Window | java.awt.Window$$Lambda): void
                        public actionPerformed(arg0: java.awt.event.ActionEvent): void
                        public adjustmentValueChanged(arg0: java.awt.event.AdjustmentEvent): void
                        public componentHidden(arg0: java.awt.event.ComponentEvent): void
                        public componentMoved(arg0: java.awt.event.ComponentEvent): void
                        public componentResized(arg0: java.awt.event.ComponentEvent): void
                        public componentShown(arg0: java.awt.event.ComponentEvent): void
                        public componentAdded(arg0: java.awt.event.ContainerEvent): void
                        public componentRemoved(arg0: java.awt.event.ContainerEvent): void
                        public focusGained(arg0: java.awt.event.FocusEvent): void
                        public focusLost(arg0: java.awt.event.FocusEvent): void
                        public itemStateChanged(arg0: java.awt.event.ItemEvent): void
                        public keyPressed(arg0: java.awt.event.KeyEvent): void
                        public keyReleased(arg0: java.awt.event.KeyEvent): void
                        public keyTyped(arg0: java.awt.event.KeyEvent): void
                        public mouseClicked(arg0: java.awt.event.MouseEvent): void
                        public mouseEntered(arg0: java.awt.event.MouseEvent): void
                        public mouseExited(arg0: java.awt.event.MouseEvent): void
                        public mousePressed(arg0: java.awt.event.MouseEvent): void
                        public mouseReleased(arg0: java.awt.event.MouseEvent): void
                        public mouseDragged(arg0: java.awt.event.MouseEvent): void
                        public mouseMoved(arg0: java.awt.event.MouseEvent): void
                        public textValueChanged(arg0: java.awt.event.TextEvent): void
                        public windowOpened(arg0: java.awt.event.WindowEvent): void
                        public windowClosing(arg0: java.awt.event.WindowEvent): void
                        public windowClosed(arg0: java.awt.event.WindowEvent): void
                        public windowIconified(arg0: java.awt.event.WindowEvent): void
                        public windowDeiconified(arg0: java.awt.event.WindowEvent): void
                        public windowActivated(arg0: java.awt.event.WindowEvent): void
                        public windowDeactivated(arg0: java.awt.event.WindowEvent): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}