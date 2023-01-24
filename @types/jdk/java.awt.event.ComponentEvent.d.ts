declare namespace java {
  namespace awt {
    namespace event {
      class ComponentEvent extends java.awt.AWTEvent {
        public static readonly COMPONENT_FIRST: int
        public static readonly COMPONENT_LAST: int
        public static readonly COMPONENT_MOVED: int
        public static readonly COMPONENT_RESIZED: int
        public static readonly COMPONENT_SHOWN: int
        public static readonly COMPONENT_HIDDEN: int
        public constructor(arg0: java.awt.Component, arg1: number | java.lang.Integer)
        public getComponent(): java.awt.Component
        public paramString(): java.lang.String
      }
    }
  }
}
