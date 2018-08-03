declare namespace java {
    namespace awt {
        abstract class KeyboardFocusManager implements java.awt.KeyEventDispatcher , java.awt.KeyEventPostProcessor {
            public static readonly FORWARD_TRAVERSAL_KEYS: int
            public static readonly BACKWARD_TRAVERSAL_KEYS: int
            public static readonly UP_CYCLE_TRAVERSAL_KEYS: int
            public static readonly DOWN_CYCLE_TRAVERSAL_KEYS: int
            public static getCurrentKeyboardFocusManager(): java.awt.KeyboardFocusManager
            public static setCurrentKeyboardFocusManager(arg0: java.awt.KeyboardFocusManager): void
            public constructor()
            public getFocusOwner(): java.awt.Component
            protected getGlobalFocusOwner(): java.awt.Component
            protected setGlobalFocusOwner(arg0: java.awt.Component): void
            public clearFocusOwner(): void
            public clearGlobalFocusOwner(): void
            public getPermanentFocusOwner(): java.awt.Component
            protected getGlobalPermanentFocusOwner(): java.awt.Component
            protected setGlobalPermanentFocusOwner(arg0: java.awt.Component): void
            public getFocusedWindow(): java.awt.Window
            protected getGlobalFocusedWindow(): java.awt.Window
            protected setGlobalFocusedWindow(arg0: java.awt.Window): void
            public getActiveWindow(): java.awt.Window
            protected getGlobalActiveWindow(): java.awt.Window
            protected setGlobalActiveWindow(arg0: java.awt.Window): void
            public getDefaultFocusTraversalPolicy(): java.awt.FocusTraversalPolicy
            public setDefaultFocusTraversalPolicy(arg0: java.awt.FocusTraversalPolicy): void
            public setDefaultFocusTraversalKeys(arg0: int, arg1: java.util.Set<java.awt.AWTKeyStroke>): void
            public getDefaultFocusTraversalKeys(arg0: int): java.util.Set<java.awt.AWTKeyStroke>
            public getCurrentFocusCycleRoot(): java.awt.Container
            protected getGlobalCurrentFocusCycleRoot(): java.awt.Container
            public setGlobalCurrentFocusCycleRoot(arg0: java.awt.Container): void
            public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
            public addPropertyChangeListener(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
            public removePropertyChangeListener(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
            public getPropertyChangeListeners(arg0: java.lang.String | string): java.beans.PropertyChangeListener[]
            protected firePropertyChange(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.Object): void
            public addVetoableChangeListener(arg0: java.beans.VetoableChangeListener): void
            public removeVetoableChangeListener(arg0: java.beans.VetoableChangeListener): void
            public getVetoableChangeListeners(): java.beans.VetoableChangeListener[]
            public addVetoableChangeListener(arg0: java.lang.String | string, arg1: java.beans.VetoableChangeListener): void
            public removeVetoableChangeListener(arg0: java.lang.String | string, arg1: java.beans.VetoableChangeListener): void
            public getVetoableChangeListeners(arg0: java.lang.String | string): java.beans.VetoableChangeListener[]
            protected fireVetoableChange(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.Object): void
            public addKeyEventDispatcher(arg0: java.awt.KeyEventDispatcher | java.awt.KeyEventDispatcher$$Lambda): void
            public removeKeyEventDispatcher(arg0: java.awt.KeyEventDispatcher | java.awt.KeyEventDispatcher$$Lambda): void
            protected getKeyEventDispatchers(): java.util.List<java.awt.KeyEventDispatcher>
            public addKeyEventPostProcessor(arg0: java.awt.KeyEventPostProcessor | java.awt.KeyEventPostProcessor$$Lambda): void
            public removeKeyEventPostProcessor(arg0: java.awt.KeyEventPostProcessor | java.awt.KeyEventPostProcessor$$Lambda): void
            protected getKeyEventPostProcessors(): java.util.List<java.awt.KeyEventPostProcessor>
            public abstract dispatchEvent(arg0: java.awt.AWTEvent): boolean
            public redispatchEvent(arg0: java.awt.Component, arg1: java.awt.AWTEvent): void
            public abstract dispatchKeyEvent(arg0: java.awt.event.KeyEvent): boolean
            public abstract postProcessKeyEvent(arg0: java.awt.event.KeyEvent): boolean
            public abstract processKeyEvent(arg0: java.awt.Component, arg1: java.awt.event.KeyEvent): void
            protected abstract enqueueKeyEvents(arg0: long, arg1: java.awt.Component): void
            protected abstract dequeueKeyEvents(arg0: long, arg1: java.awt.Component): void
            protected abstract discardKeyEvents(arg0: java.awt.Component): void
            public abstract focusNextComponent(arg0: java.awt.Component): void
            public abstract focusPreviousComponent(arg0: java.awt.Component): void
            public abstract upFocusCycle(arg0: java.awt.Component): void
            public abstract downFocusCycle(arg0: java.awt.Container): void
            public focusNextComponent(): void
            public focusPreviousComponent(): void
            public upFocusCycle(): void
            public downFocusCycle(): void
            public static class: java.lang.Class<any>
        }
    }
}