declare namespace java {
  namespace beans {
    class PropertyChangeEvent extends java.util.EventObject {
      public constructor(
        arg0: java.lang.Object | any,
        arg1: java.lang.String | string,
        arg2: java.lang.Object | any,
        arg3: java.lang.Object | any
      )
      public getPropertyName(): java.lang.String
      public getNewValue(): java.lang.Object
      public getOldValue(): java.lang.Object
      public setPropagationId(arg0: java.lang.Object | any): void
      public getPropagationId(): java.lang.Object
      public toString(): java.lang.String
      appendTo(arg0: java.lang.StringBuilder): void
    }
  }
}
