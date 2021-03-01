declare namespace javax {
  namespace swing {
    namespace plaf {

      class LayerUI<V extends java.awt.Component> extends javax.swing.plaf.ComponentUI implements java.io.Serializable {

        public constructor()
        public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
        public eventDispatched(arg0: java.awt.AWTEvent, arg1: javax.swing.JLayer<V>): void
        protected processComponentEvent(arg0: java.awt.event.ComponentEvent, arg1: javax.swing.JLayer<V>): void
        protected processFocusEvent(arg0: java.awt.event.FocusEvent, arg1: javax.swing.JLayer<V>): void
        protected processKeyEvent(arg0: java.awt.event.KeyEvent, arg1: javax.swing.JLayer<V>): void
        protected processMouseEvent(arg0: java.awt.event.MouseEvent, arg1: javax.swing.JLayer<V>): void
        protected processMouseMotionEvent(arg0: java.awt.event.MouseEvent, arg1: javax.swing.JLayer<V>): void
        protected processMouseWheelEvent(arg0: java.awt.event.MouseWheelEvent, arg1: javax.swing.JLayer<V>): void
        protected processInputMethodEvent(arg0: java.awt.event.InputMethodEvent, arg1: javax.swing.JLayer<V>): void
        protected processHierarchyEvent(arg0: java.awt.event.HierarchyEvent, arg1: javax.swing.JLayer<V>): void
        protected processHierarchyBoundsEvent(arg0: java.awt.event.HierarchyEvent, arg1: javax.swing.JLayer<V>): void
        public updateUI(arg0: javax.swing.JLayer<V>): void
        public installUI(arg0: javax.swing.JComponent): void
        public uninstallUI(arg0: javax.swing.JComponent): void
        public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
        public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
        public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
        public addPropertyChangeListener(arg0: java.lang.String, arg1: java.beans.PropertyChangeListener): void
        public removePropertyChangeListener(arg0: java.lang.String, arg1: java.beans.PropertyChangeListener): void
        public getPropertyChangeListeners(arg0: java.lang.String): java.beans.PropertyChangeListener[]
        protected firePropertyChange(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.lang.Object): void
        public applyPropertyChange(arg0: java.beans.PropertyChangeEvent, arg1: javax.swing.JLayer<V>): void
        public getBaseline(arg0: javax.swing.JComponent, arg1: int, arg2: int): int
        public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
        public doLayout(arg0: javax.swing.JLayer<V>): void
        public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
        public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
        public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
        public paintImmediately(arg0: int, arg1: int, arg2: int, arg3: int, arg4: javax.swing.JLayer<V>): void
        public imageUpdate(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: javax.swing.JLayer<V>): boolean
      }

    }
  }
}
