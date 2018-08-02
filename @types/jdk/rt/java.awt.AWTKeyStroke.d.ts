declare namespace java {
    namespace awt {
        class AWTKeyStroke implements java.io.Serializable {
            protected constructor()
            protected constructor(arg0: char, arg1: int, arg2: int, arg3: boolean)
            protected static registerSubclass(arg0: java.lang.Class<any>): void
            public static getAWTKeyStroke(arg0: char): java.awt.AWTKeyStroke
            public static getAWTKeyStroke(arg0: java.lang.Character, arg1: int): java.awt.AWTKeyStroke
            public static getAWTKeyStroke(arg0: int, arg1: int, arg2: boolean): java.awt.AWTKeyStroke
            public static getAWTKeyStroke(arg0: int, arg1: int): java.awt.AWTKeyStroke
            public static getAWTKeyStrokeForEvent(arg0: java.awt.event.KeyEvent): java.awt.AWTKeyStroke
            public static getAWTKeyStroke(arg0: java.lang.String | string): java.awt.AWTKeyStroke
            public getKeyChar(): char
            public getKeyCode(): int
            public getModifiers(): int
            public isOnKeyRelease(): boolean
            public getKeyEventType(): int
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public toString(): string
            protected readResolve(): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}