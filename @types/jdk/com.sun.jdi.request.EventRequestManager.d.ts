declare namespace com {
  namespace sun {
    namespace jdi {
      namespace request {

        interface EventRequestManager extends com.sun.jdi.Mirror {
          createClassPrepareRequest(): com.sun.jdi.request.ClassPrepareRequest
          createClassUnloadRequest(): com.sun.jdi.request.ClassUnloadRequest
          createThreadStartRequest(): com.sun.jdi.request.ThreadStartRequest
          createThreadDeathRequest(): com.sun.jdi.request.ThreadDeathRequest
          createExceptionRequest(arg0: com.sun.jdi.ReferenceType, arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean): com.sun.jdi.request.ExceptionRequest
          createMethodEntryRequest(): com.sun.jdi.request.MethodEntryRequest
          createMethodExitRequest(): com.sun.jdi.request.MethodExitRequest
          createMonitorContendedEnterRequest(): com.sun.jdi.request.MonitorContendedEnterRequest
          createMonitorContendedEnteredRequest(): com.sun.jdi.request.MonitorContendedEnteredRequest
          createMonitorWaitRequest(): com.sun.jdi.request.MonitorWaitRequest
          createMonitorWaitedRequest(): com.sun.jdi.request.MonitorWaitedRequest
          createStepRequest(arg0: com.sun.jdi.ThreadReference, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): com.sun.jdi.request.StepRequest
          createBreakpointRequest(arg0: com.sun.jdi.Location): com.sun.jdi.request.BreakpointRequest
          createAccessWatchpointRequest(arg0: com.sun.jdi.Field): com.sun.jdi.request.AccessWatchpointRequest
          createModificationWatchpointRequest(arg0: com.sun.jdi.Field): com.sun.jdi.request.ModificationWatchpointRequest
          createVMDeathRequest(): com.sun.jdi.request.VMDeathRequest
          deleteEventRequest(arg0: com.sun.jdi.request.EventRequest): void
          deleteEventRequests(arg0: java.util.List<com.sun.jdi.request.EventRequest>): void
          deleteAllBreakpoints(): void
          stepRequests(): java.util.List<com.sun.jdi.request.StepRequest>
          classPrepareRequests(): java.util.List<com.sun.jdi.request.ClassPrepareRequest>
          classUnloadRequests(): java.util.List<com.sun.jdi.request.ClassUnloadRequest>
          threadStartRequests(): java.util.List<com.sun.jdi.request.ThreadStartRequest>
          threadDeathRequests(): java.util.List<com.sun.jdi.request.ThreadDeathRequest>
          exceptionRequests(): java.util.List<com.sun.jdi.request.ExceptionRequest>
          breakpointRequests(): java.util.List<com.sun.jdi.request.BreakpointRequest>
          accessWatchpointRequests(): java.util.List<com.sun.jdi.request.AccessWatchpointRequest>
          modificationWatchpointRequests(): java.util.List<com.sun.jdi.request.ModificationWatchpointRequest>
          methodEntryRequests(): java.util.List<com.sun.jdi.request.MethodEntryRequest>
          methodExitRequests(): java.util.List<com.sun.jdi.request.MethodExitRequest>
          monitorContendedEnterRequests(): java.util.List<com.sun.jdi.request.MonitorContendedEnterRequest>
          monitorContendedEnteredRequests(): java.util.List<com.sun.jdi.request.MonitorContendedEnteredRequest>
          monitorWaitRequests(): java.util.List<com.sun.jdi.request.MonitorWaitRequest>
          monitorWaitedRequests(): java.util.List<com.sun.jdi.request.MonitorWaitedRequest>
          vmDeathRequests(): java.util.List<com.sun.jdi.request.VMDeathRequest>
        }

      }
    }
  }
}
