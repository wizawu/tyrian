declare namespace java {
    namespace awt {
        class Scrollbar extends java.awt.Component implements java.awt.Adjustable , javax.accessibility.Accessible {
            public static HORIZONTAL: int
            public static VERTICAL: int
            public constructor()
            public constructor(arg0: int)
            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int)
            public addNotify(): void
            public getOrientation(): int
            public setOrientation(arg0: int): void
            public getValue(): int
            public setValue(arg0: int): void
            public getMinimum(): int
            public setMinimum(arg0: int): void
            public getMaximum(): int
            public setMaximum(arg0: int): void
            public getVisibleAmount(): int
            public getVisible(): int
            public setVisibleAmount(arg0: int): void
            public setUnitIncrement(arg0: int): void
            public setLineIncrement(arg0: int): void
            public getUnitIncrement(): int
            public getLineIncrement(): int
            public setBlockIncrement(arg0: int): void
            public setPageIncrement(arg0: int): void
            public getBlockIncrement(): int
            public getPageIncrement(): int
            public setValues(arg0: int, arg1: int, arg2: int, arg3: int): void
            public getValueIsAdjusting(): boolean
            public setValueIsAdjusting(arg0: boolean): void
            public addAdjustmentListener(arg0: java.awt.event.AdjustmentListener): void
            public removeAdjustmentListener(arg0: java.awt.event.AdjustmentListener): void
            public getAdjustmentListeners(): java.awt.event.AdjustmentListener[]
            public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
            protected processEvent<T extends java.util.EventListener>(arg0: java.awt.AWTEvent): void
            protected processAdjustmentEvent<T extends java.util.EventListener>(arg0: java.awt.event.AdjustmentEvent): void
            protected paramString<T extends java.util.EventListener>(): string
            public getAccessibleContext<T extends java.util.EventListener>(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
        class Scrollbar$$Lambda extends java.awt.Component implements java.awt.Adjustable , javax.accessibility.Accessible {
            public static HORIZONTAL: int
        }
    }
}