declare namespace java {
  namespace rmi {
    namespace server {

      interface RMIFailureHandler$$lambda {
        (arg0: java.lang.Exception): boolean | java.lang.Boolean
      }

      interface RMIFailureHandler {
        failure(arg0: java.lang.Exception): boolean
      }

    }
  }
}
