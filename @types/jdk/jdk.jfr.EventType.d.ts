declare namespace jdk {
  namespace jfr {

    class EventType {
      constructor(arg0: jdk.jfr.internal.PlatformEventType)
      public getFields(): java.util.List<jdk.jfr.ValueDescriptor>
      public getField(arg0: java.lang.String | string): jdk.jfr.ValueDescriptor
      public getName(): java.lang.String
      public getLabel(): java.lang.String
      public getId(): number
      public getAnnotationElements(): java.util.List<jdk.jfr.AnnotationElement>
      public isEnabled(): boolean
      public getDescription(): java.lang.String
      public getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
      public static getEventType(arg0: java.lang.Class<jdk.jfr.Event>): jdk.jfr.EventType
      public getSettingDescriptors(): java.util.List<jdk.jfr.SettingDescriptor>
      public getCategoryNames(): java.util.List<java.lang.String>
      getType(): jdk.jfr.internal.Type
      getPlatformEventType(): jdk.jfr.internal.PlatformEventType
    }

  }
}
