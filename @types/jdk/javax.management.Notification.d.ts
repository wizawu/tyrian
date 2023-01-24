declare namespace javax {
  namespace management {
    class Notification extends java.util.EventObject {
      protected source: java.lang.Object
      public constructor(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: number | java.lang.Long)
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.Object | any,
        arg2: number | java.lang.Long,
        arg3: java.lang.String | string
      )
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.Object | any,
        arg2: number | java.lang.Long,
        arg3: number | java.lang.Long
      )
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.Object | any,
        arg2: number | java.lang.Long,
        arg3: number | java.lang.Long,
        arg4: java.lang.String | string
      )
      public setSource(arg0: java.lang.Object | any): void
      public getSequenceNumber(): number
      public setSequenceNumber(arg0: number | java.lang.Long): void
      public getType(): java.lang.String
      public getTimeStamp(): number
      public setTimeStamp(arg0: number | java.lang.Long): void
      public getMessage(): java.lang.String
      public getUserData(): java.lang.Object
      public setUserData(arg0: java.lang.Object | any): void
      public toString(): java.lang.String
    }
  }
}
