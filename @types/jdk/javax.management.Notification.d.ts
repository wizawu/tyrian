declare namespace javax {
  namespace management {

    class Notification extends java.util.EventObject {

      protected source: java.lang.Object
      public constructor(arg0: java.lang.String, arg1: java.lang.Object, arg2: long)
      public constructor(arg0: java.lang.String, arg1: java.lang.Object, arg2: long, arg3: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.Object, arg2: long, arg3: long)
      public constructor(arg0: java.lang.String, arg1: java.lang.Object, arg2: long, arg3: long, arg4: java.lang.String)
      public setSource(arg0: java.lang.Object): void
      public getSequenceNumber(): long
      public setSequenceNumber(arg0: long): void
      public getType(): java.lang.String
      public getTimeStamp(): long
      public setTimeStamp(arg0: long): void
      public getMessage(): java.lang.String
      public getUserData(): java.lang.Object
      public setUserData(arg0: java.lang.Object): void
      public toString(): java.lang.String
    }

  }
}
