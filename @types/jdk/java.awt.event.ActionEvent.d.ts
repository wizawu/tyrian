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
        public constructor(arg0: java.lang.Object | any, arg1: number | java.lang.Integer, arg2: java.lang.String | string)
        public constructor(arg0: java.lang.Object | any, arg1: number | java.lang.Integer, arg2: java.lang.String | string, arg3: number | java.lang.Integer)
        public constructor(arg0: java.lang.Object | any, arg1: number | java.lang.Integer, arg2: java.lang.String | string, arg3: number | java.lang.Long, arg4: number | java.lang.Integer)
        public getActionCommand(): java.lang.String
        public getWhen(): number
        public getModifiers(): number
        public paramString(): java.lang.String
      }

    }
  }
}
