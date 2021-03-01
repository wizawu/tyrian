declare namespace java {
  namespace awt {
    namespace event {

      class ActionEvent extends java.awt.AWTEvent {

        public static readonly SHIFT_MASK: int
        public static readonly CTRL_MASK: int
        public static readonly META_MASK: int
        public static readonly ALT_MASK: int
        public static readonly ACTION_FIRST: int
        public static readonly ACTION_LAST: int
        public static readonly ACTION_PERFORMED: int
        actionCommand: java.lang.String
        when: long
        modifiers: int
        public constructor(arg0: java.lang.Object, arg1: int, arg2: java.lang.String)
        public constructor(arg0: java.lang.Object, arg1: int, arg2: java.lang.String, arg3: int)
        public constructor(arg0: java.lang.Object, arg1: int, arg2: java.lang.String, arg3: long, arg4: int)
        public getActionCommand(): java.lang.String
        public getWhen(): long
        public getModifiers(): int
        public paramString(): java.lang.String
      }

    }
  }
}
