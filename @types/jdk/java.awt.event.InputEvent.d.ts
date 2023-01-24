declare namespace java {
  namespace awt {
    namespace event {
      abstract class InputEvent extends java.awt.event.ComponentEvent {
        public static readonly SHIFT_MASK: int
        public static readonly CTRL_MASK: int
        public static readonly META_MASK: int
        public static readonly ALT_MASK: int
        public static readonly ALT_GRAPH_MASK: int
        public static readonly BUTTON1_MASK: int
        public static readonly BUTTON2_MASK: int
        public static readonly BUTTON3_MASK: int
        public static readonly SHIFT_DOWN_MASK: int
        public static readonly CTRL_DOWN_MASK: int
        public static readonly META_DOWN_MASK: int
        public static readonly ALT_DOWN_MASK: int
        public static readonly BUTTON1_DOWN_MASK: int
        public static readonly BUTTON2_DOWN_MASK: int
        public static readonly BUTTON3_DOWN_MASK: int
        public static readonly ALT_GRAPH_DOWN_MASK: int
        static readonly FIRST_HIGH_BIT: int
        static readonly JDK_1_3_MODIFIERS: int
        static readonly HIGH_MODIFIERS: int
        when: long
        modifiers: int
        static readonly serialVersionUID: long
        public static getMaskForButton(arg0: number | java.lang.Integer): number
        constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Integer
        )
        public isShiftDown(): boolean
        public isControlDown(): boolean
        public isMetaDown(): boolean
        public isAltDown(): boolean
        public isAltGraphDown(): boolean
        public getWhen(): number
        public getModifiers(): number
        public getModifiersEx(): number
        public consume(): void
        public isConsumed(): boolean
        public static getModifiersExText(arg0: number | java.lang.Integer): java.lang.String
      }
    }
  }
}
