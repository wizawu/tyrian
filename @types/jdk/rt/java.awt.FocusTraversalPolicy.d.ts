declare namespace java {
    namespace awt {
        abstract class FocusTraversalPolicy {
            public constructor()
            public getComponentAfter(arg0: java.awt.Container, arg1: java.awt.Component): java.awt.Component
            public getComponentBefore(arg0: java.awt.Container, arg1: java.awt.Component): java.awt.Component
            public getFirstComponent(arg0: java.awt.Container): java.awt.Component
            public getLastComponent(arg0: java.awt.Container): java.awt.Component
            public getDefaultComponent(arg0: java.awt.Container): java.awt.Component
            public getInitialComponent(arg0: java.awt.Window | java.awt.Window$$Lambda): java.awt.Component
            public static class: java.lang.Class<any>
        }
    }
}