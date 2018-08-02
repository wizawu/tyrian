declare namespace javax {
    namespace swing {
class DelegatingDefaultFocusManager extends javax.swing.DefaultFocusManager {
    public processKeyEvent(arg0: java.awt.Component, arg1: java.awt.event.KeyEvent): void
    public focusNextComponent(arg0: java.awt.Component): void
    public focusPreviousComponent(arg0: java.awt.Component): void
    public getFocusOwner(): java.awt.Component
    public clearGlobalFocusOwner(): void
    public getPermanentFocusOwner(): java.awt.Component
    public getFocusedWindow(): java.awt.Window
    public getActiveWindow(): java.awt.Window
    public getDefaultFocusTraversalPolicy(): java.awt.FocusTraversalPolicy
    public setDefaultFocusTraversalPolicy(arg0: java.awt.FocusTraversalPolicy): void
    public setDefaultFocusTraversalKeys(arg0: int, arg1: java.util.Set<java.awt.AWTKeyStroke>): void
    public getDefaultFocusTraversalKeys(arg0: int): java.util.Set<java.awt.AWTKeyStroke>
    public getCurrentFocusCycleRoot(): java.awt.Container
    public setGlobalCurrentFocusCycleRoot(arg0: java.awt.Container): void
    public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
    public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
    public addPropertyChangeListener(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
    public removePropertyChangeListener(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
    public addVetoableChangeListener(arg0: java.beans.VetoableChangeListener): void
    public removeVetoableChangeListener(arg0: java.beans.VetoableChangeListener): void
    public addVetoableChangeListener(arg0: java.lang.String | string, arg1: java.beans.VetoableChangeListener): void
    public removeVetoableChangeListener(arg0: java.lang.String | string, arg1: java.beans.VetoableChangeListener): void
    public addKeyEventDispatcher(arg0: java.awt.KeyEventDispatcher | java.awt.KeyEventDispatcher$$Lambda): void
    public removeKeyEventDispatcher(arg0: java.awt.KeyEventDispatcher | java.awt.KeyEventDispatcher$$Lambda): void
    public dispatchEvent(arg0: java.awt.AWTEvent): boolean
    public dispatchKeyEvent(arg0: java.awt.event.KeyEvent): boolean
    public upFocusCycle(arg0: java.awt.Component): void
    public downFocusCycle(arg0: java.awt.Container): void
    public static class: java.lang.Class<any>
}

    }
}