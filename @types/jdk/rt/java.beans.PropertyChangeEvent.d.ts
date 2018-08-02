declare namespace java {
    namespace beans {
        class PropertyChangeEvent extends java.util.EventObject {
            public constructor(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.lang.Object)
            public getPropertyName(): string
            public getNewValue(): java.lang.Object
            public getOldValue(): java.lang.Object
            public setPropagationId(arg0: java.lang.Object): void
            public getPropagationId(): java.lang.Object
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}