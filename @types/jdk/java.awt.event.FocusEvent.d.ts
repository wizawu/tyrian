declare namespace java {
  namespace awt {
    namespace event {
      class FocusEvent extends java.awt.event.ComponentEvent {
        public static readonly FOCUS_FIRST: int
        public static readonly FOCUS_LAST: int
        public static readonly FOCUS_GAINED: int
        public static readonly FOCUS_LOST: int
        temporary: boolean
        opposite: java.awt.Component
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: boolean | java.lang.Boolean,
          arg3: java.awt.Component
        )
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: boolean | java.lang.Boolean,
          arg3: java.awt.Component,
          arg4: java.awt.event.FocusEvent$Cause
        )
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: boolean | java.lang.Boolean
        )
        public constructor(arg0: java.awt.Component, arg1: number | java.lang.Integer)
        public isTemporary(): boolean
        public getOppositeComponent(): java.awt.Component
        public paramString(): java.lang.String
        public getCause(): java.awt.event.FocusEvent$Cause
        readResolve(): java.lang.Object
      }
    }
  }
}
