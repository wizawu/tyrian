declare namespace javax {
    namespace swing {
        class Timer implements java.io.Serializable {
            protected listenerList: javax.swing.event.EventListenerList
            public constructor(arg0: int, arg1: java.awt.event.ActionListener)
            public addActionListener(arg0: java.awt.event.ActionListener): void
            public removeActionListener(arg0: java.awt.event.ActionListener): void
            public getActionListeners(): java.awt.event.ActionListener[]
            protected fireActionPerformed(arg0: java.awt.event.ActionEvent): void
            public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
            public static setLogTimers<T extends java.util.EventListener>(arg0: boolean): void
            public static getLogTimers<T extends java.util.EventListener>(): boolean
            public setDelay<T extends java.util.EventListener>(arg0: int): void
            public getDelay<T extends java.util.EventListener>(): int
            public setInitialDelay<T extends java.util.EventListener>(arg0: int): void
            public getInitialDelay<T extends java.util.EventListener>(): int
            public setRepeats<T extends java.util.EventListener>(arg0: boolean): void
            public isRepeats<T extends java.util.EventListener>(): boolean
            public setCoalesce<T extends java.util.EventListener>(arg0: boolean): void
            public isCoalesce<T extends java.util.EventListener>(): boolean
            public setActionCommand<T extends java.util.EventListener>(arg0: java.lang.String | string): void
            public getActionCommand<T extends java.util.EventListener>(): string
            public start<T extends java.util.EventListener>(): void
            public isRunning<T extends java.util.EventListener>(): boolean
            public stop<T extends java.util.EventListener>(): void
            public restart<T extends java.util.EventListener>(): void
            public static class: java.lang.Class<any>
        }
    }
}