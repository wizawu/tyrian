declare namespace java {
    namespace awt {
        abstract class MenuComponent implements java.io.Serializable {
            public constructor()
            public getName(): string
            public setName(arg0: java.lang.String | string): void
            public getParent(): java.awt.MenuContainer
            public getPeer(): java.awt.peer.MenuComponentPeer
            public getFont(): java.awt.Font
            public setFont(arg0: java.awt.Font): void
            public removeNotify(): void
            public postEvent(arg0: java.awt.Event): boolean
            public dispatchEvent(arg0: java.awt.AWTEvent): void
            protected processEvent(arg0: java.awt.AWTEvent): void
            protected paramString(): string
            public toString(): string
            protected getTreeLock(): java.lang.Object
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}