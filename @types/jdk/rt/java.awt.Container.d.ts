declare namespace java {
    namespace awt {
        class Container extends java.awt.Component {
            public constructor()
            public getComponentCount(): int
            public countComponents(): int
            public getComponent(arg0: int): java.awt.Component
            public getComponents(): java.awt.Component[]
            public getInsets(): java.awt.Insets
            public insets(): java.awt.Insets
            public add(arg0: java.awt.Component): java.awt.Component
            public add(arg0: java.lang.String | string, arg1: java.awt.Component): java.awt.Component
            public add(arg0: java.awt.Component, arg1: int): java.awt.Component
            public setComponentZOrder(arg0: java.awt.Component, arg1: int): void
            public getComponentZOrder(arg0: java.awt.Component): int
            public add(arg0: java.awt.Component, arg1: java.lang.Object): void
            public add(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
            protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
            public remove(arg0: int): void
            public remove(arg0: java.awt.Component): void
            public removeAll(): void
            public getLayout(): java.awt.LayoutManager
            public setLayout(arg0: java.awt.LayoutManager): void
            public doLayout(): void
            public layout(): void
            public isValidateRoot(): boolean
            public invalidate(): void
            public validate(): void
            protected validateTree(): void
            public setFont(arg0: java.awt.Font): void
            public getPreferredSize(): java.awt.Dimension
            public preferredSize(): java.awt.Dimension
            public getMinimumSize(): java.awt.Dimension
            public minimumSize(): java.awt.Dimension
            public getMaximumSize(): java.awt.Dimension
            public getAlignmentX(): float
            public getAlignmentY(): float
            public paint(arg0: java.awt.Graphics): void
            public update(arg0: java.awt.Graphics): void
            public print(arg0: java.awt.Graphics): void
            public paintComponents(arg0: java.awt.Graphics): void
            public printComponents(arg0: java.awt.Graphics): void
            public addContainerListener(arg0: java.awt.event.ContainerListener): void
            public removeContainerListener(arg0: java.awt.event.ContainerListener): void
            public getContainerListeners(): java.awt.event.ContainerListener[]
            public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
            protected processEvent<T extends java.util.EventListener>(arg0: java.awt.AWTEvent): void
            protected processContainerEvent<T extends java.util.EventListener>(arg0: java.awt.event.ContainerEvent): void
            public deliverEvent<T extends java.util.EventListener>(arg0: java.awt.Event): void
            public getComponentAt<T extends java.util.EventListener>(arg0: int, arg1: int): java.awt.Component
            public locate<T extends java.util.EventListener>(arg0: int, arg1: int): java.awt.Component
            public getComponentAt<T extends java.util.EventListener>(arg0: java.awt.Point): java.awt.Component
            public getMousePosition<T extends java.util.EventListener>(arg0: boolean): java.awt.Point
            public findComponentAt<T extends java.util.EventListener>(arg0: int, arg1: int): java.awt.Component
            public findComponentAt<T extends java.util.EventListener>(arg0: java.awt.Point): java.awt.Component
            public addNotify<T extends java.util.EventListener>(): void
            public removeNotify<T extends java.util.EventListener>(): void
            public isAncestorOf<T extends java.util.EventListener>(arg0: java.awt.Component): boolean
            protected paramString<T extends java.util.EventListener>(): string
            public list<T extends java.util.EventListener>(arg0: java.io.PrintStream, arg1: int): void
            public list<T extends java.util.EventListener>(arg0: java.io.PrintWriter, arg1: int): void
            public setFocusTraversalKeys<T extends java.util.EventListener>(arg0: int, arg1: java.util.Set<java.awt.AWTKeyStroke>): void
            public getFocusTraversalKeys<T extends java.util.EventListener>(arg0: int): java.util.Set<java.awt.AWTKeyStroke>
            public areFocusTraversalKeysSet<T extends java.util.EventListener>(arg0: int): boolean
            public isFocusCycleRoot<T extends java.util.EventListener>(arg0: java.awt.Container): boolean
            public setFocusTraversalPolicy<T extends java.util.EventListener>(arg0: java.awt.FocusTraversalPolicy): void
            public getFocusTraversalPolicy<T extends java.util.EventListener>(): java.awt.FocusTraversalPolicy
            public isFocusTraversalPolicySet<T extends java.util.EventListener>(): boolean
            public setFocusCycleRoot<T extends java.util.EventListener>(arg0: boolean): void
            public isFocusCycleRoot<T extends java.util.EventListener>(): boolean
            public setFocusTraversalPolicyProvider<T extends java.util.EventListener>(arg0: boolean): void
            public isFocusTraversalPolicyProvider<T extends java.util.EventListener>(): boolean
            public transferFocusDownCycle<T extends java.util.EventListener>(): void
            public applyComponentOrientation<T extends java.util.EventListener>(arg0: java.awt.ComponentOrientation): void
            public addPropertyChangeListener<T extends java.util.EventListener>(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
            public addPropertyChangeListener<T extends java.util.EventListener>(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
            public static class: java.lang.Class<any>
        }
    }
}